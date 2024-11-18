/////////////////////////// Drag and Drop ///////////////////////////
const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imgView = document.getElementById("img-view");
const imgViews = document.getElementById("img-views");
// const imgDalto = document.getElementById("imageDaltonnisme");


inputFile.addEventListener("change", uploadImage);
inputFile.addEventListener("change", uploadImages);

function uploadImage() {
    let imgLink = URL.createObjectURL(inputFile.files[0]);

    imgView.querySelector("img").src = imgLink;
    imgView.querySelector("img").style.display = "block";

}

dropArea.addEventListener("dragover", function (e) {
    e.preventDefault();

})
dropArea.addEventListener("drop", function (e) {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
})

function uploadImages() {
    let imgLink = URL.createObjectURL(inputFile.files[0]);

    imgViews.querySelector("img").src = imgLink;
    imgViews.querySelector("img").style.display = "block";
}

dropArea.addEventListener("dragover", function (e) {
    e.preventDefault();

})
dropArea.addEventListener("drop", function (e) {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImages();
})
/////////////////////////// Drag and Drop ///////////////////////////

/////////////////////////// Range Value  ///////////////////////////

// Récupérer les éléments
const range = document.getElementById('myRange');
const rangeValue = document.getElementById('test');
const rangeContainer = document.querySelector('.range-container');

// Mettre à jour la valeur affichée et la position
function RangeValue() {
    let value = range.value;
    const rangeWidth = range.offsetWidth;
    const valuePosition = (value - range.min) / (range.max - range.min) * rangeWidth;

    value = Math.round(value * 10) / 10;  // Multiplie par 10, arrondit, puis divise par 10

    // Mettre à jour la valeur affichée
    rangeValue.textContent = value;

    // ////////////////////// Pour obtenir la taille en pixel à partir de la taille en pourcentage ///////////////////////////

    // Supposons que vous avez un pourcentage et une largeur d'élément parent
    let pourcentage = 99;  // 50% par exemple
    let parentElement = document.querySelector('.range-container');  // Parent de l'élément

    // Obtenir la largeur de l'élément parent
    let parentWidth = parentElement.offsetWidth;

    // Calculer la largeur en pixels
    let widthInPixels = (pourcentage / 100) * parentWidth;

    // console.log(widthInPixels);  
    // Affiche la largeur en pixels

    // //////////////////////////////// Et le Réutiliser dans la condition "if" //////////////////////////////////////////////


    // Positionner la valeur au-dessus du curseur
    if(valuePosition == widthInPixels){
        rangeValue.style.left = `calc(${valuePosition}px - 1%)`;
        // console.log(valuePosition);
    }
    else if (valuePosition == 0) {
        rangeValue.style.left = `calc(${valuePosition}px + 1%)`;
        // console.log(valuePosition);
    }
    else {
        // rangeValue.style.left = valuePosition;
        rangeValue.style.left = `calc(${valuePosition}px)`;
        // console.log(valuePosition);
    }
    // +1rem pour éviter qu'il ne touche la barre
}

// Appel initial pour positionner la valeur
RangeValue();

// Mettre à jour la valeur lorsque le curseur se déplace
range.addEventListener('input', RangeValue);


/////////////////////////// Fin Range  ///////////////////////////

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            /////////////////////////// Range Value Img ///////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Récupérer les éléments
const rangeImg = document.getElementById('rangeImg');
const rangeValueImg = document.getElementById('testTmg');
const rangeContainerImg = document.querySelector('.range-containerImg');

// Mettre à jour la valeur affichée et la position
function RangeValueImg() {
    let value = rangeImg.value;
    const rangeWidth = rangeImg.offsetWidth;
    const valuePosition = (value - rangeImg.min) / (rangeImg.max - rangeImg.min) * rangeWidth;

    value = Math.round(value * 10) / 10;  // Multiplie par 10, arrondit, puis divise par 10

    // Mettre à jour la valeur affichée
    rangeValueImg.textContent = value;

    // //////////////////////////////////////////////////////////////////////////////////////
    // ////////////////////// Pour obtenir la taille en pixel à partir de la taille en pourcentage ///////////////////////////
    // //////////////////////////////////////////////////////////////////////////////////////

    // Supposons que vous avez un pourcentage et une largeur d'élément parent
    let pourcentage = valuePosition;  // 50% par exemple
    let parentElement = document.querySelector('.range-containerImg');  // Parent de l'élément
    // Obtenir la largeur de l'élément parent
    let parentWidth = parentElement.offsetWidth;
    // Calculer la largeur en pixels
    let widthInPixels = (pourcentage / 100) * parentWidth;
    // console.log(widthInPixels);  
    // Affiche la largeur en pixels

    // //////////////////////////////////////////////////////////////////////////////////////
    // //////////////////////////////// Et le Ré utiliser dans la condition "if" //////////////////////////////////////////////
    // //////////////////////////////////////////////////////////////////////////////////////

    // Positionner la valeur au-dessus du curseur
    if(Math.abs(valuePosition - widthInPixels) < 1){
        rangeValueImg.style.left = `calc(${valuePosition}px - 25px)`;
        // console.log(valuePosition);
    }
    else if (valuePosition == 0) {
        rangeValueImg.style.left = `calc(${valuePosition}px + 1%)`;
        // console.log(valuePosition);
    }
    else {
        // rangeValue.style.left = valuePosition;
        rangeValueImg.style.left = `calc(${valuePosition}px)`;
        // console.log(valuePosition);
    }
    // +1rem pour éviter qu'il ne touche la barre
}
// Appel initial pour positionner la valeur
RangeValueImg();
// Mettre à jour la valeur lorsque le curseur se déplace
rangeImg.addEventListener('input', RangeValueImg);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        /////////////////////////// Fin Range Img ///////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////// Bouton + 0.1  ///////////////////////////

