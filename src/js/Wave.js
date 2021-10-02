import {randomColor, randomPosition} from "./helper";

class Wave {
    constructor({x =0,y= 0,lineWidth =2,fillColor = randomColor()} = {}) {
        this.fillColor = fillColor;
        this.lineWidth = lineWidth;
        this.x = x;
        this.y = y;

        this.controlPoint1 = {x: 100, y: 200};
        this.controlPoint2 = {x: 200, y: 200};
        this.endPoint = {x: 200, y: 100};
    }

    draw(ctx,fillShape) {
        ctx.beginPath();
        ctx.fillStyle = ctx.strokeStyle = this.fillColor;
        ctx.lineWidth = this.lineWidth;
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(
            this.controlPoint1.x, this.controlPoint1.y,
            this.controlPoint2.x, this.controlPoint2.y,
            this.endPoint.x, this.endPoint.y
        );

        ctx.stroke();
    }

    init(canvas) {
        this.x = randomPosition(0,canvas.width);
        this.y = randomPosition(0,canvas.height);
        this.controlPoint1 = {x:randomPosition(0,canvas.width),y:randomPosition(0,canvas.width)};
        this.controlPoint2 = {x:randomPosition(0,canvas.width),y:randomPosition(0,canvas.width)};
        this.lineWidth = Math.floor(randomPosition(1,6));
        this.endPoint = {x:randomPosition(0,canvas.width),y:randomPosition(0,canvas.height)}
    }
}

export default Wave;