import {randomColor, randomPosition} from "./helper";

class Rectangle {
    constructor({x = 0,y = 0,width = 10,height = 20,fillColor = randomColor()} = {}) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.fillColor = fillColor;
    }

    draw(ctx,fillShape) {
        ctx.beginPath();
        ctx.fillStyle = ctx.strokeStyle = this.fillColor;

        ctx.rect(this.x,this.y,this.width,this.height);

        if(fillShape) {
            ctx.fill();
        } else {
            ctx.stroke();
        }
    }

    init(canvas) {
        this.x = randomPosition(0,canvas.width);
        this.y = randomPosition(0,canvas.height);
        this.width = randomPosition(18,90);
        this.height = randomPosition(18,90);
        this.fillColor = randomColor();
    }
}

export default Rectangle;