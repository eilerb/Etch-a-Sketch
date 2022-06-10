const container = document.querySelector('.container');
const btn = document.querySelector('button');
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

btn.setAttribute('type', 'button');
btn.textContent = 'Change Grid Size';
btn.addEventListener('click', () => {
    gridSize = parseInt(prompt('Number of squares per side:'));

    while (gridSize > 100) {
        gridSize = parseInt(prompt('Number of squares per side (max 100):'));
    }
    newGrid()
});

function newGrid() {
    container.innerHTML = '';
    squareDimension = 720 / gridSize;

    grid();

}