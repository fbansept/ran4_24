function evenementOver() {
  console.log("");
  
}

const articles = document.querySelectorAll("body > article");

for (let art of articles) {
  art.addEventListener("mouseover", evenementOver);
}
