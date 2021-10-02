import {randomColor, randomPosition} from "./helper";

class Heart {
    constructor({x,y,lineWidth=2,fillColor = randomColor()} = {}) {
        this.x = x;
        this.y = y;
        this.lineWidth = lineWidth;
        this.fillColor = fillColor;
    }

    draw(ctx,fillShape) {
        ctx.fillStyle = ctx.strokeStyle = this.fillColor;

        this.drawCurve(ctx,this.x - 50, this.y, this.x - 50, this.y + 30, this.x, this.y + 35, this.x, this.y + 60, this.fillColor);
        this.drawCurve(ctx,this.x, this.y, this.x, this.y - 30, this.x - 50, this.y - 30, this.x - 50, this.y, this.fillColor);
        this.drawCurve(ctx,this.x, this.y + 60, this.x, this.y + 35, this.x + 50, this.y + 30, this.x + 50, this.y, this.fillColor);
        this.drawCurve(ctx,this.x + 50, this.y, this.x + 50, this.y - 30, this.x, this.y - 30, this.x, this.y, this.fillColor);
    }

    init(canvas) {
        this.x = randomPosition(0,canvas.width);
        this.y = randomPosition(0,canvas.height);
        this.fillColor = randomColor();

        console.log('x0: ',this.x - 50);
        console.log('y0: ',this.y);

        console.log('x1: ',this.x - 50);
        console.log('y1: ',this.y + 30);

        console.log('x2: ',this.x);
        console.log('y2: ',this.y + 35);

        console.log('x3: ',this.x);
        console.log('y3: ',this.y + 60);
    }

    drawCurve(ctx,x0, y0, x1, y1, x2, y2, x3, y3, color) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.bezierCurveTo(x1, y1, x2, y2, x3, y3);
        ctx.strokeStyle = color;
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.restore();
    }

}

export default Heart;