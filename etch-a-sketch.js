function drawGrid (sideLen) {
    const container = document.querySelector("#container");

    for (let i = 0; i < sideLen; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("row")
        container.appendChild(gridRow);
        for (let j = 0; j < sideLen; j++) {
            const gridDiv = document.createElement("div");
            // gridDiv.textContent = "Test";
            gridDiv.classList.add("grid-div");
            gridRow.appendChild(gridDiv);
        }
    }

    const gridDivList = document.querySelectorAll(".grid-div");
    for (let gridDiv of gridDivList) {
        gridDiv.addEventListener("mouseover", function (e) {
            e.target.setAttribute("style", `background-color: rgb(${randomRgb()},${randomRgb()},${randomRgb()})`)
        })
    }
}

function randomRgb() {
    return Math.floor(Math.random() * 256);
}

let gridSize = 16;
drawGrid(gridSize);

const gridSizeButton = document.querySelector("button");
gridSizeButton.addEventListener('click', function (e) {
    let invalidGridSize = true;
    while (invalidGridSize) {
        gridSize = prompt("Please enter a new grid size");
        if ( (gridSize > 0) && (gridSize <= 100) ) {
            invalidGridSize = false;
        }
        else {
            alert("Invalid grid size selected!");
        }
    }
    container.replaceChildren();
    drawGrid(gridSize);
})