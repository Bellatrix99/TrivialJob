let inputWidth = document.getElementById("width");
let inputHeight = document.getElementById("height");

let perimeter = document.getElementById("perimeter");
let area = document.getElementById("area");

let compute = document.getElementById("compute");

let Tips = document.getElementById("alert");

let NaNError = false;

inputHeight.onblur = function () {
    if (isNaN(this.value)) {
        NaNError = true;
        this.value = '';
        Tips.innerHTML = `<div class="alert alert-danger alert-dismissible fade show">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>失败！</strong> 输入有误 请输入正数
</div>`;

        setTimeout(tipsN, 1000);
        function tipsN() {
            Tips.style.opacity = 0;
        }
        NaNError = !NaNError;
    }

};

inputWidth.onblur = function () {
    if (isNaN(this.value)) {
        NaNError = true;
        this.value = '';
        Tips.innerHTML = `<div class="alert alert-danger alert-dismissible fade show">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>失败！</strong> 输入有误 请输入正数
</div>`;

        setTimeout(tipsN, 1000);
        function tipsN() {
            Tips.style.opacity = 0;
        }
        NaNError = !NaNError;
    }
};

compute.addEventListener("click", computeAll);


function computeAll() {
    if (!NaNError) {
        let width = inputWidth.value;
        let height = inputHeight.value;
        perimeter.value = 2 * (+width + +height);
        area.value = +width * +height;
    }

}
