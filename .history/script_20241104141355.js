function frame() {
  positionBalleX += 10;
  balle.style.left = positionBalleX + "px";


}

let positionBalleX = 0;
let v

const balle = document.querySelector("#balle");

setInterval(frame, 1000 / 60);