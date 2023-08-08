const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const para = document.querySelector(".para");
const copyBtn = document.querySelector(".copyBtn");
function getPara() {
  let paragraph = "";
  for (let i = 0; i < input.value; i++) {
    paragraph += getWords();
    paragraph += " ";
    para.textContent = paragraph.toLowerCase();
    copyBtn.style.display = "block";
    // for copy to clipborad
    copyBtn.addEventListener("click", (e) => {
      navigator.clipboard.writeText(
        e.target.previousElementSibling.textContent
      );
    });
  }
}
function getWords() {
  let words = "";
  let letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < Math.floor(Math.random() * 10) + 5; i++) {
    let random = Math.floor(Math.random() * (letter.length - 1));
    words += letter[random];
  }
  return words;
}
btn.addEventListener("click", getPara);
