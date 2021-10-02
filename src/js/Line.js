import {randomColor, randomPosition} from "./helper";

class Line {
    constructor({x = 0,y= 0,dirX = 10,dirY = 10,fillColor = randomColor()} ={}) {
        this.x = x;
        this.y = y;
        this.dirX = dirX;
        this.dirY = dirY;
        this.fillColor = fillColor;
    }

    draw(ctx,fillShape) {
        ctx.beginPath();
        ctx.fillStyle = ctx.strokeStyle = this.fillColor;

        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.dirX,this.dirY);

        ctx.stroke();

    }

    init(canvas) {
        this.x = randomPosition(0,canvas.width);
        this.y = randomPosition(0,canvas.height);
        this.dirX = randomPosition(0,canvas.width);
        this.dirY =  randomPosition(0,canvas.height);
        this.fillColor = randomColor();
    }

}

export default Line;