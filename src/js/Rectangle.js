import {randomColor} from "./helper";

class Rectangle {
    constructor({x = 0,y = 0,width = 10,height = 20,fillColor = randomColor} = {}) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.fillColor = fillColor;
    }
}

export default Rectangle;