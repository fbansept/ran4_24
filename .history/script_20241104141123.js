function frame() {
  i += 10;
  balle.style.left = i + "px";
}

let i = 0;

const balle = document.querySelector("#balle");

setInterval(frame, 1000 / 60);
