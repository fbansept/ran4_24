function frame() {
  console.log(i);  //print en python
  i+= 10; // i = i + 1 ou i += 1 en python

  balle.style.left = i + "px"
}

let i = 0;

// const balle = document.getElementById("balle")
const balle = document.querySelector("#balle");

setInterval(frame, 1000 / 60);