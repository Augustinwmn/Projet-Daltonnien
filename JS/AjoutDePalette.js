let paletteCounter = 4;
if (paletteCounter < 6) {
    function addNewPalette() {

        paletteCounter++;
        const paletteContainer = document.getElementById('paletteContainer');
        const colorInputContainer = document.getElementById('colorInputContainer');

        // Ajout des nouvelles entrées de couleur
        const newColorInput = document.createElement('input');
        newColorInput.type = 'color';
        newColorInput.name = 'palette';
        newColorInput.id = `palette-${paletteCounter}`;
        newColorInput.value = '#fff000';
        newColorInput.setAttribute('onchange', `updateColors(this.value, ${paletteCounter})`);
        newColorInput.style = `
        border: 1px solid;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        margin: 0;
        width: 200px;
        height: 100%;
        padding: 0;
        background-Color: #fff;
        `;
        newColorInput.style.webkitBorderColor = `transparent`;


        const newTextInput = document.createElement('input');
        newTextInput.type = 'text';
        newTextInput.name = 'text';
        newTextInput.id = `couleurInput-${paletteCounter}`;
        newTextInput.placeholder = '#ffffff';
        newTextInput.value = '#ffffff';
        newTextInput.setAttribute('onchange', `updateColors(this.value, ${paletteCounter})`);
        newTextInput.style = `
        height: 100%;
            width: 200px;
        border: 1px solid;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;`;


        const newButtonDel = document.createElement('button');
        newButtonDel


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
}
else {

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

