/*-------------------- Constants------------------------*/

// sound for clicks
// sound for passing/failing quiz
// objects for each quiz
// object for each question with answer choices 

import { hpQuestions } from "../data/hp.js";


/*---------------------- Variables --------------------*/

// Create variables for number of questions, number answered, number answered correctly

let category, score, question, correctAns, questionArray
let i = 0

/*----------------- Cached Element References ---------*/

// Cached elements: question message; muliple choices 1-5; categories?; 
// categories
const titleEl = document.querySelector("#title")
const messageEl = document.querySelector("#message")
const catButtons = document.querySelector("#category-cards")
const body = document.querySelector("body")

/*---------------- Event Listeners -------------------*/

// clicks on categories and answers
catButtons.addEventListener('click', chooseCategory)

// extra 1: hover over on categories and answers
// extra 2: click on pause button
// toggle: light and dark mode
// replay quiz

function test(evt) {
   console.log(evt.target);
}
/*------------------- Functions ---------------------*/

// init to landing page
init ()

function init (){
   titleEl.innerText = "Nerd Quiz"
   messageEl.innerText = "Test Your Nerd Knowledge"
}
// render to quiz page
// render to result page
// check answer
// change between questions
// totaling results
// extra: shuffle questions
// extra: random quiz
// extra: difficulties


function chooseCategory(evt){
   category = evt.target.id
   renderQuiz()
   pullQuestions()
}



function renderQuiz () {
   catButtons.innerHTML = ""
   body.innerHTML =
      `<h1> Are you ready to begin?</h1>
      <button type="button" class="btn btn-primary" id="start-button">Begin</button>`
   const startBtn = document.querySelector("#start-button")
   startBtn.addEventListener('click', showQuestion)
}


function showQuestion() {
   body.innerHTML = `
   <div class="card" style="width: 18rem;">
   <div class="card-header">
      ${questionArray[i].question}
   </div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">${questionArray[i].multChoice[0]}</li>
      <li class="list-group-item">${questionArray[i].multChoice[1]}</li>
      <li class="list-group-item">${questionArray[i].multChoice[2]}</li>
      <li class="list-group-item">${questionArray[i].multChoice[3]}</li>
      <li class="list-group-item">${questionArray[i].multChoice[4]}</li>
      </ul>
   </div>`;
   const multiChoiceItem = document.querySelector(".list-group")
   multiChoiceItem.addEventListener('click', renderGuess)
}

function renderGuess(evt) {
multiChoiceItem.classList.add("guess")
console.log(multiChoiceItem.classList);
}

function renderResult () {

}

function nextQuestion () {

}

function checkAnswer(evt) {
   let ans = evt.target.innerText;
   if (ans = questionArray[i].correctAns) {
      ;
   }
}

function backToHome(){

}

function pullQuestions () {
   switch (category) {
      case "harry-potter":
         questionArray = hpQuestions;
         break;
      case "lord-of-the-rings":
         questionArray = lotrQuestions;
         break;
      case "star-wars":
         quesitonArray = swQuestions;
         break;
      case "dungeons-dragons":
         questionArray = ddQuestions;
      break;
      default:
         console.log("try again");
   }
}