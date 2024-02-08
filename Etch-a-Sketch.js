const canvas = document.getElementById('canvas');
const draw = document.getElementById('draw');
const cells = document.getElementById('cells');
const backgroundColor = document.getElementById('backgroundColor');
const trailColor = document.getElementById('trailColor');
const trailDuration = document.getElementById('trailDuration');

drawGrid(16);

draw.addEventListener ('click', () => {
    drawGrid(cells.value);
});

function drawGrid(cellsPerSide) {
    let cellSize = 960/cellsPerSide;
    for (i=0; i<cellsPerSide; i++){
        let newCell = document.createElement('div');
        newCell.style.width = cellSize + 'px';
        newCell.style.backgroundColor = 'yellow';
    }
}