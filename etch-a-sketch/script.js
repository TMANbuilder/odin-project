let MODE = "standard";

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

        const gridRow = document.createElement("div");
        gridRow.className = "grid-row";

        for (let y = 0; y < gridSize; y++) {

            const gridCell = document.createElement("div");
            gridCell.className = "grid-cell";
            gridCell.addEventListener("click", () => {
                if (MODE == "standard") {
                    gridCell.style.backgroundColor = targetColor;
                } else if (MODE == "eraser") {
                    gridCell.style.backgroundColor = "";
                } else {
                    console.log("ERROR");
                }
            });
            
            gridRow.appendChild(gridCell);

        }

        gridContainer.appendChild(gridRow);

    };

};

function clearGrid() {
    const gridContainer = document.getElementById("grid");
    gridContainer.innerHTML = "";    
};

function eraserMode() {
    MODE = "eraser";   
};

function standardMode() {
    MODE = "standard";
};

const gridSizeSlider = document.getElementById("grid-size");
let targetSize = gridSizeSlider.value;

createGrid(targetSize);

gridSizeSlider.addEventListener("click", () => {
    let targetSize = gridSizeSlider.value;

    console.log("The targetSize is: " + targetSize);
    createGrid(targetSize);

});