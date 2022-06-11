const container = document.querySelector('.container');
const settings = document.querySelector('.settings');
const sizeBtn = document.querySelector('button');
const shaderBtn = document.querySelector('.shader');
const randomBtn = document.querySelector('.random');
const eraseBtn = document.querySelector('.erase');
const borderBtn = document.querySelector('.border');

let squareDimension = 720 / 16;
let color = 'black';
let gridSize = 16;

document.addEventListener('DOMContentLoaded', grid)

function grid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.boxSizing = 'border-box';
        square.style.height = squareDimension + 'px';
        square.style.width = squareDimension + 'px';
        square.style.border = 'solid black thin';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        })
        container.appendChild(square);
    }
}

sizeBtn.setAttribute('type', 'button');
sizeBtn.textContent = 'Change Grid Size';
sizeBtn.addEventListener('click', () => {
    gridSize = parseInt(prompt('Number of squares per side:'));

    while (gridSize > 100) {
        gridSize = parseInt(prompt('Number of squares per side (max 100):'));
    }
    newGrid()
});

shaderBtn.textContent = 'Shader Mode';


randomBtn.textContent = 'RGB Mode';


eraseBtn.textContent = 'Eraser';
eraseBtn.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square');
    const squareArray = Array.fromArray(squares);
    squareArray.forEach(square => {
        square.removeEventListener('mouseover', tr);
        square.addEventListener('mousover', () => {
            square.style.backgroundColor = 'white';
        } )
    });
});

borderBtn.textContent = 'Remove borders';

function newGrid() {
    container.innerHTML = '';
    squareDimension = 720 / gridSize;
    grid();
}
