const monTitre = document.querySelector("body > h1");

function evenementOver() {
  monTitre.classList.add("")
}

const articles = document.querySelectorAll("body > article");

for (let art of articles) {
  art.addEventListener("mouseover", evenementOver);
}