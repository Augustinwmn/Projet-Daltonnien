let paletteCounter = 4; // Le nombre initial de palettes (selon ton exemple)
const maxPalettes = 6;

function addPalette() {

    if (paletteCounter >= maxPalettes) {
        alert("Le nombre maximum de palettes a été atteint.");
        return; // Empêche l'ajout de palettes supplémentaires
    }
    // Incrémenter le compteur de palettes
    paletteCounter++;

    // Cibler l'élément parent où les palettes doivent être ajoutées
    const paletteParent = document.querySelector('.simuCouleur'); // Cela cible le premier conteneur .couleurP

    const btnsupprDiv = document.createElement('div');
    btnsupprDiv.classList.add('btnsuppr');
    btnsupprDiv.id = `btnsuppr-${paletteCounter}`; // Ajouter un ID unique à la div

    // Créer les nouveaux éléments de palette
    const newPaletteDiv = document.createElement('div');
    newPaletteDiv.classList.add('couleurP');
    newPaletteDiv.id = `couleurP-${paletteCounter}`; // Ajouter un ID unique à la div

    const newColorInput = document.createElement('input');
    newColorInput.type = 'color';
    newColorInput.name = 'palette';
    newColorInput.id = `palette-${paletteCounter}`;
    newColorInput.value = getRandomColor();  // Valeur initiale par défaut
    newColorInput.style =  `border: 1px solid;
                            border-top-left-radius: 15px;
                            border-top-right-radius: 15px;
                            margin: 0;
                            width: 100%;
                            height: 117.5px;
                            padding: 0;`;

    // L'événement onchange pour appeler la fonction de mise à jour des couleurs
    newColorInput.setAttribute('onchange', `updateColors(this.value, ${paletteCounter})`);

    const newTextInput = document.createElement('input');
    newTextInput.type = 'text';
    newTextInput.name = 'text';
    newTextInput.id = `couleurInput-${paletteCounter}`;
    newTextInput.placeholder = '#ffffff';
    newTextInput.value = '#ffffff';  // Valeur initiale par défaut
    newTextInput.style =` width: 99%;
                        border: 1px solid;
                        border-bottom-left-radius: 15px;
                        border-bottom-right-radius: 15px;
                        text-align: center;
                        padding: 0;`
    newTextInput.setAttribute('onchange', `updateColors(this.value, ${paletteCounter})`);

    // Créer le bouton de suppression
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Borrar';
    deleteButton.classList.add('delete-btn');
    deleteButton.style = 'margin-top: 10px; background-color: gray; color: white; border: none; padding: 5px 10px; border-radius: 5px; width: 100%;';
    
    // Ajouter un événement au bouton de suppression
    deleteButton.addEventListener('click', function() {
        removePalette(paletteCounter);
    });

    // Ajouter les inputs et le bouton à la div de la palette
    newPaletteDiv.appendChild(newColorInput);
    newPaletteDiv.appendChild(newTextInput);
    // newPaletteDiv.appendChild(deleteButton);

    btnsupprDiv.appendChild(newPaletteDiv);
    btnsupprDiv.appendChild(deleteButton);
    // Ajouter la nouvelle palette au conteneur existant
    paletteParent.appendChild(btnsupprDiv);

    // Créer les divs pour les effets de daltonisme
    const protanopeContainer = document.querySelector('.Protanope .couleur');
    const deuteranopeContainer = document.querySelector('.Deuteranope .couleur');
    const tritanopeContainer = document.querySelector('.Tritanope .couleur');

    const newProtanopeDiv = document.createElement('div');
    newProtanopeDiv.id = `protanope-${paletteCounter}`;
    newProtanopeDiv.classList.add('daltonisme');
    newProtanopeDiv.style.backgroundColor = '#ffffff';  // Valeur initiale par défaut

    const newDeuteranopeDiv = document.createElement('div');
    newDeuteranopeDiv.id = `deuteranope-${paletteCounter}`;
    newDeuteranopeDiv.classList.add('daltonisme');
    newDeuteranopeDiv.style.backgroundColor = '#ffffff';  // Valeur initiale par défaut

    const newTritanopeDiv = document.createElement('div');
    newTritanopeDiv.id = `tritanope-${paletteCounter}`;
    newTritanopeDiv.classList.add('daltonisme');
    newTritanopeDiv.style.backgroundColor = '#ffffff';  // Valeur initiale par défaut

    // Ajouter les divs de daltonisme aux conteneurs respectifs
    protanopeContainer.appendChild(newProtanopeDiv);
    deuteranopeContainer.appendChild(newDeuteranopeDiv);
    tritanopeContainer.appendChild(newTritanopeDiv);

    // Mettre à jour immédiatement les couleurs après la création de la palette
    updateColors(newColorInput.value, paletteCounter);
}

function getRandomColor() {
    // Générer une couleur aléatoire entre #000000 et #FFFFFF
    const randomColor = Math.floor(Math.random() * 16777215).toString(16); // 16777215 = 0xFFFFFF
    return `#${randomColor.padStart(6, '0')}`; // On s'assure que la couleur a toujours 6 caractères
}


// Fonction pour mettre à jour les couleurs
function updateColors(hex, id) {
    if (!hex) return;

    // Mettre à jour l'intensité à partir du range
    const intensity = document.getElementById("myRange").value;

    // Calculer les couleurs de daltonisme pour chaque type
    const protanopeResult = hexToColorBlind(hex, protanopeMatrix, intensity);
    const tritanopeResult = hexToColorBlind(hex, tritanopeMatrix, intensity);
    const deuteranopeResult = hexToColorBlind(hex, deuteranopeMatrix, intensity);

    // Mettre à jour les valeurs des inputs de couleur
    document.getElementById(`palette-${id}`).value = hex;
    document.getElementById(`couleurInput-${id}`).value = hex;

    // Mettre à jour les couleurs des divs de daltonisme
    document.getElementById(`protanope-${id}`).style.backgroundColor = protanopeResult;
    document.getElementById(`tritanope-${id}`).style.backgroundColor = tritanopeResult;
    document.getElementById(`deuteranope-${id}`).style.backgroundColor = deuteranopeResult;

    // Mettre à jour le background de la div contenant la palette
    const paletteDiv = document.getElementById(`palette-${id}`);
    paletteDiv.style.backgroundColor = hex; // Change le fond de la div de la palette
}

// Fonction pour supprimer une palette
function removePalette(id) {

    paletteCounter --;
    // Supprimer la palette de couleur
    const paletteDiv = document.getElementById(`couleurP-${id}`);
    const btnsupprDiv = document.getElementById(`btnsuppr-${id}`);
    if (btnsupprDiv) {btnsupprDiv.remove();}
    if (paletteDiv) {paletteDiv.remove();}
    
    // Supprimer les divs de daltonisme associées
    const protanopeDiv = document.getElementById(`protanope-${id}`);
    const deuteranopeDiv = document.getElementById(`deuteranope-${id}`);
    const tritanopeDiv = document.getElementById(`tritanope-${id}`);
    
    if (protanopeDiv) protanopeDiv.remove();
    if (deuteranopeDiv) deuteranopeDiv.remove();
    if (tritanopeDiv) tritanopeDiv.remove();
}

// Fonction pour mettre à jour toutes les couleurs
function updateAllColors() {
    for (let i = 1; i <= paletteCounter; i++) {
        const colorInput = document.getElementById(`palette-${i}`);
        updateColors(colorInput.value, i);
    }
}

// Ajouter un écouteur d'événement pour la mise à jour des couleurs globalement
document.getElementById("myRange").addEventListener("input", updateAllColors);



