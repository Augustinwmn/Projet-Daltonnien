// /////////////////////////// Drag and Drop ///////////////////////////
// Déclaration des variables nécessaires
const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imgView = document.getElementById("img-view");
const imgViews = document.getElementById("img-views");

// Déclarer les variables pour stocker les images originales
let originalImg1 = null;
let originalImg2 = null;

// Déclarer une variable pour l'intensité du filtre
let intensity = 0.5; // Valeur par défaut à 0.5
let currentFilter = null;

// Charger une image aléatoire de base à l'ouverture de la page
window.onload = function () {
    loadRandomImage(); // Charger l'image aléatoire
};

// Fonction pour charger une image aléatoire
function loadRandomImage() {
    const imgLink = "https://picsum.photos/800/300"; // URL pour une image aléatoire de taille 800x300
// https://cdn.pixabay.com/photo/2024/03/03/20/44/cat-8611246_1280.jpg
    // Créer l'image et l'afficher dans le premier canvas
    const img = new Image();
    
    img.onload = function () {
        originalImg1 = img; // Sauvegarder l'image originale
        loadImageToCanvas(img, imgView);  // Charger l'image sur le premier canvas
    };
    img.setAttribute('crossOrigin', '');
    img.src = imgLink;

    // Charger l'image dans le deuxième canvas
    const img2 = new Image();
    img2.onload = function () {
        originalImg2 = img2; // Sauvegarder l'image originale
        loadImageToCanvas(img2, imgViews);  // Charger l'image sur le deuxième canvas
    };
    img2.setAttribute('crossOrigin', '');
    img2.src = imgLink;
}

// Fonction de chargement d'une image dans un canvas spécifique
function loadImageToCanvas(img, container) {
    const canvas = container.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    canvas.style.display = "block";  // Afficher le canvas
}

// Appliquer un filtre sur l'image du canvas
function updateColorsFromRange() {
    intensity = parseFloat(document.getElementById("rangeImg").value); // Récupérer la valeur du curseur
    document.getElementById("chiffre").innerText = intensity.toFixed(2); // Afficher la valeur dans la div

    // Appliquer le filtre actuellement sélectionné avec la nouvelle intensité
    if (originalImg1 && originalImg2) {
        
        applyFilterToCanvas(imgViews, originalImg2, currentFilter);
    }
}

// Fonction pour appliquer un filtre spécifique au canvas d'une image
function applyFilterToCanvas(container, img, filter) {
    const canvas = container.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    
    // Appliquer le filtre à l'image avec l'intensité actuelle
    applyFilter(canvas, filter);
}

// Fonction pour appliquer un filtre de daltonisme
function applyFilter(canvas, filter) {
    // const canvas = container.querySelector("canvas");
    // if (!canvas) {
    //     console.error('Le canevas n\'existe pas dans le DOM');
    // }
    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    for (let i = 0; i < data.length; i += 4) {
        const r = data[i];     // Rouge
        const g = data[i + 1]; // Vert
        const b = data[i + 2]; // Bleu

        // Application des filtres avec intensité ajustée
        if (filter === 'btnProtanope') {
            data[i] = (1 - intensity) * r + intensity * (0.152286 * r + 1.052583 * g + -0.204868 * b);          // R
            data[i + 1] = (1 - intensity) * g + intensity * (0.114503 * r + 0.786281 * g + 0.099216 * b);       // G
            data[i + 2] = (1 - intensity) * b + intensity * (-0.003882 * r + -0.048116 * g + 1.051998 * b);     // B
        } else if (filter === 'btnDeutéranope') {
            data[i] = (1 - intensity) * r + intensity * (0.367322 * r + 0.860646 * g + -0.227968 * b);          // R
            data[i + 1] = (1 - intensity) * g + intensity * (0.280085 * r + 0.672501 * g + 0.047413 * b);       // G
            data[i + 2] = (1 - intensity) * b + intensity * (0.011820 * r + 0.042940 * g + 0.968881 * b);       // B
        } else if (filter === 'btnTritanope') {
            data[i] = (1 - intensity) * r + intensity * (1.255528 * r + -0.076749 * g + -0.178779 * b);         // R
            data[i + 1] = (1 - intensity) * g + intensity * (-0.078411 * r + 0.930809 * g + 0.147602 * b);      // G
            data[i + 2] = (1 - intensity) * b + intensity * (0.004733 * r + 0.691367 * g + 0.303900 * b);       // B
        }
    }

    ctx.putImageData(imageData, 0, 0); // Redessiner l'image avec les nouvelles données
}

// Ajouter les événements pour changer l'intensité
document.getElementById("rangeImg").addEventListener("input", updateColorsFromRange);

// Ajouter les événements pour appliquer les filtres
document.getElementById('btnProtanope').addEventListener('click', () => {
    setActiveFilter('btnProtanope');
    if (originalImg1 && originalImg2) {
        
        applyFilterToCanvas(imgViews, originalImg2, 'btnProtanope');
    }
});

