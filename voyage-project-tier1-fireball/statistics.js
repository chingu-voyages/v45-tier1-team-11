// Create the year and composition histogram charts
let yearChart = null;
let compositionChart = null;
//Function to generate a Chart.js histograms
function createHistogram(data, labels, chartId, chartTitle) {
  const ctx = document.getElementById(chartId).getContext("2d");

  return new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: chartTitle,
          data: data,
          backgroundColor: "#e6270b",
          borderColor: "#e6270b",
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
//Function to update the Year Histogram
function updateYearHistogram(meteorites) {
  // Extract the years from the meteorite data
  const years = meteorites.map((meteorite) =>
    new Date(meteorite.year).getFullYear()
  );
  // Create an object, to store the amount of meteorites for each year
  const yearCounts = {};
  // Loop through the years and count the number of meteorites for each year
  years.forEach((year) => {
    if (yearCounts[year]) {
      yearCounts[year]++; // If the year exists in our object we increment the count
    } else {
      yearCounts[year] = 1; // If the year doesn't exist, initialize it with a count of 1
    }
  });

  // Sorting the years in the ascending order
  const sortedYears = Object.keys(yearCounts).sort((a, b) => a - b);
  // Creating an array of meteorite counts, that corresponds to the sorted years
  const yearData = sortedYears.map((year) => yearCounts[year]);

  if (yearChart) {
    yearChart.destroy(); // Destroy the previous chart, if its exists
  }
  // Creating a new year histogram chart using the updated data
  yearChart = createHistogram(
    yearData,
    sortedYears,
    "yearHistogram",
    "Number of Strikes by Year"
  );
}
// Function to update the composition histogram
function updateCompositionHistogram(meteorites) {
  // Create an object, to store the amount of meteorites for each composition
  const compositionCounts = {};

  meteorites.forEach((meteorite) => {
    const composition = meteorite.recclass;
    // Loop through the meteorites and count the number of occurrences for each composition
    if (compositionCounts[composition]) {
      compositionCounts[composition]++;
    } else {
      compositionCounts[composition] = 1;
    }
  });
  // Sorting compositions in an alphabetical order
  const sortedCompositions = Object.keys(compositionCounts).sort();
  // Create an array of meteorite counts corresponding to the sorted compositions
  const compositionData = sortedCompositions.map(
    (composition) => compositionCounts[composition]
  );

  if (compositionChart) {
    compositionChart.destroy(); // Destroy the previous chart, if its exists
  }
  // Creating a new composition histogram chart using the updated data
  compositionChart = createHistogram(
    compositionData,
    sortedCompositions,
    "compositionHistogram",
    "Number of Strikes by Meteorite Composition"
  );
}
// This function calculates and updates summary metrics based on filtered meteorite data.
async function updateSummaryMetrics(meteorites) {
  const totalStrikesElement = document.getElementById("totalStrikes");
  const averageMassElement = document.getElementById("averageMass");

  // Calculating the total number of meteorite strikes.
  const totalStrikes = meteorites.length;
  // Calculating the total mass of meteorites, considering valid mass values.
  const totalMass = meteorites.reduce((sum, meteorite) => {
    if (meteorite.mass && !isNaN(parseFloat(meteorite.mass))) {
      return sum + parseFloat(meteorite.mass);
    }
    return sum;
  }, 0);

  // Calculating the average mass of meteorites.
  const averageMass = totalMass / totalStrikes;
  // Updating HTML elements with calculated metrics
  totalStrikesElement.textContent = totalStrikes;
  averageMassElement.textContent = averageMass.toFixed(2);
}
