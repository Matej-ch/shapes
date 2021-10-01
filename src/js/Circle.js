import {randomColor} from "./helper";

class Circle {
    constructor({x = 0,
                    y= 0,
                    radius = 1,
                    rotation = 45 * Math.PI/180,
                    startAngle = 0,
                    endAngle =  2 * Math.PI,
                    fillColor = randomColor} = {}) {

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.rotation = rotation;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;

    }
}

export default Circle;