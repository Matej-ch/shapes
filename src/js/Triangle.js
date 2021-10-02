import {randomColor, randomPosition} from "./helper";

class Triangle {
    constructor({x,y,z,fillColor = randomColor()} = {}) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.fillColor = fillColor;
    }

    draw(ctx,fillShape) {
        ctx.beginPath();
        ctx.fillStyle = ctx.strokeStyle = this.fillColor;

        ctx.moveTo(this.x,this.x);
        ctx.lineTo(this.y,this.x);
        ctx.lineTo(this.y,this.z);

        if(fillShape) {
            ctx.fill();
        } else {
            ctx.stroke();
        }
    }

    init(canvas) {
        this.x = randomPosition(0,canvas.width);
        this.y = randomPosition(0,canvas.height);
        this.z = randomPosition(0,canvas.height);
        this.fillColor = randomColor();
    }
}

export default Triangle;