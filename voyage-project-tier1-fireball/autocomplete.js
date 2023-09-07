// Autocomplete class definition for autocompletion functionality:
class Autocomplete {
    constructor(inputElement, options) {
      this.inputElement = inputElement;
      this.options = options;
      this.isOpen = false;
      this.resultsContainer = document.createElement("div");
      this.resultsContainer.className = "autocomplete-results";
      this.resultsContainer.style.display = "none";
  
      this.setupListeners();
      this.inputElement.parentElement.appendChild(this.resultsContainer);
    }
  
    setupListeners() {
      // Input field keyup event listener
      this.inputElement.addEventListener("keyup", (event) => {
        this.filterResults(event.target.value);
      });
  
      // Input field blur event listener
      this.inputElement.addEventListener("blur", () => {
        setTimeout(() => {
          this.closeResults();
        }, 200); // Delay to allow clicking on a result
      });
  
      // Input field focus event listener
      this.inputElement.addEventListener("focus", () => {
        if (this.inputElement.value.length > 0) {
          this.openResults();
        }
      });
    }
  
    filterResults(query) {
      const filteredResults = this.options.data.filter((name) =>
        name.toLowerCase().includes(query.toLowerCase())
      );
  
      this.displayResults(filteredResults);
    }
  
    displayResults(results) {
      if (results.length === 0) {
        this.closeResults();
        return;
      }
  
      this.resultsContainer.innerHTML = "";
  
      results.forEach((result) => {
        const resultItem = document.createElement("div");
        resultItem.className = "autocomplete-result";
        resultItem.textContent = result;
  
        resultItem.addEventListener("click", () => {
          this.inputElement.value = result;
          this.closeResults();
        });
  
        this.resultsContainer.appendChild(resultItem);
      });
  
      this.openResults();
    }
  
    openResults() {
      this.resultsContainer.style.display = "block";
      this.isOpen = true;
    }
  
    closeResults() {
      this.resultsContainer.style.display = "none";
      this.isOpen = false;
    }
  }
// Function to initialise the autocomplete functionality:
function initAutocomplete() {
  const input = document.getElementById("input");

  if (document.getElementById("met").value == "name") {
    // Initialize an autocomplete instance
    new Autocomplete(input, {
      data: names,
    });
  } else if (document.getElementById("met").value == "recclass") {
    new Autocomplete(input, {
      data: recclass,
    });
  }
}
