import {randomColor, randomPosition} from "./helper";
import Circle from "./Circle";

class SemiCircle extends Circle {
    constructor({x,y,radius,fillColor,startAngle,endAngle,rotation} = {}) {
        super({
            x,y,radius,rotation,startAngle,endAngle,fillColor
        });
    }

    init(canvas) {
        this.x = randomPosition(0,canvas.width);
        this.y = randomPosition(0,canvas.height);
        this.radius = randomPosition(18,90);
        this.fillColor = randomColor();
        this.startAngle = 0;
        this.endAngle = Math.random()*(2*Math.PI);
        this.rotation = Math.random()*(2*Math.PI);
    }
}

export default SemiCircle;