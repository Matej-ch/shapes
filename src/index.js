import SBackgroundCreator from "./js/SBackgroundCreator";


window.onload = function () {
    const canvasEl = document.getElementById('canvas');
    const bg = new SBackgroundCreator(canvasEl);

    bg.init();

    bg.draw();
}
