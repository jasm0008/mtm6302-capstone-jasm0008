// JAVACRIPT QUIZ PAGE

function checkAnswers() {
    // Get the user's answers
    const answer1 = document.getElementById("answer1").value;
    const answer2 = document.getElementById("answer2").value;
    const answer3 = document.getElementById("answer3").value;

    // Check the answers
    let correctAnswers = 0;
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
    let result = document.getElementById("result");
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
      },
  ];




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


//   PHP QUIZ PAGE
function phpcheckAnswers() {
    // Get the user's answers
    const phpanswer1 = document.getElementById("phpanswer1").value;
    const phpanswer2 = document.getElementById("phpanswer2").value;
    const phpanswer3 = document.getElementById("phpanswer3").value;

    // Check the answers
    let phpcorrectAnswers = 0;
    if (phpanswer1.toLowerCase() == "hypertext preprocessor") {
        phpcorrectAnswers++;
    }
    if (phpanswer2.toLowerCase() == "rasmus lerdorf") {
        phpcorrectAnswers++;
    }
    if (phpanswer3.toLowerCase() == "true") {
        phpcorrectAnswers++;
    }

    // Display the results
    let phpresult = document.getElementById("phpresult");
    phpresult.innerHTML = "You got " + phpcorrectAnswers + " out of 3 correct.";
} 













  





const htmlquestions = [
    {
        question: "Whatsadsdasds is CSS?",
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
      },
  ];



  let numhtmlCorrect = 0;
  let numhtmlIncorrect = 0;
  
  function displayRandomHtmlQuestion() {
    const questionhtmlElement = document.getElementById("htmlquestion");
    const randomHtmlIndex = Math.floor(Math.random() * htmlquestions.length);
    const randomhtmlQuestion = htmlquestions[randomHtmlIndex];
    questionhtmlElement.textContent = randomhtmlQuestion.question;
  
    const answerInput = document.getElementById("htmlanswer");
    answerInput.value = ""; // clear previous answer
  
    const submitButton = document.getElementById("htmlsubmit");
    submitButton.onclick = function() {
      const htmluserAnswer = answerInput.value.toLowerCase();
      const htmlcorrectAnswer = randomhtmlQuestion.answer.toLowerCase();
      const htmlfeedbackElement = document.getElementById("htmlfeedback");
      if (htmluserAnswer === htmlcorrectAnswer) {
        numhtmlCorrect++;
        htmlfeedbackElement.textContent = "Correct!";
      } else {
        numhtmlIncorrect++;
        htmlfeedbackElement.textContent = "Incorrect. The correct answer is " + htmlcorrectAnswer + ".";
      }
      updateScore();
      displayRandomHtmlQuestion();
    }
  }
  
  function updateScore() {
    const correctElement = document.getElementById("htmlnum-correct");
    correctElement.textContent = numhtmlCorrect;
    const incorrectElement = document.getElementById("htmlnum-incorrect");
    incorrectElement.textContent = numhtmlIncorrect;
  }
  
  displayRandomHtmlQuestion();

