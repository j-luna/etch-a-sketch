const GRIDSIZE = 16;
const container = document.querySelector("#container");

for (let i = 0; i < GRIDSIZE; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.textContent = "Test";
    container.appendChild(gridDiv);
}
