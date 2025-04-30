function createGrid(targetValue) {

    gridSize = Number(targetValue);

    // validate gridSize is a number
    if (Number.isInteger(gridSize) == false) {
        return;
    }

    const gridContainer = document.getElementById("grid");
    gridContainer.innerHTML = "";

    const colorPicker = document.getElementById("color-picker");
    let targetColor = colorPicker.value;

    colorPicker.addEventListener("input", () => {
        targetColor = colorPicker.value;
    });

    for (let i = 0; i < gridSize; i++) {

        console.log(`OUTER: Cycle count: ${i}`);
        const gridRow = document.createElement("div");
        gridRow.className = "grid-row";

        for (let y = 0; y < gridSize; y++) {

            console.log(`INNER: Cycle count: ${y}`);

            const gridCell = document.createElement("div");
            gridCell.className = "grid-cell";
            gridCell.addEventListener("click", () => {
                gridCell.style.backgroundColor = targetColor;
            });
            
            gridRow.appendChild(gridCell);

        }

        gridContainer.appendChild(gridRow);

    };

};

function clearGrid() {
    const gridContainer = document.getElementById("grid");
    gridContainer.innerHTML = "";    
}
