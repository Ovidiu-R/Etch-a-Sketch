document.addEventListener('DOMContentLoaded', () => {

const canvas = document.getElementById('canvas');
const draw = document.getElementById('draw');
const gridSize = document.getElementById('gridSize');
const backgroundColor = document.getElementById('backgroundColor');
const trailColor = document.getElementById('trailColor');
const trailDuration = document.getElementById('trailDuration');

drawGrid(gridSize.value);

draw.addEventListener ('click', () => {
    drawGrid(gridSize.value);
});

function drawGrid(gridSize) {
    let cellSize = 750/gridSize;
    if (canvas.querySelectorAll('div.cell').length > 0){
        clearCanvas();
        drawGrid(gridSize);
    } else {
        for (let i=0; i<(gridSize**2); i++){
            let newCell = document.createElement('div');
            newCell.setAttribute('class', 'cell');
            newCell.classList.add('cell');
            newCell.style.width = cellSize + 'px';
            newCell.style.height = cellSize + 'px';
            newCell.style.backgroundColor = 'yellow';
            setBackgroundColor(newCell);
            canvas.appendChild(newCell);
        } 
        setTrailColor();
    }
}

function clearCanvas(){
    let cells = canvas.querySelectorAll('div.cell');
    cells.forEach(element => {
        element.remove();
    });
}

function setBackgroundColor(newCell){
    newCell.style.backgroundColor = backgroundColor.value;
}

function setTrailColor(){
    let newCells = canvas.querySelectorAll('.cell');
    newCells.forEach (div => {
        div.addEventListener('mouseover', () => {
        div.style.backgroundColor = trailColor.value;
        });
        div.addEventListener('mouseout', () => {
            setTrailDuration(div, trailDuration.value);
        });
        
    });
}

function setTrailDuration(div, trailDuration) {
    setInterval(() => {
        div.style.backgroundColor = backgroundColor.value;
    }, (trailDuration*1000));
    
}

});