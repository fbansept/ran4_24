function evenementOver(e) {
  e.srcElement.cloclassList.add("test");
}

const articles = document.querySelectorAll("body > article");

for (let art of articles) {
  art.addEventListener("mouseover", evenementOver);
}
