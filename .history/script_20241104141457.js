function frame() {
  positionBalleX += vitesseBalle;
  balle.style.left = positionBalleX + "px";

  //si le x depasse la scene
}

let positionBalleX = 0;
let vitesseBalle = 10;

const balle = document.querySelector("#balle");

setInterval(frame, 1000 / 60);
