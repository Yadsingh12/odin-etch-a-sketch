const container = document.querySelector('#container');
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < 16; j++) {
        const child = document.createElement('div');
        child.className = 'child';
        row.appendChild(child);
    }
    container.appendChild(row);
}

const square = document.querySelectorAll(".child");
square.forEach(element => {
    element.addEventListener('mouseover', () => { element.classList.add('hovered') });
    element.addEventListener('mouseleave', () => { element.classList.remove('hovered') });
});

const body = document.querySelector('body');
const btn = document.createElement('button');
btn.textContent = "CHANGE";
body.prepend(btn);

btn.addEventListener('click', () => {
    const gridSize = Number(prompt("number of squares per side for the new grid"));
    if (isNaN(gridSize)) return;
    else {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
        for (let i = 0; i < gridSize; i++) {
            const row = document.createElement('div');
            row.className = 'row';
            for (let j = 0; j < gridSize; j++) {
                const child = document.createElement('div');
                child.className = 'child';
                row.appendChild(child);
            }
            container.appendChild(row);
            const square = document.querySelectorAll(".child");
            square.forEach(element => {
                element.addEventListener('mouseover', () => { element.classList.add('hovered') });
                element.addEventListener('mouseleave', () => { element.classList.remove('hovered') });
            });
        }
    }
})