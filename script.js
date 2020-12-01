//Generates a 16x16 grid upon loading of webpage
const container = document.getElementById("container");

function makeRows(rows) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', rows);
  for (c = 0; c < (rows * rows); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "gridItem";
  };
  hoverColor();
};

makeRows(16);

//Changes color of grid divs when mouse hovers over them
function changeColor() {
    ;
}
function hoverColor() {
  let boxes = document.querySelectorAll(".gridItem");
  boxes.forEach(boxes => {
    boxes.addEventListener("mouseover", () => {
        boxes.style.backgroundColor = "black"})
      });
}

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
