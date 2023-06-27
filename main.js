///*----- constants -----*/
const colors = ["red", "green","yellow", "purple", "blue", "pink"];
const winAudio = new Audio("/sounds/mixkit-achievement-bell-600.wav");
const loseAudio = new Audio("/sounds/mixkit-losing-drums-2023.wav");
const clickAudio = new Audio("/sounds/mixkit-cool-interface-click-tone-2568.wav");

///*----- app's state (variables) -----*/
let CURRENT_GUESS = 1;
let CURRENT_GUESS_ARRAY = `guess${CURRENT_GUESS}`;
let guessCombo;
let guessFeedback;
let secretCombo = [];
let PLAYER_GUESS= {
	guess1 : [],
	guess2 : [],
	guess3 : [],
	guess4 : [],
	guess5 : [],
	guess6 : [],
	guess7 : [],
	guess8 : [],
	guess9 : [],
	guess10 : []
}

///*----- cached element references -----*/
const matchElm = document.getElementsByClassName("match");
const buttons = document.querySelectorAll(".choice>button");
const showCombo = document.querySelectorAll(".reveal-combo>div");
const divCombo = document.querySelector(".reveal-combo");
const playAgainBtn = document.getElementById("play-again");
divCombo.style.display = "none";

///*----- event listeners -----*//
playAgainBtn.addEventListener("click", initial);

///*----- functions -----*/

function initial() {
  PLAYER_GUESS= {
	guess1 : [],
	guess2 : [],
	guess3 : [],
	guess4 : [],
	guess5 : [],
	guess6 : [],
	guess7 : [],
	guess8 : [],
	guess9 : [],
	guess10 : []
}
  CURRENT_GUESS=1;
  CURRENT_GUESS_ARRAY= `guess${CURRENT_GUESS}`;
  secretCombo = [];
  generateSecretCode();
  console.log(secretCombo);
  clearBoard();
  clearMessage();
  ableButton();
}

//Generate a random secret color code
function generateSecretCode(){
for(let i = 0; i< 4; i++){
	const randomColors = Math.floor(Math.random() * colors.length)
	secretCombo.push(colors[randomColors]) ;    
	}
	return secretCombo;
}
//End getting secret color code



//Modify Object selfsufficiently
function handleColor(evt) {
  const colorClick = evt.target.id;
  clickAudio.play(); 
  guessCombo = document.querySelectorAll(`#guess-${CURRENT_GUESS}>div.color_circle`); 
  if(PLAYER_GUESS[CURRENT_GUESS_ARRAY].length <= 3){
    PLAYER_GUESS[CURRENT_GUESS_ARRAY].push(colorClick);
    displayColor();
  } else {
    CURRENT_GUESS++;
    CURRENT_GUESS_ARRAY = `guess${CURRENT_GUESS}`;
    guessCombo = document.querySelectorAll(`#guess-${CURRENT_GUESS}>div.color_circle`);
    PLAYER_GUESS[CURRENT_GUESS_ARRAY].push(colorClick);
    displayColor();
  } 
  if(PLAYER_GUESS[CURRENT_GUESS_ARRAY].length === 4){
      compareGuess();
    }
}
//END modify object



//Compare Guess 
function compareGuess() {
  guessFeedback = document.querySelectorAll(`#guess-${CURRENT_GUESS}>div.feedback>div.match`);
  const currentGuessArray = PLAYER_GUESS[CURRENT_GUESS_ARRAY];
  let perfectMatches = 0;
  let colorMatches = 0;  
  for (let i = 0; i < currentGuessArray.length; i++) {
    if (currentGuessArray[i] === secretCombo[i]) {
      perfectMatches++; 
      guessFeedback[i].setAttribute("id", "m-red");
    } else if (secretCombo.includes(currentGuessArray[i]) && !perfectMatches[i]) {
      colorMatches++;
      guessFeedback[i].setAttribute("id", "m-white");
    }  
  }
  if(perfectMatches === 4){
    disableButton();
    winnerMessage();
  } 
  if(PLAYER_GUESS.guess10.length === 4){
    disableButton();
    loseMessage();
  }
 
}
//END compare guess


//Get the ID of the combo html to render the colors of the game
function displayColor() {
  guessCombo[0].setAttribute("id", `${PLAYER_GUESS[CURRENT_GUESS_ARRAY][0]}`);
  guessCombo[1].setAttribute("id", `${PLAYER_GUESS[CURRENT_GUESS_ARRAY][1]}`);
  guessCombo[2].setAttribute("id", `${PLAYER_GUESS[CURRENT_GUESS_ARRAY][2]}`);
  guessCombo[3].setAttribute("id", `${PLAYER_GUESS[CURRENT_GUESS_ARRAY][3]}`);
}
// End of displaying colors in Game


//Get Winner message
function winnerMessage() {
  //winAudio.play();
  playAgainBtn.style.display ="block";
  document.querySelector("h1").textContent = "YOU ARE THE MASTERMIND!!!";
  document.querySelector("p").style.display ="none";
  document.querySelector("h4").style.display ="none";
  document.querySelector(".choice").style.display ="none";
  document.querySelector("h3").style.display ="block";
  document.querySelector("h3").textContent ="🎉🎉🎉";
  displayCombo();
}
//End getting winner message

//Dislay lose message
function loseMessage() {
  //loseAudio.play();
  playAgainBtn.style.display ="block";
  document.querySelector("h1").textContent = "Sorry , you ran out of attempts...";
  document.querySelector("p").style.display ="none";
  document.querySelector("h4").style.display ="none";
  document.querySelector(".choice").style.display ="none";
  document.querySelector("h3").style.display ="block";
  document.querySelector("h3").textContent ="😭";
  displayCombo();
}
//End display loose message


//Display combo
function displayCombo() {
  divCombo.style.display = "flex";
  showCombo.forEach((combo, i) => combo.setAttribute("id", `${secretCombo[i]}`))
}
//End display combo

//Clear board
function clearBoard() {
  const colorCircles = document.querySelectorAll(".color_circle");
  colorCircles.forEach((color) => {
    color.removeAttribute("id");
  });  
  const matches = document.querySelectorAll(".match");
  matches.forEach((match) => {
    match.removeAttribute("id");
  });
}
//End Clear board

//Clear Message
function clearMessage() {
  playAgainBtn.style.display ="none";
  divCombo.style.display = "none";
  document.querySelector("h1").textContent = "MASTERMIND";
  document.querySelector("h3").style.display ="none";
  document.querySelector("p").style.display ="block";
  document.querySelector(".choice").style.display ="block";
  document.querySelector("h4").style.display ="block";
}

//End Clear message

//Able button
function ableButton() {
  buttons.forEach(function(button) {
  button.addEventListener("click", handleColor)});
}
//end able button

//Disable Button
function disableButton() {
  buttons.forEach(function(button) {
    button.removeEventListener("click", handleColor)});
}

//End disable button