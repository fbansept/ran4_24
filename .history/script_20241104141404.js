function frame() {
  positionBalleX += vitesseBalle;
  balle.style.left = positionBalleX + "px";


}

let positionBalleX = 0;
let vitesseBalle = 10

const balle = document.querySelector("#balle");

setInterval(frame, 1000 / 60);
