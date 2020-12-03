//Generates a 16x16 grid upon loading of webpage
const container = document.getElementById("container");
let currentlyActive = false;

function makeRows(rows) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', rows);
  for (c = 0; c < (rows * rows); c++) {
    let cell = document.createElement("div");
    cell.setAttribute("id", "cell")
    container.appendChild(cell).className = "gridItem";
  };
  container.addEventListener("click", togglePen);
};

makeRows(16);

//Changes color of grid divs when mouse hovers over them
function toggleBlack(e) {
  e.target.style.backgroundColor = "black"
}
function togglePen() {
  if (!currentlyActive) {
    let boxes = document.querySelectorAll(".gridItem");
    boxes.forEach(boxes => {
      boxes.addEventListener("mouseleave", toggleBlack);
    });
    return currentlyActive = true;
  } else {
    let boxes = document.querySelectorAll(".gridItem");
    boxes.forEach(boxes => {
      boxes.removeEventListener("mouseleave", toggleBlack);
      }); 
      return currentlyActive = false;
    };
};

//Remove grid before reset
function removeGrid() {
  let cell = document.querySelectorAll(".gridItem");
  cell.forEach(cell => {
    container.removeChild(cell);
  })
}
//Resets the grid
function eraseGrid() {
  let boxes = document.querySelectorAll(".gridItem");
  boxes.forEach(boxes => {
    boxes.style.backgroundColor = "white";
  })
  removeGrid();
  let rows = prompt("Enter number of squares per side",);
  return makeRows(rows);
}
clearButton = document.getElementById("eraseButton");
clearButton.addEventListener("click", eraseGrid);
