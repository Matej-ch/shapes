import Rectangle from "./Rectangle";
import Circle from "./Circle";
import Heart from "./Heart";
import Line from "./Line";
import Wave from "./Wave";
import Triangle from "./Triangle";
import SemiCircle from "./SemiCircle";
import Cube from "./Cube";

/**
 * @param {HTMLElement} canvasEl canvas element
 *
 * @param {Object} options object with options
 *
 * @constructor
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

        this.initListeners();

        this.potentialShapes = [
            'Rectangle',
            'Circle',
            'Cube',
            'Line',
            'Triangle',
            'Wave',
            'Heart',
            'SemiCircle'
        ];
    }

    /**
     * Initialize shapes and listeners
     * */
    init() {
        this.shapes = [];

        for (let i = 0; i < this.numShapes; i++) {

            const shapeString = this.potentialShapes[Math.round(Math.random() * (this.potentialShapes.length - 1))];

            let shape = new Circle();
            switch (shapeString) {
                case 'Rectangle': shape = new Rectangle(); break;
                case 'Circle': shape = new Circle(); break;
                case 'Heart': shape = new Heart(); break;
                case 'Line': shape = new Line(); break;
                case 'Wave': shape = new Wave(); break;
                case 'Triangle': shape = new Triangle(); break;
                case 'SemiCircle': shape = new SemiCircle(); break;
                case 'Cube': shape = new Cube(); break;
            }

            shape.init(this.canvasEl);

            this.shapes.push(shape);
        }
    }

    /**
     * Initialize listeners
     * */
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

            this.init();
        })
    }

    /**
     * Draw shapes on canvas
     * */
    draw() {
        requestAnimationFrame(() => this.draw());
        this.ctx.clearRect(0, 0, this.canvasW, this.canvasH);
        this.ctx.globalCompositeOperation = this.globalCompositeOperation;

        for(let i = 0; i < this.shapes.length; i++) {
            const shape = this.shapes[i];

            shape.draw(this.ctx,this.fillShape);
        }
    }

    /**
     * This function deactivate shapes given as string in array
     *
     * available values are 'Rectangle',
     * 'Circle',
     * 'Cube',
     * 'Line',
     * 'Triangle',
     * 'Wave',
     * 'Heart',
     * 'SemiCircle'
     *
     * @param {Array<string>} shapes
     * */
    deactivateShapes(shapes) {

        this.potentialShapes = this.potentialShapes.filter(shape => !shapes.includes(shape))
    }
}

export default SBackgroundCreator;