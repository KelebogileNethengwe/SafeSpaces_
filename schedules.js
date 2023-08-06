// Get references to the dropdown elements
var toDropdown = document.getElementById("to-dropdown");
var optionsDropdown = document.getElementById("options-dropdown");

// Add event listener to the 'To' dropdown
toDropdown.addEventListener("change", function () {
  var selectedToOption = toDropdown.options[toDropdown.selectedIndex].value;
  console.log("Selected 'To' option: " + selectedToOption);
});

// Add event listener to the 'Options' dropdown
optionsDropdown.addEventListener("change", function () {
  var selectedOptionsOption =
    optionsDropdown.options[optionsDropdown.selectedIndex].value;
  console.log("Selected 'Options' option: " + selectedOptionsOption);
});


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}