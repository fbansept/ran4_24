function frame() {
  console.log(i);
  
  
}

let i = 0;

// const balle = document.getElementById("balle")
const balle = document.querySelector("#balle");


setInterval(frame, 1000 / 60)