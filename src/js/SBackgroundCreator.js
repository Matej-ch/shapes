import Rectangle from "./Rectangle";
import Circle from "./Circle";
import Heart from "./Heart";
import Line from "./Line";
import Wave from "./Wave";
import Triangle from "./Triangle";
import SemiCircle from "./SemiCircle";

/**
 *
 * */
class SBackgroundCreator {
    constructor(canvasEl, {fillShape = true,numShapes = 10,alpha = true,bgColor = 'black',globalCompositeOperation = 'multiply'} = {}) {
        this.canvasEl = canvasEl;
        this.alpha = alpha;
        this.ctx = this.canvasEl.getContext("2d",{alpha: this.alpha});
        this.fillShape = fillShape;
        this.numShapes = numShapes;
        this.globalCompositeOperation = globalCompositeOperation;

        this.canvasW = this.canvasEl.width;
        this.canvasH = this.canvasEl.height;

        this.canvasEl.style.cssText = `background:${bgColor}`;

        this.shapes = [];
    }

    init() {

        const potentialShapes = [
            'Rectangle',
            'Circle'
        ];

        for (let i = 0; i < this.numShapes; i++) {

            const shapeString = potentialShapes[Math.round(Math.random() * (potentialShapes.length - 1))];

            let shape = new Circle();
            switch (shapeString) {
                case 'Rectangle': shape = new Rectangle(); break;
                case 'Circle': shape = new Circle(); break;
                case 'Heart': shape = new Heart(); break;
                case 'Line': shape = new Line(); break;
                case 'Wave': shape = new Wave(); break;
                case 'Triangle': shape = new Triangle(); break;
                case 'SemiCircle': shape = new SemiCircle(); break;
            }

            shape.init(this.canvasEl);

            this.shapes.push(shape);
        }

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
        this.ctx.globalCompositeOperation = this.globalCompositeOperation;

        for(let i = 0; i < this.shapes.length; i++) {
            const shape = this.shapes[i];

            shape.draw(this.ctx,this.fillShape);
        }
    }
}

export default SBackgroundCreator;