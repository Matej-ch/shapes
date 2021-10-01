import { randomPosition } from "./helper";
import Rectangle from "./Rectangle";
import Circle from "./Circle";

class SBackgroundCreator {
    constructor(canvasEl, {fillShape = true,numShapes = 10,alpha = true} = {}) {
        this.canvasEl = canvasEl;
        this.alpha = alpha;
        this.ctx =  this.canvasEl.getContext("2d",{alpha: this.alpha});
        this.fillShape = fillShape;
        this.numShapes = numShapes;

        this.canvasW = this.canvasEl.width;
        this.canvasH = this.canvasEl.height;
    }

    init() {

        var shape = getRandomShape(); // create a random shape

        // 60% chance shape will snap to x or y coordinates of the mouse
        if(Math.random() < .6) shape.x = e.pageX;
        if(Math.random() < .6) shape.y = e.pageY;

        shapes.unshift(shape); // insert new shape at beginning of array
        shapes = shapes.splice(0,5); // only keep most recent 100 shapes

        this.initListeners();
    }

    initListeners() {
        window.addEventListener('resize', e => {
            if(this.canvasEl.width > window.innerWidth) {
                this.canvasEl.width = window.innerWidth;
            } else {
                this.canvasEl.width = this.canvasW;
            }

            if(this.canvasEl.height > window.innerHeight) {
                this.canvasEl.height = window.innerHeight;
            } else {
                this.canvasEl.height = this.canvasH;
            }
        })
    }

    draw() {
        requestAnimationFrame(() => this.draw());
        this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);

        for(let i = 0; i < shapes.length; i++) {
            const shape = shapes[i];

            this.ctx.beginPath();
            this.ctx.fillStyle = this.ctx.strokeStyle = shape.fill;

            if(shape.radius === undefined) {
                this.ctx.rect(shape.x,shape.y,shape.width,shape.height);
            } else {
                this.ctx.ellipse(shape.x,shape.y,shape.radius,shape.radius,shape.rotation,shape.startAngle,shape.endAngle);
            }

            if(this.fillShape.checked) {
                this.ctx.fill();
            } else {
                this.ctx.stroke();
            }
        }
    }

    getRandomShape() {
        const potentialShapes = [
            new Rectangle({x:randomPosition(0,window.innerWidth),y: randomPosition(0,window.innerHeight),width: randomPosition(18,90),height: randomPosition(18,90)}),
            new Circle({x:randomPosition(0,window.innerWidth),y: randomPosition(0,window.innerHeight),radius:randomPosition(18,90)})
        ];
        return potentialShapes[Math.round(Math.random() * (potentialShapes.length - 1))];
    }
}

export default SBackgroundCreator;