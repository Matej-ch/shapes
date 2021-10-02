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
        /** add 0.5, so the line from top of the screen is not drawn */
        this.x = Math.floor(randomPosition(0,canvas.width)) + 0.5;
        this.y = Math.floor(randomPosition(0,canvas.height)) + 0.5;
        this.fillColor = randomColor();
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