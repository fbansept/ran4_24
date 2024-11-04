function frame() {
  positionBalleX += vitesseBalleX;
  balle.style.left = positionBalleX + "px";

  if (positionBalleX >= 970 || positionBalleX < 0) {
    vitesseBalleX = -vitesseBalleX;
  }

  if (positionBalleY >= 970 || positionBalleY < 0) {
    vitesseBalleX = -vitesseBalleX;
  }
}

let positionBalleX = 0;
let vitesseBalleX = 10;
let positionBalleY = 0;
let vitesseBalleY = 8;

const balle = document.querySelector("#balle");

setInterval(frame, 1000 / 60);
