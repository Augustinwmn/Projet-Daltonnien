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

    imgView.querySelector("canvas").src = imgLink;
    imgView.querySelector("canvas").style.display = "block";

    // imgViews.querySelector("img").src = imgLink;
    // imgViews.querySelector("img").style.display = "block";

}

dropArea.addEventListener("dragover", function (e) {
    e.preventDefault();

})
dropArea.addEventListener("drop", function (e) {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
})
// /////////////////////////////
function uploadImages() {
    let imgLink = URL.createObjectURL(inputFile.files[0]);

    imgViews.querySelector("canvas").src = imgLink;
    imgViews.querySelector("canvas").style.display = "block";

    // imgViews.querySelector("img").src = imgLink;
    // imgViews.querySelector("img").style.display = "block";
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
        rangeValue.style.left = `calc(${valuePosition}px - 25)`;
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

// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
        /////////////////////////// Range Value Img ///////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
// Récupérer les éléments
const rangeImg = document.getElementById('rangeImg');
const rangeValueImg = document.getElementById('testTmg');
const rangeContainerImg = document.querySelector('.range-containerImg');

// Mettre à jour la valeur affichée et la position
function RangeValueImg() {
    let valueImg = rangeImg.value;
    console.log('Initial value:', valueImg);
    
    const rangeWidthImg = rangeImg.offsetWidth;
    console.log('Range width:', rangeWidthImg);
    
    const valuePositionImg = (valueImg - rangeImg.min) / (rangeImg.max - rangeImg.min) * rangeWidthImg;
    console.log('Value position:', valuePositionImg);
    
    valueImg = Math.round(valueImg * 10) / 10;  // Multiplie par 10, arrondit, puis divise par 10
    console.log('Rounded value:', valueImg);
    console.log('Updated textContent:', rangeValueImg.textContent);
    
    // Mettre à jour la valeur affichée
    rangeValueImg.textContent = valueImg;
    console.log('Updated textContent:', rangeValueImg.textContent);


    // //////////////////////////////////////////////////////////////////////////////
    // ///// Pour obtenir la taille en pixel à partir de la taille en pourcentage ///
    // //////////////////////////////////////////////////////////////////////////////

    // Supposons que vous avez un pourcentage et une largeur d'élément parent
    let pourcentage = 99;  // 50% par exemple
    let parentElement = document.querySelector('.range-containerImg');  // Parent de l'élément
    // Obtenir la largeur de l'élément parent
    let parentWidth = parentElement.offsetWidth;
    // Calculer la largeur en pixels
    let widthInPixels = (pourcentage / 100) * parentWidth;
    console.log('Width in pixels:', widthInPixels);
    // Affiche la largeur en pixels

    // //////////////////////////////////////////////////////////////////////////////
    // ///////////////// Et le Ré utiliser dans la condition "if" //////////////////
    // //////////////////////////////////////////////////////////////////////////////

    // Positionner la valeur au-dessus du curseur
    if(Math.abs(valuePositionImg - widthInPixels) < 1){
        rangeValueImg.style.left = `calc(${valuePositionImg}px - 25px)`;
        console.log('Condition 1:', valuePositionImg);
    }
    else if (valuePositionImg == 0) {
        rangeValueImg.style.left = `calc(${valuePositionImg}px + 1%)`;
        console.log('Condition 2:', valuePositionImg);
    }
    else {
        rangeValueImg.style.left = `calc(${valuePositionImg}px)`;
        console.log('Condition 3:', valuePositionImg);
    }
    // +1rem pour éviter qu'il ne touche la barre
}

// Appel initial pour positionner la valeur
RangeValueImg();

// Mettre à jour la valeur lorsque le curseur se déplace
rangeImg.addEventListener('input', RangeValueImg);


// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
        /////////////////////////// Fin Range Img ///////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////