let paletteCounter = 4;

function addNewPalette() {
    paletteCounter++;
    const paletteContainer = document.getElementById('paletteContainer');
    const colorInputContainer = document.getElementById('colorInputContainer');
    
    // Ajout des nouvelles entrées de couleur
    const newColorInput = document.createElement('input');
    newColorInput.type = 'color';
    newColorInput.name = 'palette';
    newColorInput.id = `palette-${paletteCounter}`;
    newColorInput.value = '#ffffff';
    newColorInput.setAttribute('onchange', `updateColors(this.value, ${paletteCounter})`);
    newColorInput.style = `
        width: 20vw;
        height: 20vh;
        padding: 0;
    `;
    
    const newTextInput = document.createElement('input');
    newTextInput.type = 'text';
    newTextInput.name = 'text';
    newTextInput.id = `couleurInput-${paletteCounter}`;
    newTextInput.placeholder = '#ffffff';
    newTextInput.value = '#ffffff';
    newTextInput.setAttribute('onchange', `updateColors(this.value, ${paletteCounter})`);
    newTextInput.style = `
        margin: 0;
        width: 100%;
    `;
    
    paletteContainer.appendChild(newColorInput);
    colorInputContainer.appendChild(newTextInput);
    
    // Ajout des carrés de daltonisme
    const protanopeContainer = document.querySelector('.Protanope .couleur');
    const deuteranopeContainer = document.querySelector('.Deuteranope .couleur');
    const tritanopeContainer = document.querySelector('.Tritanope .couleur');
    
    const newProtanopeDiv = document.createElement('div');
    newProtanopeDiv.id = `protanope-${paletteCounter}`;
    newProtanopeDiv.classList.add('daltonisme');
    newProtanopeDiv.style = `
        width: 100%;
        height: 100%;
        background-color: lightgray;
    `;

    const newDeuteranopeDiv = document.createElement('div');
    newDeuteranopeDiv.id = `deuteranope-${paletteCounter}`;
    newDeuteranopeDiv.classList.add('daltonisme');
    newDeuteranopeDiv.style = `
        width: 100%;
        height: 100%;
        background-color: lightgray;
    `;
    
    const newTritanopeDiv = document.createElement('div');
    newTritanopeDiv.id = `tritanope-${paletteCounter}`;
    newTritanopeDiv.classList.add('daltonisme');
    newTritanopeDiv.style = `
        width: 100%;
        height: 100%;
        background-color: lightgray;
    `;
    
    protanopeContainer.appendChild(newProtanopeDiv);
    deuteranopeContainer.appendChild(newDeuteranopeDiv);
    tritanopeContainer.appendChild(newTritanopeDiv);

    // Met à jour les couleurs pour appliquer le changement immédiatement
    updateColors(newColorInput.value, paletteCounter);
}

function updateColors(hex, id) {
    if (!hex) return;

    const intensity = document.getElementById("myRange").value;

    const protanopeResult = hexToColorBlind(hex, protanopeMatrix, intensity);
    const tritanopeResult = hexToColorBlind(hex, tritanopeMatrix, intensity);
    const deuteranopeResult = hexToColorBlind(hex, deuteranopeMatrix, intensity);

    document.getElementById(`palette-${id}`).value = hex;
    document.getElementById(`couleurInput-${id}`).value = hex;
    document.getElementById(`protanope-${id}`).style.backgroundColor = protanopeResult;
    document.getElementById(`tritanope-${id}`).style.backgroundColor = tritanopeResult;
    document.getElementById(`deuteranope-${id}`).style.backgroundColor = deuteranopeResult;
}

function updateAllColors() {
    for (let i = 1; i <= paletteCounter; i++) {
        const colorInput = document.getElementById(`palette-${i}`);
        updateColors(colorInput.value, i);
    }
}

document.getElementById("myRange").addEventListener("input", updateAllColors);

