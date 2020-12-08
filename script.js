//Generates a 16x16 grid upon loading of webpage
const container = document.getElementById("container");
let currentlyActive = false;
let colorButton = document.getElementById("cell");

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
//Button to make color black
let black = document.getElementById("blackButton");
black.addEventListener("click", () => {
  colorButton = "default";
});
//Button to make color random
let rainbow = document.getElementById("randomButton");
rainbow.addEventListener("click", () => {
  colorButton = "random";
});
//Button to make color incrementally darker
let gray = document.getElementById("darkenButton");
gray.addEventListener("click", () => {
    let boxes = document.querySelectorAll(".gridItem");
    boxes.forEach(boxes => {
      let opacity = -0.09;
      boxes.style.backgroundColor = `rgba(0, 0, 0, ${opacity + 0.1})`;
    });
  colorButton = "gray";
})
//Button for user-selected color
let colorWheel = document.createElement("INPUT");
colorWheel.setAttribute("type", "color");
colorWheel.setAttribute("id", "colorSelect")
let customButton = document.getElementById("customButton");
customButton.appendChild(colorWheel);
colorWheel.addEventListener("click", () => {
  colorButton = "custom";
});
//Changes color of grid
function toggleColor(e) {
  let colorTheme = colorButton;
  switch(colorTheme) {
    case "random":
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      e.target.style.backgroundColor = "#" + randomColor;
      break;
    case "gray":
      let opacity = Number(e.target.style.backgroundColor.slice(-4, -1));
      e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity + 0.1})`;
      if (opacity <= 1) { 
      e.target.style.backgroundColor = `rgba(0, 0, 0, ${opacity + 0.1})`;
      break;
    }
    case "custom":
      let selection = document.getElementById("colorSelect").value;
      e.target.style.backgroundColor = `${selection}`;
      break;
    default:
      e.target.style.backgroundColor = "black";  
  }
}
//Toggles on/off pen
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
  }
clearButton = document.getElementById("eraseButton");
clearButton.addEventListener("click", eraseGrid);
//Creates slider for grid
let slider = document.createElement("INPUT");
let slidecontainer = document.getElementById("slidecontainer");
let output = document.getElementById("number");
slider.setAttribute("type", "range");
slider.setAttribute("id", "slider");
slider.setAttribute("min", "1");
slider.setAttribute("max", "100");
slider.setAttribute("value", "16")
slidecontainer.appendChild(slider);
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}
function removeGrid() {
  let cell = document.querySelectorAll(".gridItem");
  cell.forEach(cell => {
    container.removeChild(cell);
  })
  let rows = slider.value;
  return makeRows(rows);
}
slider.addEventListener("click", removeGrid);