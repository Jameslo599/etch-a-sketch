//Generates a 16x16 grid upon loading of webpage
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "gridItem";
  };
  hoverColor();
};

makeRows(16, 16);

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
