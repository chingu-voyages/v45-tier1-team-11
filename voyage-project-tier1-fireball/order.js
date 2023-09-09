const columnOrder = {
    "name-col": "asc",
    "comp-col": "asc",
    "year-col": "asc",
    "mass-col": "asc"
  };

const nameCol = document.getElementById("name-col");
const compCol = document.getElementById("comp-col");
const yearCol = document.getElementById("year-col");
const massCol = document.getElementById("mass-col");

nameCol.addEventListener("click", () => {
    if (columnOrder["name-col"] == "asc") {
        reorderTable(0, "asc");
        columnOrder["name-col"] = "desc";
    } else {
        reorderTable(0, "desc");
        columnOrder["name-col"] = "asc";
    }
});
compCol.addEventListener("click", () => {
    if (columnOrder["comp-col"] == "asc") {
        reorderTable(1, "asc");
        columnOrder["comp-col"] = "desc";
    } else {
        reorderTable(1, "desc");
        columnOrder["comp-col"] = "asc";
    }
});
yearCol.addEventListener("click", () => {
    if (columnOrder["year-col"] == "asc") {
        reorderTable(2, "asc");
        columnOrder["year-col"] = "desc";
    } else {
        reorderTable(2, "desc");
        columnOrder["year-col"] = "asc";
    }
});
massCol.addEventListener("click", () => {
    if (columnOrder["mass-col"] == "asc") {
        reorderTable(3, "asc");
        columnOrder["mass-col"] = "desc";
    } else {
        reorderTable(3, "desc");
        columnOrder["mass-col"] = "asc";
    }
});

// Function to reorder table
function reorderTable(num, sortOrder) {
    const table = document.querySelector('.results');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));

    // Sort the data based on the specified column and order
    rows.sort((a, b) => {
        const cellsA = a.cells;
        const cellsB = b.cells;
        
        if (sortOrder === 'asc') {
            return cellsA[num].textContent > cellsB[num].textContent ? 1 : -1;
        } else {
            return cellsB[num].textContent > cellsA[num].textContent ? 1 : -1;
        }
    });

    // Clear the existing table content
    tbody.innerHTML = '';

    // Append the sorted rows back to the table
    rows.forEach((row) => {
        tbody.appendChild(row);
    });
}
