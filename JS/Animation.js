// function allowDrop(ev) {
//     ev.preventDefault();
//   }

//   function drag(ev) {
//     ev.dataTransfer.setData("text", ev.target.id);
//   }

//   function drop(ev) {
//     ev.preventDefault();
//     var data = ev.dataTransfer.getData("text");
//     ev.target.appendChild(document.getElementById(data));

//   }


/////////////////////////// Drag and Drop ///////////////////////////
const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imgView = document.getElementById("img-view");
const imgViews = document.getElementById("img-views");

inputFile.addEventListener("change", uploadImage);

function uploadImage() {
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imgView.style.backgroundImage = `url(${imgLink})`;
    imgView.textContent = "";
    imgView.style.border = 0;
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
    imgViews.style.backgroundImage = `url(${imgLink})`;
    imgViews.textContent = "";
    imgViews.style.border = 0;
}

dropArea.addEventListener("dragover", function (e) {
    e.preventDefault();

})
dropArea.addEventListener("drop", function (e) {
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
})
//////////////////////////////////////////////////////////////////

// const dropArea = document.getElementById("drop-area");
// const inputFile = document.getElementById("input-file");
// const imgView = document.getElementById("img-view");
// const imgViews = document.getElementById("img-views");

// inputFile.addEventListener("change", uploadImage);

// function uploadImage() {
//     if (inputFile.files.length > 0) {
//         let imgLink = URL.createObjectURL(inputFile.files[0]);
//         imgView.style.backgroundImage = url`(${imgLink})`;
//         imgView.textContent = ""; // Supprime le texte par défaut
//         imgView.style.border = "none"; // Enlève la bordure
//     }
// }

// dropArea.addEventListener("dragover", function(e) {
//     e.preventDefault(); // Empêche le comportement par défaut
// });

// dropArea.addEventListener("drop", function(e) {
//     e.preventDefault(); // Empêche le comportement par défaut
//     inputFile.files = e.dataTransfer.files; // Récupère les fichiers
//     uploadImage(); // Affiche l'image
// });

/////////////////////////// Drag and Drop ///////////////////////////

/////////////////////////// Bouton Fix    ///////////////////////////

let dialogue = document.querySelector("#boite-dialogue");
let dial_msg = dialogue.querySelector("#message");
let dial_btn = dialogue.querySelector("#fix");

// dial_btn.onclick = fermerboiboite;
dial_btn.onclick =
    function laboiboite(message) {
        // Affichage de la boite de dialogue
        dialogue.classList.add("visible");

        // Affichage d'un message dans la boite de dialogue
        dial_msg.textContent = message;
    }

// function fermerboiboite(){
//     dialogue.classList.remove("visible");
// }

laboiboite("Coucou");


document.querySelector("#letrucla").onclick = function () { laboiboite("Ahhhh ouaiiiiiii mec !"); }

/////////////////////////// Bouton Fix  Fin  ///////////////////////////

// document.querySelector("#menu #okbox").checked = function(){
//     this.nextElementSibling.classList.toggle("visible");
// }
// document.querySelector('#okbox').checked() = function(){
//     document.getElementById('ancre').toggle("visible");
// }

// Récupérer la case à cocher et l'élément de menu
const okbox = document.querySelector('#okbox');
const ancre = document.querySelector('#ancre');

// Ajouter un écouteur d'événement pour détecter le changement d'état de la case à cocher
okbox.addEventListener('change', function() {
  // Si la case est cochée, afficher le menu
  if (okbox.checked) {
    ancre.style.display = 'block';  // Affiche le menu
  } else {
    ancre.style.display = 'none';   // Cache le menu
  }
});

////////////////////////////////////////////////////////////////////////