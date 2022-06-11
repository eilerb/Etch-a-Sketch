const container = document.querySelector('.container');
const settings = document.querySelector('.settings');
const sizeBtn = document.querySelector('button');
const shaderBtn = document.querySelector('.shader');
const randomBtn = document.querySelector('.random');
const eraseBtn = document.querySelector('.erase');
const borderBtn = document.querySelector('.border');
const backgroundBtn = document.querySelector('.background');

let squareDimension = 720 / 16;
let color = 'black';
let gridSize = 16;

document.addEventListener('DOMContentLoaded', grid)

// function coloring(event) {
//     //for (let i = 0; i < gridSize * gridSize; i++) {
//         if (eraseBtn.getAttribute('class') === 'erasing') {
//             squares[i].removeEventListener('mouseover', coloring);
//             //continue;
//             return;
//         }
//         squares[i].addEventListener('mouseover', () => {
//             squares[i].style.backgroundColor = color;
//         })
//     //}
// }

function grid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.boxSizing = 'border-box';
        square.style.height = squareDimension + 'px';
        square.style.width = squareDimension + 'px';
        square.style.border = 'solid black thin';
        square.style.backgroundColor = 'white';
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = color;
        });
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
    eraseBtn.setAttribute('class', 'erasing');
    const squares = document.querySelectorAll('.square');
    const squareArray = [...squares];
    squareArray.forEach(square => {
        //square.removeEventListener('mouseover');
        color = 'white';
        square.addEventListener('mousover', () => {
            square.style.backgroundColor = color;
        } )
    });
});

borderBtn.textContent = 'Remove borders';
borderBtn.setAttribute('class', 'borderyes');
borderBtn.addEventListener('click', toggleBorders)

backgroundBtn.textContent = 'Square color';

function newGrid() {
    container.innerHTML = '';
    squareDimension = 720 / gridSize;
    grid();
}

function toggleBorders() {
    const squares = document.querySelectorAll('.square');
    const squaresArray = [...squares];

    if (borderBtn.getAttribute('class') === 'borderyes') {
        borderBtn.setAttribute('class', 'borderno');
        borderBtn.textContent = 'Add borders';

        squaresArray.forEach(square => {
            square.style.border = 'none';
        });
    } else if (borderBtn.getAttribute('class') === 'borderno') {
        borderBtn.setAttribute('class', 'borderyes');
        borderBtn.textContent = 'Remove borders';

        squaresArray.forEach(square => {
            square.style.border = '1px solid black';
        });
    }

    

    
}
