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

//nombre entre 5 et 8   Math.random() * 3

let positionBalleX = 0;
let vitesseBalleX = 10;
let positionBalleY = 0;
let vitesseBalleY = 8;

const balle = document.querySelector("#balle");

setInterval(frame, 1000 / 60);
