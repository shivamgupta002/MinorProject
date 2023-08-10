const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("reset");
const hide = document.querySelector(".hide");
const main_heading = document.querySelector(".main_heading");
const result = document.querySelector(".result");
const btn_group = document.querySelectorAll(".button_group button");
const compChoice = document.getElementById("compChoice");
const myChoice = document.getElementById("myChoice");
let choice = ["Rock", "Paper", "Scssior"];

//Start Button
startBtn.addEventListener("click", () => {
  hide.style.display = "block";
  startBtn.style.display = "none";
  main_heading.style.display = "none";
});

//Reset Button
resetBtn.addEventListener("click", () => {
  window.location.reload();
});

//Button Group
btn_group.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    //user Choice
    myChoice.textContent = e.target.textContent;
    let userChoice = myChoice.textContent;
    //computer Choise
    let random = Math.floor(Math.random() * choice.length);
    compChoice.textContent = choice[random];
    let computerChoice = compChoice.textContent;
    // For checking Result
    checkWin(userChoice, computerChoice);
  });
});

function checkWin(userChoice, computerChoice) {
  if (
    (computerChoice === "Rock" && userChoice === "Paper") ||
    (computerChoice === "Scssior" && userChoice == "Rock") ||
    (computerChoice === "Paper" && userChoice === "Scssior")
  ) {
    result.textContent = "You Won";
  } else if (
    (computerChoice === "Paper" && userChoice === "Rock") ||
    (computerChoice === "Rock" && userChoice === "Scssior") ||
    (computerChoice === "Scssior" && userChoice === "Paper")
  ) {
    result.textContent = "Computer Won";
  } else if (
    (computerChoice === "Paper" && userChoice === "Paper") ||
    (computerChoice === "Rock" && userChoice === "Rock") ||
    (computerChoice === "Scssior" && userChoice === "Scssior")
  ) {
    result.textContent = "Draw";
  } else {
    result.textContent = "Error";
  }
}
// // Brutal force method
// function checkWin(userChoice, computerChoice) {
//   // console.log(computerChoice);
//   // console.log(userChoice);
//   if (computerChoice === "Rock" && userChoice === "Paper") {
//     result.textContent = "You Won";
//   } else if (computerChoice === "Paper" && userChoice === "Rock") {
//     result.textContent = "Computer Won";
//   } else if (computerChoice === "Rock" && userChoice === "Scssior") {
//     result.textContent = "Computer Won";
//   } else if (computerChoice === "Scssior" && userChoice === "Rock") {
//     result.textContent = "You Won";
//   } else if (computerChoice === "Scssior" && userChoice === "Paper") {
//     result.textContent = "Computer Won";
//   } else if (computerChoice === "Paper" && userChoice === "Scssior") {
//     result.textContent = "You Won";
//   } else {
//     result.textContent = "Draw";
//   }
// }
