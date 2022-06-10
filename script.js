let container = document.querySelector('div');

let gridSize = 256
const squareDimension = 720/16;
let color = 'black';

for (let i = 0; i < gridSize; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.boxSizing = 'border-box';
    cell.style.height = squareDimension + 'px';
    cell.style.width = squareDimension + 'px';
    cell.style.border = 'solid black thin';
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = color;
    })
    container.appendChild(cell);
}






