/**
 * http://www.paulirish.com/2009/random-hex-color-code-snippets/
 * Random color in hexadecimal
 * */
function randomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

/**
 * Get random position for shape
 * */
function randomPosition(min,max) {
    return min + (Math.random() * (max-min));
}

export {randomColor, randomPosition};