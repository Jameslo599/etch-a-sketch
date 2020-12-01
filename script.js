//Generate a 16x16 grid upon loading of webpage
function makeGrid() {
    for (let i = 0; i < 16; i++) {
        let row = document.createElement("div");
        row.id = "row";
        for (let b = 0; b < 16; b++) {
            let box = document.createElement("div");
            box.id = "box";
            row.appendChild(box);
    }
        document.getElementById("container").appendChild(row);
    }
}
window.onload = makeGrid;

//Changes color of grid divs when mouse hovers over them
function changeColor () {
    document.getElementById("box").style.backgroundColor = "black";
}
box = document.getElementById("box");
box.addEventListener("mouseover", changeColor);