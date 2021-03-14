let inputWidth = document.getElementById("width");
let inputHeight = document.getElementById("height");

let perimeter = document.getElementById("perimeter");
let area = document.getElementById("area");

let compute = document.getElementById("compute");

let Tips = document.getElementById("alert");

compute.addEventListener("click", computeAll);

function computeAll() {
    let width = inputWidth.value;
    let height = inputHeight.value;
    if (!isNaN(width) && !isNaN(height) && width != 0 && height != 0) {
        perimeter.value = 2 * (+width + +height);
        area.value = +width * +height;
    }
}
