const container = document.querySelector('#container');

function makeGrid(k) {
    for (let i = 0; i < k; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < k; j++) {
            const child = document.createElement('div');
            child.className = 'child';
            row.appendChild(child);
        }
        container.appendChild(row);
    }
}

function get_random_color(i) 
{
    let darken = 2.56*i;
    if(darken>256) darken =255;
    const red = Math.floor(Math.random()*(256 - darken));
    const blue = Math.floor(Math.random()*(256 - darken));
    const green = Math.floor(Math.random()*(256 - darken));
    return `rgb(${red},${blue},${green})`;
}

let i=0;
function hovering() {
    const square = document.querySelectorAll(".child");
    square.forEach(element => {
        element.addEventListener('mouseover', () => { element.style.backgroundColor = get_random_color(i); });
        element.addEventListener('mouseleave', () => { element.style.backgroundColor = 'white'; i++; });
    });
}

makeGrid(16);

hovering();

const body = document.querySelector('body');
const btn = document.createElement('button');
btn.textContent = "CHANGE";
body.prepend(btn);

btn.addEventListener('click', () => {
    const gridSize = Number(prompt("number of squares per side for the new grid"));
    if (isNaN(gridSize)) return;
    if (gridSize == 0) return;

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
    makeGrid(gridSize);
    hovering();

})