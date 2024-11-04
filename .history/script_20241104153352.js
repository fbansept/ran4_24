function frame() {
  positionBalleX += vitesseBalleX;
  positionBalleY += vitesseBalleY;

  balle.style.left = positionBalleX + "px";
  balle.style.top = positionBalleY + "px";

  if (positionBalleX >= 970 || positionBalleX < 0) {
    vitesseBalleX = -vitesseBalleX;
  }

  if (positionBalleY >= 470 || positionBalleY < 0) {
    vitesseBalleY = -vitesseBalleY;
  }

  balle.style.transform = "rotate(" + angle + "deg)";
  angle ++;
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
let angle = 0;
let positionBalleX = 0;
let vitesseBalleX = 4;
let positionBalleY = 0;
let vitesseBalleY = 4;
balle.style.width = largeurBalle + "px";
balle.style.height = largeurBalle + "px";

setInterval(frame, 1000 / 60);
