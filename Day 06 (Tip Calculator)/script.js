// console.log("hello world!");
const amount = document.getElementById("amount_field");
const tip = document.getElementById("tip_field");
const button = document.getElementById("submit");
const answer = document.querySelector(".result");

let totalAmount = 0;
button.addEventListener("click", () => {
  let newAmount = parseInt(amount.value);
  let newTip = parseInt(tip.value);

  totalAmount = newAmount * (newTip / 100);
  totalAmount += newAmount;
  console.log(totalAmount);
  answer.innerHTML = `
 <p class="label">Total Amount :</p>
 <p id="answer">${totalAmount}</p>            
`;
});
