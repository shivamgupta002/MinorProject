const birth = document.getElementById("birth");
const calculate = document.getElementById("calculate");
const result = document.querySelector(".result");
const now = new Date();
let birthdayDate = 0;
birth.addEventListener("change", () => {
  birthdayDate = birth.value;
});

calculate.addEventListener("click", () => {
  getAnswer(birthdayDate);
});
function getAnswer(birthdayDate) {
  let userDate = new Date(birthdayDate);
  if (userDate.getFullYear() > now.getFullYear()) {
    alert("Please enter a valid birth date");
  } else {
    let year = now.getFullYear() - userDate.getFullYear();
    let month = now.getMonth() - userDate.getMonth();
    let day = now.getDate() - userDate.getDate();

    console.log(year, month, day);
    result.innerHTML = `<p class="answer" >You are ${year} year, ${month} month and ${day} years old</p>`;
  }
}
