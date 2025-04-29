function createGrid(targetValue) {

    gridSize = Number(targetValue);

    console.log(`gridSize is: ${gridSize}`);
    console.log(`gridSize type is: ` + typeof(gridSize));

    //Validate gridSize is a number
    if (Number.isInteger(gridSize) == false) {
        console.log("gridSize is not a integer");
        return;
    }

    const gridContainer = document.getElementById("grid");
    gridContainer.innerHTML = "";

    for (let i = 0; i < gridSize; i++) {

        console.log(`OUTER: Cycle count: ${i}`);
        const gridRow = document.createElement("div");
        gridRow.className = "grid-row";

        for (let y = 0; y < gridSize; y++) {

            console.log(`INNER: Cycle count: ${y}`);

            const gridCell = document.createElement("div");
            gridCell.className = "grid-cell";
            gridCell.addEventListener("click", (e) => {
                gridCell.classList.add("selected-cell");
            });
            
            gridRow.appendChild(gridCell);

        }

        gridContainer.appendChild(gridRow);

    };

};

