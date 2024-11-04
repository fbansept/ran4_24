const monTitre = document.querySelector("body > h1");

function evenementClic() {
  monTitre.classList.add("test");
  console.log("yep");
}

monTitre.addEventListener("mousemove", evenementClic);
