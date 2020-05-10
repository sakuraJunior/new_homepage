const cmElm = document.getElementById("cm");
const sizeElm = document.getElementById("size");
const degElm = document.getElementById("deg");
for(const elm of [cmElm, sizeElm]) {
    elm.addEventListener("input", () => {
        const cm = cmElm.value;
        const size = sizeElm.value;
        const deg = cm / Math.PI / size * 360;
        degElm.value = Number.isNaN(deg) ? "---" : Math.round(deg*1000)/1000;
    });
}
degElm.addEventListener("input", () => {
    const deg = degElm.value
    const size = sizeElm.value;
    const cm = deg * Math.PI * size / 360;
    cmElm.value = Number.isNan(cm) ? "---" : Math.round(cm*1000)/1000;
});
