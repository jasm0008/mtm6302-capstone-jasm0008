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