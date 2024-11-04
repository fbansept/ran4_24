function evenementOver(e) {
  e.srcelement;
}

const articles = document.querySelectorAll("body > article");

for (let art of articles) {
  art.addEventListener("mouseover", evenementOver);
}
