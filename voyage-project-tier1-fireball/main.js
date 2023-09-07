// Get HTML elements with the IDs "met" (select list) and "dynamicField" (searchbox)
var selectOption = document.getElementById("met");
var dynamicField = document.getElementById("dynamicField");
// Create an input field dynamically and set its attributes
var inputField = document.createElement("input");
inputField.type = "text";
inputField.id = "input";
inputField.placeholder = "Enter text";
dynamicField.appendChild(inputField); // Append the input field to the "dynamicField" element
  
initialise();

// Function to change searchbox type depending on search field:
selectOption.addEventListener("change", function () {
  // Add an event listener to the "met"
  var selectedValue = selectOption.value;

  dynamicField.innerHTML = ""; // Clear previous content

  if (selectedValue === "mass") {
    var selectField = document.createElement("select"); // Create a select field dynamically with options for mass
    selectField.id = "input";

    var option1 = document.createElement("option");
    option1.value = "very low";
    option1.textContent = "very low (< 100 g)";
    option1.textContent = "very low (< 100 g)";
    selectField.appendChild(option1);

    var option2 = document.createElement("option");
    option2.value = "low";
    option2.textContent = "low (100-1000 g)";
    option2.textContent = "low (100-1000 g)";
    selectField.appendChild(option2);

    var option3 = document.createElement("option");
    option3.value = "medium";
    option3.textContent = "medium (1000-10000 g)";
    option3.textContent = "medium (1000-10000 g)";
    selectField.appendChild(option3);

    var option4 = document.createElement("option");
    option4.value = "high";
    option4.textContent = "high (10000-100000 g)";
    option4.textContent = "high (10000-100000 g)";
    selectField.appendChild(option4);

    var option5 = document.createElement("option");
    option5.value = "very high";
    option5.textContent = "very high (> 100000 g)";
    option5.textContent = "very high (> 100000 g)";
    selectField.appendChild(option5);

    dynamicField.appendChild(selectField); // Append the select field to the "dynamicField" element
  } else {
    var inputField = document.createElement("input"); // Create a text input field for other options
    inputField.type = "text";
    inputField.id = "input";
    inputField.placeholder = "Enter text";
    dynamicField.appendChild(inputField);
    initAutocomplete();
  }
});
// Functionality of search button:
const buttonSearch = document.getElementById("searchButton");
buttonSearch.addEventListener("click", () => {
  var selectedOption = document.getElementById("met").value;
  var input = document.getElementById("input").value;
  const searchParams = {};
  searchParams[selectedOption] = input;
  search(searchParams, input); // Calling search function to filter meteorite data based on the user input.
});
// Button to get all meteorites back:
const buttonClear = document.getElementById("clearButton");
buttonClear.addEventListener("click", initialise);

// Initialise autocompletion when webpage first loaded:
document.addEventListener("DOMContentLoaded", function () {
  initAutocomplete();
});
