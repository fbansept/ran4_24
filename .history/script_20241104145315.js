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
}

const hauteurScene = 1000
const largeurScene = 1000;

let positionBalleX = 0;
let vitesseBalleX = 10;
let positionBalleY = 0;
let vitesseBalleY = 8;

const balle = document.querySelector("#balle");

setInterval(frame, 1000 / 60);
