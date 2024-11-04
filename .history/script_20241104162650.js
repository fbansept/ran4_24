function frame() {
  positionBalleX += vitesseBalleX;
  positionBalleY += vitesseBalleY;

  balle.style.left = positionBalleX + "px";
  balle.style.top = positionBalleY + "px";

  if (positionBalleX >= largeurScene - largeurBalle || positionBalleX < 0) {
    vitesseBalleX = -vitesseBalleX;
  }

  if (positionBalleY >= hauteurScene - largeurBalle || positionBalleY < 0) {
    vitesseBalleY = -vitesseBalleY;
  }

  
}

// ----- initialisation scene -----

const scene = document.querySelector("#scene");
const largeurScene = 1000;
const hauteurScene = 500;
scene.style.width = largeurScene + "px";
scene.style.height = hauteurScene + "px";

// ----- initialisation balle -----

const balle = document.querySelector("#balle");
let largeurBalle = 100;
let positionBalleX = 0;
let vitesseBalleX = 10;
let positionBalleY = 0;
let vitesseBalleY = 8;
balle.style.width = largeurBalle + "px";
balle.style.height = largeurBalle + "px";

// ----- initialisation barre -----

const barre = document.querySelector("#balle");
let largeurBarre = 100;
let hauteurBarre = 0;
let positionBarreY = 0;
let positionBarreX = 0;
barre.style.width = largeurBarre + "px";
barre.style.height = largeurBalle + "px";

// --------- EVENEMENT CLAVIER -------

let toucheHautPresse = false;
let toucheBasPresse = false;

document.addEventListener("keydown", (e) => {
  if (e.code == "ArrowUp") {
    toucheHautPresse = true;
  }

  if (e.code == "ArrowDown") {
    toucheBasPresse = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.code == "ArrowUp") {
    toucheHautPresse = false;
  }

  if (e.code == "ArrowDown") {
    toucheBasPresse = false;
  }
});

setInterval(frame, 1000 / 60);
