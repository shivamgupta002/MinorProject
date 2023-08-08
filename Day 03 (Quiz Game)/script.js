const questions = [
  {
    que: "Which of the following option leads to the portability and security of java ?",
    a: "ByteCode is executed by JVM",
    b: "The applet makes the Java code secure and portable",
    c: "Use of exception handling",
    d: "Dynamic binding between objects",
    correct: "a",
  },
  {
    que: "Which of the following is not a Java features?",
    a: "Dynamic",
    b: "Architecture Neutral",
    c: "Use of pointers",
    d: "Object-oriented",
    correct: "c",
  },
  {
    que: "The \u0021 article referred to as a",
    a: "Unicode escape sequence",
    b: "Octal escape",
    c: "Hexadecimal",
    d: "Line feed",
    correct: "a",
  },
  {
    que: "_____ is used to find and fix bugs in the Java programs.",
    a: "JVM",
    b: "JRE",
    c: "JDK",
    d: "JDB",
    correct: "d",
  },
  {
    que: "What is the return type of the hashCode() method in the Object class ?",
    a: "Object",
    b: "int ",
    c: "long",
    d: "void",
    correct: "b",
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
//Next button
const previousButton = () => {
  if (index < numberOfQuestions - 1) {
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
