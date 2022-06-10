let container = document.querySelector('div');

let gridSize = 256
const squareDimension = 960/16;

for (let i = 0; i < gridSize; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.height = squareDimension + 'px';
    square.style.width = squareDimension + 'px';
    square.style.border = 'solid black thin';
    container.appendChild(square);
}





