function frame() {
  positionBalleX += vitesseBalle;
  balle.style.left = positionBalleX + "px";

  //si le x depasse la scene
  //alors on inverse la vitesse de la balle

// le OR en js : || (alt gr + 6 , ctr + cmd + L)

  if(positionBalleX >= 1000) {
    vitesse = -10
  } 
}

let positionBalleX = 0;
let vitesseBalle = 7;

const balle = document.querySelector("#balle");

setInterval(frame, 1000 / 60);
