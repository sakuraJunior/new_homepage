const cmElm = document.getElementById("cm");
const sizeElm = document.getElementById("size");
const degElm = document.getElementById("deg");
for(const elm of [cmElm, sizeElm]) {
    elm.addEventListener("input", () => {
        const cm = cmElm.value;
        const size = sizeElm.value;
        const deg = cm / Math.PI / size * 360;
        degElm.innerHTML = Number.isFinite(deg) ? Math.round(deg*1000)/1000 : "---";
    });
}
