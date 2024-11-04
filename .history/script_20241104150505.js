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

const scene = document.querySelector("#scene");
scene.style.width = largeurScene + "px";
scene.style.height = hauteurScene + "px";


const balle = document.querySelector("#balle");

balle.style.width = largeurBalle + "px";
balle.style.height = largeurBalle + "px";


setInterval(frame, 1000 / 60);
