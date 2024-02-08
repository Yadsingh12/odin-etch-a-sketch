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

function hovering() {
    const square = document.querySelectorAll(".child");
    square.forEach(element => {
        element.addEventListener('mouseover', () => { element.classList.add('hovered') });
        element.addEventListener('mouseleave', () => { element.classList.remove('hovered') });
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