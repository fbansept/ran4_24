function frame() {
  positionBalleX += vitesseBalle;
  balle.style.left = positionBalleX + "px";

  //si le x depasse la scene
  //alors on inverse la vitesse de la balle

// le OR en js : || (alt gr + 6 , ctr + cmd + L)

  if(positionBalleX > ) {

  } 
}

let positionBalleX = 0;
let vitesseBalle = 10;

const balle = document.querySelector("#balle");

setInterval(frame, 1000 / 60);