document.getElementById('btnDeutéranope').addEventListener('click', () => {
    setActiveFilter('btnDeutéranope');
    if (originalImg1 && originalImg2) {
        
        applyFilterToCanvas(imgViews, originalImg2, 'btnDeutéranope');
    }
});

document.getElementById('btnTritanope').addEventListener('click', () => {
    setActiveFilter('btnTritanope');
    if (originalImg1 && originalImg2) {
        
        applyFilterToCanvas(imgViews, originalImg2, 'btnTritanope');
    }
});

// Fonction pour marquer un bouton comme actif (et donc le filtre associé comme actif)
function setActiveFilter(filterId) {
    // Retirer la classe active des autres boutons
    document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active-filter'));
    
    // Ajouter la classe active au bouton cliqué
    document.getElementById(filterId).classList.add('active-filter');
    
    // Garder une trace du filtre actif
    currentFilter = filterId;
}

// Drag and drop pour charger une image
dropArea.addEventListener("dragover", function (e) {
    e.preventDefault();
});

dropArea.addEventListener("drop", function (e) {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
        inputFile.files = files;
        uploadImage();  // Charger l'image dans la première zone
        //uploadImages(); // Charger l'image dans la deuxième zone
    }
});

// Charger l'image à partir du fichier sélectionné
inputFile.addEventListener("change", uploadImage);
// inputFile.addEventListener("change", uploadImages);

function uploadImage() {
    const file = inputFile.files[0];
    if (file) {
        let imgLink = URL.createObjectURL(file);
        console.log(imgLink);
        const img = new Image();
        img.onload = function () {
            originalImg1 = img; // Sauvegarder l'image originale
            originalImg2 = img; // Sauvegarder aussi pour l'autre canevas
            loadImageToCanvas(img, imgView); // Charger l'image sur le premier canevas
            loadImageToCanvas(img, imgViews); // Charger l'image sur le deuxième canevas
            applyFilterToCanvas(imgView, img, 'btnProtanope');  // Appliquer un filtre par défaut
            applyFilterToCanvas(imgViews, img, 'btnProtanope');  // Appliquer un filtre par défaut sur le deuxième
        };
        img.src = imgLink;
    }
}

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
    let pourcentage = 100;  // 50% par exemple
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

// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
        /////////////////////////// Range Value Img ///////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////
// Récupérer les éléments
const rangeImg = document.getElementById('rangeImg');
const rangeValueImg = document.getElementById('chiffre');
const rangeContainerImg = document.querySelector('.range-containerImg');

// Mettre à jour la valeur affichée et la position
function RangeValueImg() {
    let valueImg = rangeImg.value;
    // console.log('Initial value:', valueImg);
    
    const rangeWidthImg = rangeImg.offsetWidth;
    // console.log('Range width:', rangeWidthImg);
    
    const valuePositionImg = (valueImg - rangeImg.min) / (rangeImg.max - rangeImg.min) * rangeWidthImg;
    // console.log('Value position:', valuePositionImg);
    
    valueImg = Math.round(valueImg * 10) / 10;  // Multiplie par 10, arrondit, puis divise par 10
    // console.log('Rounded value:', valueImg);
   
    // Mettre à jour la valeur affichée 
    rangeValueImg.textContent = valueImg;


    // //////////////////////////////////////////////////////////////////////////////
    // ///// Pour obtenir la taille en pixel à partir de la taille en pourcentage ///
    // //////////////////////////////////////////////////////////////////////////////

    // Supposons que vous avez un pourcentage et une largeur d'élément parent
    let pourcentage = 100;  // 50% par exemple
    let parentElement = document.querySelector('.range-containerImg');  // Parent de l'élément
    // Obtenir la largeur de l'élément parent
    let parentWidth = parentElement.offsetWidth;
    // Calculer la largeur en pixels
    let widthInPixels = (pourcentage / 100) * parentWidth;
    // console.log('Width in pixels:', widthInPixels);
    // Affiche la largeur en pixels

    // //////////////////////////////////////////////////////////////////////////////
    // ///////////////// Et le Ré utiliser dans la condition "if" //////////////////
    // //////////////////////////////////////////////////////////////////////////////

    // Positionner la valeur au-dessus du curseur
    if(Math.abs(valuePositionImg - widthInPixels) < 1){
        rangeValueImg.style.left = `calc(${valuePositionImg}px - 1%)`;
        // console.log('Condition 1:', valuePositionImg);
    }
    else if (valuePositionImg == 0) {
        rangeValueImg.style.left = `calc(${valuePositionImg}px + 1%)`;
        // console.log('Condition 2:', valuePositionImg);
    }
    else {
        rangeValueImg.style.left = `calc(${valuePositionImg}px)`;
        // console.log('Condition 3:', valuePositionImg);
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