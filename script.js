// JAVACRIPT QUIZ PAGE

function checkAnswers() {
    // Get the user's answers
    var answer1 = document.getElementById("answer1").value;
    var answer2 = document.getElementById("answer2").value;
    var answer3 = document.getElementById("answer3").value;

    // Check the answers
    var correctAnswers = 0;
    if (answer1.toLowerCase() == "javascript") {
        correctAnswers++;
    }
    if (answer2.toLowerCase() == "3") {
        correctAnswers++;
    }
    if (answer3.toLowerCase() == "console.log") {
        correctAnswers++;
    }

    // Display the results
    var result = document.getElementById("result");
    result.innerHTML = "You got " + correctAnswers + " out of 3 correct.";
} 

// CSS QUIZ PAGE

const questions = [
    {
        question: "What is CSS?",
        answer: "Cascading Style Sheets"
      },
      {
        question: "What is the naming of a css file at the end?",
        answer: "css"
      },
      {
        question: "If you don't use a css file and want to style. What do you use on the html?",
        answer: "<style>"
      },
      {
        question: "In what year was CSS released?",
        answer: "1996"
      },
      {
        question: "What is W3C?",
        answer: "World Wide Web Consortium"
      }
  ];
  
//   function displayRandomQuestion() {
//     const questionElement = document.getElementById("question");
//     const randomIndex = Math.floor(Math.random() * questions.length);
//     const randomQuestion = questions[randomIndex];
//     questionElement.textContent = randomQuestion.question;
  
//     const answerInput = document.getElementById("answer");
//     answerInput.value = ""; // clear previous answer
  
//     const submitButton = document.getElementById("submit");
//     submitButton.onclick = function() {
//       const userAnswer = answerInput.value.toLowerCase();
//       const correctAnswer = randomQuestion.answer.toLowerCase();
//       const feedbackElement = document.getElementById("feedback");
//       if (userAnswer === correctAnswer) {
//         feedbackElement.textContent = "Correct!";
//       } else {
//         feedbackElement.textContent = "Incorrect. The correct answer is " + correctAnswer + ".";
//       }
//     }
//   }


let numCorrect = 0;
let numIncorrect = 0;

function displayRandomQuestion() {
  const questionElement = document.getElementById("question");
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];
  questionElement.textContent = randomQuestion.question;

  const answerInput = document.getElementById("answer");
  answerInput.value = ""; // clear previous answer

  const submitButton = document.getElementById("submit");
  submitButton.onclick = function() {
    const userAnswer = answerInput.value.toLowerCase();
    const correctAnswer = randomQuestion.answer.toLowerCase();
    const feedbackElement = document.getElementById("feedback");
    if (userAnswer === correctAnswer) {
      numCorrect++;
      feedbackElement.textContent = "Correct!";
    } else {
      numIncorrect++;
      feedbackElement.textContent = "Incorrect. The correct answer is " + correctAnswer + ".";
    }
    updateScore();
    displayRandomQuestion();
  }
}

function updateScore() {
  const correctElement = document.getElementById("num-correct");
  correctElement.textContent = numCorrect;
  const incorrectElement = document.getElementById("num-incorrect");
  incorrectElement.textContent = numIncorrect;
}

displayRandomQuestion();