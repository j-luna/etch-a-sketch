const container = document.querySelector(".container");

// for variable dimensions, remember you can adjust
// grid-template-columns/rows on the container using JS

// make this a function (you should remember to make MOST of these functions)


const createGrid = function(sideLength) {
    for (let i = 0; i < sideLength ** 2; i++) {
        container.style.gridTemplateColumns = `repeat(${sideLength}, auto)`;
        container.style.gridTemplateRows = `repeat(${sideLength}, auto)`;
    
        let content = document.createElement("div");
        content.classList.add("clear")
        container.appendChild(content);
    }

    gridBoxes = container.querySelectorAll('div')
    for (let i = 0; i < gridBoxes.length; i++) {
        gridBoxes[i].addEventListener("mouseover", function() {
          gridBoxes[i].classList.add("color");
        });
    }
}

createGrid(10);



// determine grid size
// draw up gride
// the event is something like... on hover? Then change to a particular color
// actually pretty simple - hard part is getting CSS (like always)

//TO DO now
// in HTMl, create button that, when clicked resets the grid to the currently held
// sidelength variable