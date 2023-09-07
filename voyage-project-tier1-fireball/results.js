//Function to populate table with meteorite data
function populateTable(data) {
    const tableBody = document.querySelector(".results tbody");
    tableBody.innerHTML = ""; // Clear the existing table data
  
    data.forEach((meteorite) => {
      const row = document.createElement("tr");
  
      const nameCell = document.createElement("td");
      nameCell.textContent = meteorite.name;
      row.appendChild(nameCell);
  
      const compositionCell = document.createElement("td");
      compositionCell.textContent = meteorite.recclass;
      row.appendChild(compositionCell);
  
      const yearCell = document.createElement("td");
      yearCell.textContent = new Date(meteorite.year).getFullYear();
      row.appendChild(yearCell);
  
      const massCell = document.createElement("td");
  
      // Check if meteorite.mass is a valid number
      if (!isNaN(parseFloat(meteorite.mass))) {
        // Round to 2 decimal places if it has numbers (except 0) after the dot
        const massValue = parseFloat(meteorite.mass).toFixed(2);
        massCell.textContent = massValue;
      } else {
        // Set a dash "-" for NaN values
        massCell.textContent = "-";
      }
  
      row.appendChild(massCell);
  
      tableBody.appendChild(row);
  
      row.addEventListener("click", () => {
        findMarkerByName(meteorite.name);
      });
    });
  }
// This async function initialises the web application
async function initialise() {
    // Get the HTML element with the ID "results" and store it in the outputElement variable
    const outputElement = document.getElementById("results");
  
    try {
      const response = await fetch("utils/meteorites.json"); // Send a GET request to fetch data from "utils/meteorites.json"
      const jsonData = await response.json(); // Parse the response data as JSON
      loadMarkers(jsonData);
  
      let meteorites = jsonData; // Store the JSON data in a variable named "meteorites"
  
      outputElement.textContent = JSON.stringify(meteorites, null, 2);
  
      populateTable(meteorites);
  
      var filters = document.getElementById("filters"); // Get the HTML element with the ID "filters" and clear its content
      filters.innerHTML = "";
      // Call functions to update summary metrics, year histogram, and composition histogram
      updateSummaryMetrics(meteorites);
      updateYearHistogram(meteorites);
      updateCompositionHistogram(meteorites);
    } catch (error) {
      console.error("Error:", error);
      outputElement.textContent = "Meteorites not found.";
    }
}
// This function is responsible for filtering meteorites based on user-provided search parameters:
function search(searchParams, input) {
    if (input === "") {
      return;
    }
    const outputElement = document.getElementById("results");
    let meteorites = JSON.parse(outputElement.textContent); // Parse the JSON data of meteorites stored in the output element.
    var filters = document.getElementById("filters");
    var textElement = document.createElement("p");
    Object.keys(searchParams).forEach((parameter) => {
      if (filters.textContent.includes(parameter)) {
        return;
      }
      // Loop through each search parameter provided by the user.
      const value = searchParams[parameter];
      textElement.textContent = `${parameter}: ${value}`; // Create a text element to display the filter criteria.
      filters.appendChild(textElement); // Append the filter criteria to the filters element.
      // Check the search parameter and apply the corresponding filter.
      if (parameter == "year") {
        meteorites = meteorites.filter((meteorite) =>
          meteorite[parameter]
            ? meteorite[parameter].substring(0, 4) === value
            : false
        );
        // Apply mass range filters based on user-provided values.
      } else if (parameter == "mass") {
        if (value === "very low") {
          meteorites = meteorites.filter((meteorite) =>
            meteorite[parameter] ? parseInt(meteorite[parameter]) < 100 : false
          );
        } else if (value === "low") {
          meteorites = meteorites.filter((meteorite) =>
            meteorite[parameter]
              ? parseInt(meteorite[parameter]) >= 100 &&
                parseInt(meteorite[parameter]) < 1000
              : false
          );
        } else if (value === "medium") {
          meteorites = meteorites.filter((meteorite) =>
            meteorite[parameter]
              ? parseInt(meteorite[parameter]) >= 1000 &&
                parseInt(meteorite[parameter]) < 10000
              : false
          );
        } else if (value === "high") {
          meteorites = meteorites.filter((meteorite) =>
            meteorite[parameter]
              ? parseInt(meteorite[parameter]) >= 10000 &&
                parseInt(meteorite[parameter]) < 100000
              : false
          );
        } else if (value === "very high") {
          meteorites = meteorites.filter((meteorite) =>
            meteorite[parameter]
              ? parseInt(meteorite[parameter]) >= 100000
              : false
          );
        }
        // Apply filters for other search parameters.
      } else {
        meteorites = meteorites.filter((meteorite) =>
          meteorite[parameter]
            ? meteorite[parameter].toLowerCase() === value.toLowerCase()
            : false
        );
      }
    });
    //Updating Metrict and Histograms
    updateSummaryMetrics(meteorites);
    updateYearHistogram(meteorites);
    updateCompositionHistogram(meteorites);
    loadMarkers(meteorites);
    outputElement.textContent = JSON.stringify(meteorites, null, 2);
    populateTable(meteorites);
  }
