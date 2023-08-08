const questions = [
  {
    que: "Which one of the following also known as Conditional Expression:",
    a: "Alternative to if-else",
    b: "Switch statement",
    c: "If-then-else statement",
    d: "immediate if",
    correct: "d",
  },
  {
    que: "Which one of the following is the correct way for calling the JavaScript code?",
    a: "Preprocessor",
    b: "Triggering Event",
    c: "RMI",
    d: "Function/Method",
    correct: "d",
  },
  {
    que: "When interpreter encounters an empty statements, what it will do",
    a: "Shows a warning",
    b: "Prompts to complete the statement",
    c: "Throws an error",
    d: "Ignores the statements",
    correct: "d",
  },
  {
    que: " Which of the following variables takes precedence over the others if the names are the same?",
    a: "Global variable",
    b: "The local element",
    c: "The two of the above",
    d: "None of the above",
    correct: "b",
  },
  {
    que: " Which of the following type of a variable is volatile ?",
    a: "Mutable variable",
    b: "Dynamic variable ",
    c: "Volatile variable",
    d: "Immutable variable",
    correct: "a",
  },
];
let index = 0;
let right = 0;
let unattended = 0;
let wrong = 0;
const numberOfQuestions = questions.length;
const required = document.querySelector(".required");
const questionBox = document.querySelector("#queBox");
const optionInput = document.querySelectorAll(".option");

const loadQuestion = () => {
  reset();
  const data = questions[index];
  questionBox.innerHTML = `${index + 1}.   ${data.que}`;
  optionInput[0].nextElementSibling.innerHTML = data.a;
  optionInput[1].nextElementSibling.innerHTML = data.b;
  optionInput[2].nextElementSibling.innerHTML = data.c;
  optionInput[3].nextElementSibling.innerHTML = data.d;
};

const submitQuiz = () => {
  // To find coreect or wrong answers
  const answer = getAnswer();
  if (answer == "") {
    required.style.display = "block";
  } else {
    const data = questions[index];
    if (data.correct == answer) {
      right++;
    } else {
      wrong++;
    }
    // To change question
    nextQuestion();
  }
};
//Previous button
const previousButton = () => {
  if (index < numberOfQuestions ) {
    index--;
    loadQuestion();
  } else {
    showresults(right, wrong);
  }
};
//Next button
const nextButton = () => {
  unattended++;
  nextQuestion();
  
};
const nextQuestion=()=>{
  if (index < numberOfQuestions - 1) {
    index++;
    loadQuestion();
  } else {
    showresults(right, wrong);
  }
}
// To get answer
const getAnswer = () => {
  let answer = 0;
  optionInput.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

// To show Result
const showresults = () => {
  const percent = (right / numberOfQuestions) * 100;
  document.getElementById("box").innerHTML = `
  <h2>Thanks for playing quiz</h2>
  <h3>Your right-> ${right},wrong => ${wrong} and unattempted -> ${unattended}</h3>
  <h3>Your score ${right} out of ${numberOfQuestions}</h3>
  <h3>Your score ${Math.round(percent)} points out of 100</h3>
  `;
};

//For reset question
const reset = () => {
  required.style.display = "none";
  optionInput.forEach((input) => {
    input.checked = false;
  });
};

loadQuestion();