function btnDroit() {
    let intensity = parseFloat(document.getElementById("myRange").value);

    intensity += 0.1;
    if (intensity < 0.05) { intensity = 0.0; }
    else if (intensity < 0.15 && intensity >= 0.05) { intensity = 0.1; }
    else if (intensity < 0.25 && intensity >= 0.15) { intensity = 0.2; }
    else if (intensity < 0.35 && intensity >= 0.25) { intensity = 0.3; }
    else if (intensity < 0.45 && intensity >= 0.35) { intensity = 0.4; }
    else if (intensity < 0.55 && intensity >= 0.45) { intensity = 0.5; }
    else if (intensity < 0.65 && intensity >= 0.55) { intensity = 0.6; }
    else if (intensity < 0.75 && intensity >= 0.65) { intensity = 0.7; }
    else if (intensity < 0.85 && intensity >= 0.75) { intensity = 0.8; }
    else if (intensity < 0.95 && intensity >= 0.85) { intensity = 0.9; }
    else { intensity = 1.0; }

    // Mettre à jour la valeur de l'élément input avec la nouvelle intensité
    document.getElementById("myRange").value = intensity;

    // Optionnel : vous pouvez également mettre à jour un affichage du "niveau" d'intensité si nécessaire
    console.log("Nouvelle intensité:", intensity);
}
/////////////////////////// Bouton - 0.1  ///////////////////////////

function btnGauche() {
    let intensity = parseFloat(document.getElementById("myRange").value);

    intensity -= 0.1;
    if (intensity < 0.05) { intensity = 0.0; }
    else if (intensity < 0.15 && intensity >= 0.05) { intensity = 0.1; }
    else if (intensity < 0.25 && intensity >= 0.15) { intensity = 0.2; }
    else if (intensity < 0.35 && intensity >= 0.25) { intensity = 0.3; }
    else if (intensity < 0.45 && intensity >= 0.35) { intensity = 0.4; }
    else if (intensity < 0.55 && intensity >= 0.45) { intensity = 0.5; }
    else if (intensity < 0.65 && intensity >= 0.55) { intensity = 0.6; }
    else if (intensity < 0.75 && intensity >= 0.65) { intensity = 0.7; }
    else if (intensity < 0.85 && intensity >= 0.75) { intensity = 0.8; }
    else if (intensity < 0.95 && intensity >= 0.85) { intensity = 0.9; }
    else { intensity = 1.0; }

    // Mettre à jour la valeur de l'élément input avec la nouvelle intensité
    document.getElementById("myRange").value = intensity;

    // Optionnel : vous pouvez également mettre à jour un affichage du "niveau" d'intensité si nécessaire
    console.log("Nouvelle intensité:", intensity);
}

/////////////////////////// Fin Fonction  ///////////////////////////

/////////////////////////// Bouton Range Image + 0.1  ///////////////////////////

function btnDroitImg() {
    let intensity = parseFloat(document.getElementById("rangeImg").value);

    intensity += 0.1;
    if (intensity < 0.05) { intensity = 0.0; }
    else if (intensity < 0.15 && intensity >= 0.05) { intensity = 0.1; }
    else if (intensity < 0.25 && intensity >= 0.15) { intensity = 0.2; }
    else if (intensity < 0.35 && intensity >= 0.25) { intensity = 0.3; }
    else if (intensity < 0.45 && intensity >= 0.35) { intensity = 0.4; }
    else if (intensity < 0.55 && intensity >= 0.45) { intensity = 0.5; }
    else if (intensity < 0.65 && intensity >= 0.55) { intensity = 0.6; }
    else if (intensity < 0.75 && intensity >= 0.65) { intensity = 0.7; }
    else if (intensity < 0.85 && intensity >= 0.75) { intensity = 0.8; }
    else if (intensity < 0.95 && intensity >= 0.85) { intensity = 0.9; }
    else { intensity = 1.0; }

    // Mettre à jour la valeur de l'élément input avec la nouvelle intensité
    document.getElementById("rangeImg").value = intensity;

    // Optionnel : vous pouvez également mettre à jour un affichage du "niveau" d'intensité si nécessaire
    console.log("Nouvelle intensité image:", intensity);
}
/////////////////////////// Bouton Range Image - 0.1  ///////////////////////////

function btnGaucheImg() {
    let intensity = parseFloat(document.getElementById("rangeImg").value);

    intensity -= 0.1;
    if (intensity < 0.05) { intensity = 0.0; }
    else if (intensity < 0.15 && intensity >= 0.05) { intensity = 0.1; }
    else if (intensity < 0.25 && intensity >= 0.15) { intensity = 0.2; }
    else if (intensity < 0.35 && intensity >= 0.25) { intensity = 0.3; }
    else if (intensity < 0.45 && intensity >= 0.35) { intensity = 0.4; }
    else if (intensity < 0.55 && intensity >= 0.45) { intensity = 0.5; }
    else if (intensity < 0.65 && intensity >= 0.55) { intensity = 0.6; }
    else if (intensity < 0.75 && intensity >= 0.65) { intensity = 0.7; }
    else if (intensity < 0.85 && intensity >= 0.75) { intensity = 0.8; }
    else if (intensity < 0.95 && intensity >= 0.85) { intensity = 0.9; }
    else { intensity = 1.0; }

    // Mettre à jour la valeur de l'élément input avec la nouvelle intensité
    document.getElementById("rangeImg").value = intensity;

    // Optionnel : vous pouvez également mettre à jour un affichage du "niveau" d'intensité si nécessaire
    console.log("Nouvelle intensité image:", intensity);
}

/////////////////////////// Fin Fonction  Range Image  ///////////////////////////
