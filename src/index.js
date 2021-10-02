import SBackgroundCreator from "./js/SBackgroundCreator";


window.onload = function () {
    const canvasEl = document.getElementById('canvas');
    const bg = new SBackgroundCreator(canvasEl,{
        fillShape: true,
        numShapes: 20,
        bgColor:'linear-gradient(0.15turn, rgb(223, 185, 106, 1), rgb(135, 190, 231, 1)90% )'
    });

    bg.init();

    bg.draw();
}
