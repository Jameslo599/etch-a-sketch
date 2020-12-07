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

//Changes color of grid and also activates pen upon click
function toggleColor(e) {
  let colors = document.getElementById("cell");
  switch(colors) {
    case "random":
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      e.target.style.backgroundColor = "#" + randomColor;
      break;
    case "gray":
      let opacity = Number(e.target.style.backgroundColor.slice(-4, -1));
      e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity + 0.1})`;
      if (opacity <= 1) { 
      e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity + 0.1})`;
    }
    default:
      e.target.style.backgroundColor = "black";  
  }
}

function togglePen() {
  if (!currentlyActive) {
    let boxes = document.querySelectorAll(".gridItem");
    boxes.forEach(boxes => {
      boxes.addEventListener("mouseleave", toggleColor);
    });
    return currentlyActive = true;
  } else {
    let boxes = document.querySelectorAll(".gridItem");
    boxes.forEach(boxes => {
      boxes.removeEventListener("mouseleave", toggleColor);
      }); 
      return currentlyActive = false;
    };
};
// Adjusts lightness of colors
function modifyBrightness(e) {
  if (brightness >= 0) {
     e.target.style.backgroundColor = `hsl(0, 0%, ${brightness - 10})`;
  } 
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

