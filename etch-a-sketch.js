const SIDELEN = 16;
const container = document.querySelector("#container");

for (let i = 0; i < SIDELEN; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("row")
    container.appendChild(gridRow);
    for (let j = 0; j < SIDELEN; j++) {
        const gridDiv = document.createElement("div");
        // gridDiv.textContent = "Test";
        gridDiv.classList.add("grid-div");
        gridRow.appendChild(gridDiv);
    }
}

const gridDivList = document.querySelectorAll(".grid-div");
for (let gridDiv of gridDivList) {
    gridDiv.addEventListener("mouseover", function (e) {
        e.target.classList.add("grid-div-colored");
    })

    // gridDiv.addEventListener("mouseout", function (e) {
    //    e.target.classList.toggle("grid-div-colored");
    //})
}