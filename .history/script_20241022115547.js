function evenementOver(e) {
  e.srcElement.closest("ar").classList.add("test");
}

const articles = document.querySelectorAll("body > article");

for (let art of articles) {
  art.addEventListener("mouseover", evenementOver);
}
