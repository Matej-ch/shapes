import Rectangle from "./Rectangle";
import {randomColor, randomPosition} from "./helper";

class Cube extends Rectangle {

    constructor({x = 0,y = 0,width = 10,fillColor = randomColor()} = {}) {
        super({x:x ,y:y,width: width,height: width,fillColor: fillColor});
    }

    draw(ctx,fillShape) {
        ctx.beginPath();
        ctx.fillStyle = ctx.strokeStyle = this.fillColor;

        ctx.rect(this.x,this.y,this.width,this.width);

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
        this.fillColor = randomColor();
    }

}

export default Cube;