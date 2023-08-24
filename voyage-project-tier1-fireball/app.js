// To add to the form, meteorite composition:
const recclass = [
  "Acapulcoite",
  "Achondrite-ung",
  "Angrite",
  "Aubrite",
  "C",
  "C2-ung",
  "C3-ung",
  "CBa",
  "CI1",
  "CK4",
  "CM2",
  "CO3.2",
  "CO3.3",
  "CO3.4",
  "CO3.5",
  "CO3.6",
  "CR2",
  "CR2-an",
  "CV3",
  "Diogenite",
  "Diogenite-pm",
  "EH3",
  "EH3/4-an",
  "EH4",
  "EH5",
  "EH7-an",
  "EL6",
  "Eucrite",
  "Eucrite-br",
  "Eucrite-cm",
  "Eucrite-mmict",
  "Eucrite-pmict",
  "H",
  "H/L3.6",
  "H/L3.9",
  "H/L4",
  "H3",
  "H3-4",
  "H3-5",
  "H3-6",
  "H3.4",
  "H3.7",
  "H3.8",
  "H3/4",
  "H4",
  "H4-5",
  "H4-6",
  "H4-an",
  "H4/5",
  "H5",
  "H5-6",
  "H5-7",
  "H5/6",
  "H6",
  "H?",
  "Howardite",
  "Iron",
  "Iron, IAB-MG",
  "Iron, IAB-sHL",
  "Iron, IAB-sLL",
  "Iron, IAB-ung",
  "Iron, IIAB",
  "Iron, IID",
  "Iron, IIE",
  "Iron, IIE-an",
  "Iron, IIF",
  "Iron, IIIAB",
  "Iron, IVA",
  "Iron, ungrouped",
  "Iron?",
  "K3",
  "L",
  "L/LL4",
  "L/LL5",
  "L/LL6",
  "L3",
  "L3-4",
  "L3-6",
  "L3.4",
  "L3.6",
  "L3.7",
  "L3.7-6",
  "L4",
  "L4-6",
  "L5",
  "L5-6",
  "L5/6",
  "L6",
  "LL",
  "LL3-6",
  "LL3.00",
  "LL3.15",
  "LL3.2",
  "LL3.3",
  "LL3.4",
  "LL3.6",
  "LL3.8",
  "LL3.9",
  "LL4",
  "LL5",
  "LL6",
  "Lodranite",
  "Martian (chassignite)",
  "Martian (nakhlite)",
  "Martian (shergottite)",
  "Mesosiderite",
  "Mesosiderite-A1",
  "Mesosiderite-A3",
  "Mesosiderite-A3/4",
  "OC",
  "Pallasite",
  "Pallasite, PMG",
  "R3.8-6",
  "Stone-uncl",
  "Unknown",
  "Ureilite",
  "Ureilite-an",
  "Winonaite",
];

async function initialise() {
  const outputElement = document.getElementById("results");
  try {
    const response = await fetch("utils/meteorites.json");
    const jsonData = await response.json();

    let meteorites = jsonData;
    outputElement.textContent = JSON.stringify(meteorites, null, 2);
    var filters = document.getElementById("filters");
    filters.innerHTML = "";
    updateSummaryMetrics(meteorites);
  } catch (error) {
    console.error("Error:", error);
    outputElement.textContent = "Meteorites not found.";
  }
}

initialise();

var selectOption = document.getElementById("met");
var dynamicField = document.getElementById("dynamicField");

var inputField = document.createElement("input");
inputField.type = "text";
inputField.id = "input";
inputField.placeholder = "Enter text";
dynamicField.appendChild(inputField);

selectOption.addEventListener("change", function () {
  var selectedValue = selectOption.value;

  dynamicField.innerHTML = ""; // Clear previous content

  if (selectedValue === "mass") {
    var selectField = document.createElement("select");
    selectField.id = "input";

    var option1 = document.createElement("option");
    option1.value = "very low";
    option1.textContent = "very low (< 100 g)";
    selectField.appendChild(option1);

    var option2 = document.createElement("option");
    option2.value = "low";
    option2.textContent = "low (100-1000 g)";
    selectField.appendChild(option2);

    var option3 = document.createElement("option");
    option3.value = "medium";
    option3.textContent = "medium (1000-10000 g)";
    selectField.appendChild(option3);

    var option4 = document.createElement("option");
    option4.value = "high";
    option4.textContent = "high (10000-100000 g)";
    selectField.appendChild(option4);

    var option5 = document.createElement("option");
    option5.value = "very high";
    option5.textContent = "very high (> 100000 g)";
    selectField.appendChild(option5);

    dynamicField.appendChild(selectField);
  } else {
    var inputField = document.createElement("input");
    inputField.type = "text";
    inputField.id = "input";
    inputField.placeholder = "Enter text";
    dynamicField.appendChild(inputField);
  }
});

function search(searchParams) {
  const outputElement = document.getElementById("results");
  let meteorites = JSON.parse(outputElement.textContent);
  var filters = document.getElementById("filters");
  var textElement = document.createElement("p");
  Object.keys(searchParams).forEach((parameter) => {
    const value = searchParams[parameter];
    textElement.textContent = `${parameter}: ${value}`;
    filters.appendChild(textElement);
    if (parameter == "year") {
      meteorites = meteorites.filter((meteorite) =>
        meteorite[parameter]
          ? meteorite[parameter].substring(0, 4) === value
          : false
      );
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
    } else {
      meteorites = meteorites.filter((meteorite) =>
        meteorite[parameter] ? meteorite[parameter] === value : false
      );
    }
  });
  updateSummaryMetrics(meteorites);
  outputElement.textContent = JSON.stringify(meteorites, null, 2);
}

async function updateSummaryMetrics(meteorites) {
  const totalStrikesElement = document.getElementById("totalStrikes");
  const averageMassElement = document.getElementById("averageMass");

  const totalStrikes = meteorites.length;
  const totalMass = meteorites.reduce((sum, meteorite) => {
    if (meteorite.mass && !isNaN(parseFloat(meteorite.mass))) {
      return sum + parseFloat(meteorite.mass);
    }
    return sum;
  }, 0);
  const averageMass = totalMass / totalStrikes;

  totalStrikesElement.textContent = totalStrikes;
  averageMassElement.textContent = averageMass.toFixed(2);
}

const buttonSearch = document.getElementById("searchButton");
buttonSearch.addEventListener("click", () => {
  var selectedOption = document.getElementById("met").value;
  var input = document.getElementById("input").value;
  const searchParams = {};
  searchParams[selectedOption] = input;
  search(searchParams);
});

const buttonClear = document.getElementById("clearButton");
buttonClear.addEventListener("click", initialise);
