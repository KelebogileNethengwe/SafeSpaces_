let recognition;
let mediaRecorder;
let recordedChunks = [];
const resultElement = document.getElementById("result");

function startRecording() {
  recordedChunks = [];
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(function (stream) {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.ondataavailable = function (event) {
        if (event.data.size > 0) {
          recordedChunks.push(event.data);
        }
      };
      mediaRecorder.onstop = function () {
        const audioBlob = new Blob(recordedChunks, { type: "audio/wav" });
        recognizeSpeech(audioBlob);
      };
      mediaRecorder.start();
    })
    .catch(function (err) {
      console.error("Error accessing the microphone:", err);
    });
}

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state !== "inactive") {
    mediaRecorder.stop();
  }
}

function playRecording() {
  if (recordedChunks.length === 0) {
    console.error("No recorded audio to play.");
    return;
  }

  const audioBlob = new Blob(recordedChunks, { type: "audio/wav" });
  const audioUrl = URL.createObjectURL(audioBlob);
  const audioElement = new Audio(audioUrl);
  audioElement.play();
}

function recognizeSpeech(audioBlob) {
  const audioUrl = URL.createObjectURL(audioBlob);
  const audioElement = new Audio(audioUrl);

  // Wait for the audio playback to finish before starting speech recognition
  const audioPromise = new Promise((resolve) => {
    audioElement.addEventListener("ended", () => {
      resolve();
    });
  });

  audioPromise.then(() => {
    // Speech Recognition
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.onresult = function (event) {
      let interimTranscript = "";
      let finalTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      resultElement.innerHTML = `<strong>Final Transcript:</strong> ${finalTranscript}<br><strong>Interim Transcript:</strong> ${interimTranscript}`;
    };

    recognition.onerror = function (event) {
      console.error("Speech recognition error:", event.error);
    };

    recognition.onend = function () {
      console.log("Recognition ended.");
    };

    // Start speech recognition on the audio
    recognition.start();
  });

  audioElement.play(); // Start playing the audio
}
