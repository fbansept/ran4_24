function evenementOver(e) {
  console.log(e);

  e.srcElement.classList.add("test");
}

const articles = document.querySelectorAll("body > article");

for (let art of articles) {
  art.addEventListener("mouseover", evenementOver);
}
