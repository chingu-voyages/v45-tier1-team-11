const nameCol = document.getElementById("name-col");
const compCol = document.getElementById("comp-col");
const yearCol = document.getElementById("year-col");
const massCol = document.getElementById("mass-col");
nameCol.addEventListener("click", () => {
    reorderTable(0, "asc");
});
compCol.addEventListener("click", () => {
    reorderTable(1, "asc");
});
yearCol.addEventListener("click", () => {
    reorderTable(2, "asc");
});
massCol.addEventListener("click", () => {
    reorderTable(3, "asc");
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
