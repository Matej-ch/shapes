import {randomColor, randomPosition} from "./helper";

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

    draw(ctx,fillShape) {
        ctx.beginPath();
        ctx.fillStyle = ctx.strokeStyle = this.fillColor;

        ctx.ellipse(this.x,this.y,this.radius,this.radius,this.rotation,this.startAngle,this.endAngle);

        if(fillShape) {
            ctx.fill();
        } else {
            ctx.stroke();
        }
    }

    init(canvas) {
        this.x = randomPosition(0,canvas.width);
        this.y = randomPosition(0,canvas.height);
        this.radius = randomPosition(18,90);
        this.fillColor = randomColor();
    }
}

export default Circle;