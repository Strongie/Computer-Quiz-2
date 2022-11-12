
const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        options: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
        answer: "2. Booleans",
    },

    {
        question: "The condition in an if / else statement is enclosed within ....?",
        options: ["1. Quotes", "2. Curly Brackets", "3. Paranthesis", "4. Square Brackets"],
        answer: "3. Paranthesis",
    },

    {
        question: "Arrays in Javascript can be used to store:",
        options: ["1. Numbers", "2. Booleans", "3. Strings", "4. All of the Above"],
        answer: "4. All of the Above",
    },

    {
        question: "String values must be enclosed within ....... when being assigned variables.",
        options: ["1. Commas","2. Curly Brackets", "3. Quotes","4. Paranthesis"],
        answer: "2. Curly Brackets",
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["1. Javascript","2. Terminal/Bash", "3. For Loops", "4. Console.log"],
        answer: "2. Console.log",
    },

    ];

console.log(questions);

//Get ids from html and set to variables

var welcomeCard = document.querySelector('#welcome-card');
var quizCard = document.querySelector("#quiz-card");
var yourScore = document.querySelector('#your-score');
var submitButton = document.querySelector('#submit-btn');
var goBackButton = document.querySelector('#go-back-btn');
var clearHighScore = document.querySelector('#clear-high-score-btn');
var timer = document.querySelector('#timer');
var highScores = document.querySelector('#highscores');
var quizQuestion = document.querySelector('#quiz-question');
var currentQuestion = 0;
var score =0;
var initials = document.querySelector("#initials");
let timeCount = 60;
// Timer

function countdown(){
    console.log('countdown called');
    console.log(timeCount);
    let timeInterval = setInterval(function () {
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
    document
    .getElementById("start-quiz")
    .addEventListener("click", HideWelcomeCard);
    document
    .getElementById("start-quiz")
    .addEventListener("click", askQuestion(currentQuestion));
    
// Event Listeners

document
.getElementById('answer-button1')
.addEventListener('click', handleAnswer);
document
.getElementById('answer-button2')
.addEventListener('click', handleAnswer);
document
.getElementById('answer-button3')
.addEventListener('click', handleAnswer);
document
.getElementById('answer-button4')
.addEventListener('click', handleAnswer);
document
.getElementById('submit-btn')
.addEventListener('click', submitScore);



function handleAnswer (e) {
    const question = questions[currentQuestion];
    if (e.target.innerHTML == question.answer) {
        score += 1;
    }
    currentQuestion += 1;
    if (currentQuestion == questions.length){
        showScore()
    }
        else{
            askQuestion(currentQuestion)
        };
    }

    

//function to show question card

function HideWelcomeCard (){
    welcomeCard.style.display = 'none';
    quizCard.style.display = 'block';

};

// show your score and submit page
function showScore(){
    quizCard.style.display = "none";
    yourScore.style.display = "block";
    document.getElementById("myscore").innerHTML = `Your score is ${score}`;
};
//  submit highscore

function submitScore(){
    // console.log('submit score is being called');
    showHighScore();
    saveScores();
    
}


//show highscores page

function showHighScore (){
    yourScore.style.display ='none';
    highScores.style.display = "block";

};

//place question in quizcard
function askQuestion(currentQuestion){
    
    var query = questions[currentQuestion];
    var options = query.options;
    //console.log(options);
if (currentQuestion<questions.length){
    quizQuestion.textContent = query.question;
}
    

   for (var i = 0; i < options.length; i++) { 
    // var option = options[i];
    // console.log(option);

   const answerID = "answer-button" + (i+1);
    document.getElementById(answerID).textContent = options[i];
};
};




// function correctAnswer(){
//   //  return 
// //     //var answer = questions[currentQuestion].answer
//     if(answerbtn1.textContent !== questions[currentQuestion].answer) {
//         console.log("wrong");
//     } 
//     else {
//      console.log("correct");}
      
//    if(answerbtn2.textContent !== questions[currentQuestion].answer) {
//     console.log("wrong");
// } 
// else {
//  console.log("correct");}

// if(answerbtn3.textContent !== questions[currentQuestion].answer) {
//     console.log("wrong");
// } 
// else {
//  console.log("correct");
// }
// if(answerbtn4.textContent !== questions[currentQuestion].answer) {
//     console.log("wrong");
// } 
// else{
//  console.log("correct");}
// };







//Check answers


// capture submit data
// var submittedInformation = {
//     initials: initials.value,
//     score: 
// };


//save scores to local storage

function saveScores (){
    const initialsInput = initials.value;
    console.log(initialsInput);
    localStorage.setItem(initialsInput, score);
    
};








// //clear high scores

clearHighScore.addEventListener("click", clearScoreBoard);

function clearScoreBoard (event){
// event.preventDefault();
localStorage.clear();
}; 

//event listener for go back to start

goBackButton.addEventListener("click", restart);


// return to start
function restart (e){
    // e.preventDefault();
    currentQuestion = 0;
    score = 0;
    timeCount = 60;
    welcomeCard.style.display = 'block';
    highScores.style.display = 'none';
    
};