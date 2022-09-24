
// Add the questions
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["1. Strings","2. Booleans", "3. Alerts", "4. Numbers"],
        answer: "2. Booleans"
    },

    {
        question: "The condition in an if / else statement is enclosed within ....",
        options: ["1. Quotes", "2. Curly Brackets", "3. Paranthesis", "4. Square Brackets"],
        answer: "3. Paranthesis"
    },

    {
        question: "Arrays in Javascript can be used to store:",
        options: ['1. Numbers', '2. Booleans', '3. Strings', '4. All of the Above'],
        answer: "4. All of the Above"
    },

    {
        question: "String values must be enclosed within ....... when being assigned variables.",
        options: ["1. Commas","2. Curly Brackets", "3. Quotes","4. Paranthesis"],
        answer: "2. Curly Brackets"
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["1. Javascript","2. Terminal/Bash", "3. For Loops", "4. Console.log"],
        answer: "2. Console.log"
    },

];

//Get ids from html and set to variables

var welcomeCard = document.querySelector('#welcome-card');
var quizCard = document.querySelector("#quiz-card");
var yourScore = document.querySelector('#your-score');
var submitButton = document.querySelector('#your-score');
var goBackButton = document.querySelector('#go-back-btn');
var clearHighScore = document.querySelector('#clear-high-score-btn');
var timer = document.querySelector('#timer');


// Timer

function countdown(){
    var timeCount = 60;
    var timeInterval = setInterval(function () {
        if (timeCount > 1) {
        timer.textContent = 'Time Remaining:   ' + timeCount + ' seconds';
        timeCount--;
        } else {
          timer.textContent = 'Times Up!';
          clearInterval(timeInterval);
          }
      }, 1000);
    }
// Event listener for when the start quiz button is pressed
    document.getElementById("start-quiz").addEventListener("click", countdown);
  
    
     
//



