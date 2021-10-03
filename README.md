### Random shapes

Shapes created with canvas, can be user as background on webpage

### Install

npm i bg_shapes --save

### Usage

```javascript

import SBackgroundCreator from "./js/SBackgroundCreator";

window.onload = function () {
    const canvasEl = document.getElementById('canvas');
    
    /** create new background on given canvas element */
    /** available options 
     * fillShape = true,
     * numShapes = 10,
     * alpha = true,
     * bgColor = 'black', 
     * globalCompositeOperation = 'multiply'
     * */
    const bg = new SBackgroundCreator(canvasEl,{
        fillShape: true,
        numShapes: 20,
        bgColor:'linear-gradient(0.15turn, rgb(223, 185, 106, 1), rgb(135, 190, 231, 1)90% )'
    });

    /** use before init if you want remove some shapes */
    /** available values: Rectangle, Circle, Cube, Line, Triangle, Wave, Heart, SemiCircle */
    bg.deactivateShapes(['Heart','SemiCircle','Circle','Cube','Triangle']);
    
    /** initialize shapes */
    bg.init();

    /** draw shapes on page */
    bg.draw();
}

```