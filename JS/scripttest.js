// const protanopeMatrix = [
//     [0.152286, 1.052583, -0.204868],
//     [0.114503, 0.786281, 0.099216],
//     [-0.003882, -0.048116, 1.051998]
// ];

// const tritanopeMatrix = [
//     [1.255528, -0.076749, -0.178779],
//     [-0.078411, 0.930809, 0.147602],
//     [0.004733, 0.691367, 0.303900]
// ];

// const deuteranopeMatrix = [
//     [0.367322, 0.860646, -0.227968],
//     [0.280085, 0.672501, 0.047413],
//     [0.011820, 0.042940, 0.968881]
// ];

// // Fonction de conversion
// function hexToColorBlind(hex, conversionMatrix, intensity) {
//     let r = parseInt(hex.slice(1, 3), 16);
//     let g = parseInt(hex.slice(3, 5), 16);
//     let b = parseInt(hex.slice(5, 7), 16);

//     let newR = conversionMatrix[0][0] * r + conversionMatrix[0][1] * g + conversionMatrix[0][2] * b;
//     let newG = conversionMatrix[1][0] * r + conversionMatrix[1][1] * g + conversionMatrix[1][2] * b;
//     let newB = conversionMatrix[2][0] * r + conversionMatrix[2][1] * g + conversionMatrix[2][2] * b;

//     // Applique l'intensité
//     newR = Math.round((1 - intensity) * r + intensity * newR);
//     newG = Math.round((1 - intensity) * g + intensity * newG);
//     newB = Math.round((1 - intensity) * b + intensity * newB);

//     newR = Math.min(255, Math.max(0, newR));
//     newG = Math.min(255, Math.max(0, newG));
//     newB = Math.min(255, Math.max(0, newB));

//     return "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();
// }

// // Mise à jour des couleurs
// function updateColors(hex, index) {
//     if (!hex) return;

//     const intensity = document.getElementById("myRange").value;

//     const protanopeResult = hexToColorBlind(hex, protanopeMatrix, intensity);
//     const tritanopeResult = hexToColorBlind(hex, tritanopeMatrix, intensity);
//     const deuteranopeResult = hexToColorBlind(hex, deuteranopeMatrix, intensity);
    
//     document.getElementById(`protanope-${index}`).style.backgroundColor = protanopeResult;
//     document.getElementById(`tritanope-${index}`).style.backgroundColor = tritanopeResult;
//     document.getElementById(`deuteranope-${index}`).style.backgroundColor = deuteranopeResult;

//     document.getElementById(`couleurInput-${index}`).value = hex;
// }

// // Mise à jour à partir de la barre de défilement
// function updateColorsFromRange() {
//     for (let i = 1; i <= 4; i++) {
//         const hex = document.getElementById(`palette-${i}`).value;
//         updateColors(hex, i);
//     }
// }

// // Écouteurs d'événements pour les nuanciers
// for (let i = 1; i <= 4; i++) {
//     document.getElementById(`palette-${i}`).addEventListener('input', function() {
//         updateColors(this.value, i);
//     });

//      document.getElementById(`couleurInput-${i}`).addEventListener('input', function() {
//          updateColors(this.value, i);
//      });
// }

// // Initialisation
// updateColorsFromRange();

const protanopeMatrix = [
    [0.152286, 1.052583, -0.204868],
    [0.114503, 0.786281, 0.099216],
    [-0.003882, -0.048116, 1.051998]
];

const tritanopeMatrix = [
    [1.255528, -0.076749, -0.178779],
    [-0.078411, 0.930809, 0.147602],
    [0.004733, 0.691367, 0.303900]
];

const deuteranopeMatrix = [
    [0.367322, 0.860646, -0.227968],
    [0.280085, 0.672501, 0.047413],
    [0.011820, 0.042940, 0.968881]
];

// Fonction de conversion
function hexToColorBlind(hex, conversionMatrix, intensity) {
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    let newR = conversionMatrix[0][0] * r + conversionMatrix[0][1] * g + conversionMatrix[0][2] * b;
    let newG = conversionMatrix[1][0] * r + conversionMatrix[1][1] * g + conversionMatrix[1][2] * b;
    let newB = conversionMatrix[2][0] * r + conversionMatrix[2][1] * g + conversionMatrix[2][2] * b;

    // Applique l'intensité
    newR = Math.round((1 - intensity) * r + intensity * newR);
    newG = Math.round((1 - intensity) * g + intensity * newG);
    newB = Math.round((1 - intensity) * b + intensity * newB);

    newR = Math.min(255, Math.max(0, newR));
    newG = Math.min(255, Math.max(0, newG));
    newB = Math.min(255, Math.max(0, newB));

    return "#" + ((1 << 24) + (newR << 16) + (newG << 8) + newB).toString(16).slice(1).toUpperCase();
}

// Mise à jour des couleurs
function updateColors(hex, index) {
    if (!hex) return;

    const intensity = document.getElementById("myRange").value;

    const protanopeResult = hexToColorBlind(hex, protanopeMatrix, intensity);
    const tritanopeResult = hexToColorBlind(hex, tritanopeMatrix, intensity);
    const deuteranopeResult = hexToColorBlind(hex, deuteranopeMatrix, intensity);

    document.getElementById(`palette-${index}`).value = hex;
    document.getElementById(`couleurInput-${index}`).value = hex;
    document.getElementById(`protanope-${index}`).style.backgroundColor = protanopeResult;
    document.getElementById(`tritanope-${index}`).style.backgroundColor = tritanopeResult;
    document.getElementById(`deuteranope-${index}`).style.backgroundColor = deuteranopeResult;
}

// Mise à jour à partir de la barre de défilement
function updateColorsFromRange() {
    for (let i = 1; i <= 4; i++) {
        const hex = document.getElementById(`palette-${i}`).value;
        updateColors(hex, i);
    }
} 

// Écouteurs d'événements pour les nuanciers et les champs de texte
for (let i = 1; i <= 4; i++) {
    document.getElementById(`palette-${i}`).addEventListener('input', function() {
        updateColors(this.value, i);

        document.getElementById(`palette-${i}`).style.backgroundColor = this.value;
        
    });
    document.getElementById(`couleurInput-${i}`).addEventListener('input', function() {
        updateColors(this.value, i);

        document.getElementById(`palette-${i}`).style.backgroundColor = this.value;

    });
}

// Initialisation
updateColorsFromRange();