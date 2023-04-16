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
function checkAnswers() {
    // Get the user's answers
    var cssanswer1 = document.getElementById("cssanswer1").value;
    var cssanswer2 = document.getElementById("cssanswer2").value;
    var cssanswer3 = document.getElementById("cssanswer3").value;

    // Check the answers
    var correctAnswers = 0;
    if (cssanswer1.toLowerCase() == "javascript") {
        correctAnswers++;
    }
    if (cssanswer2.toLowerCase() == "3") {
        correctAnswers++;
    }
    if (cssanswer3.toLowerCase() == "console.log") {
        correctAnswers++;
    }

    // Display the results
    var result = document.getElementById("result");
    result.innerHTML = "You got " + correctAnswers + " out of 3 correct.";
} 

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
  
  function displayRandomQuestion() {
    const questionElement = document.getElementById("question");
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    questionElement.textContent = randomQuestion;
  }