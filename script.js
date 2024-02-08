const parent = document.querySelector('#parent');
for(let i=0; i<16; i++){
    const row = document.createElement('div');
    row.className = 'row';
    for(let j=0; j<16; j++){
        const child = document.createElement('div');
        child.className = 'child';
        row.appendChild(child);
    }
    parent.appendChild(row);
}
