///*----- constants -----*/
const colors = ["red", "green","yellow", "purple", "blue", "pink"];
const secretCombo = [];
const winAudio = new Audio("/sounds/mixkit-achievement-bell-600.wav");
const clickAudio = new Audio("/sounds/mixkit-cool-interface-click-tone-2568.wav");

const PLAYER_GUESS= {
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


///*----- app's state (variables) -----*/
let CURRENT_GUESS = 1;
let CURRENT_GUESS_ARRAY = `guess${CURRENT_GUESS}`;
let guessCombo;
let guessFeedback;

///*----- cached element references -----*/
const matchElm = document.getElementsByClassName("match");
const buttons = document.querySelectorAll("button");
 

///*----- event listeners -----*/
//playAgainBtn.addEventListener("click", initial)

//Get the ID of the button
buttons.forEach(function(button) {
  button.addEventListener("click", handleColor);
});
//End Getting ID of button

///*----- functions -----*/
//initial()

function initial() {
	generateSecretCode();
	//clearBoard()
	//clearMessage()
}

//Generate a random secret color code
function generateSecretCode(){
for(let i = 0; i< 4; i++){
	const randomColors = Math.floor(Math.random() *colors.length)
	secretCombo.push(colors[randomColors])     
	}
	return secretCombo;
}
console.log(generateSecretCode());
//End getting secret color code



//Modify Object selfsufficiently
function handleColor(evt) {
  clickAudio.play();
  const colorClick = evt.target.id;
  guessCombo = document.querySelectorAll(`#guess-${CURRENT_GUESS}>div.color_circle`);;
  if(PLAYER_GUESS[CURRENT_GUESS_ARRAY].length <= 3){
    PLAYER_GUESS[CURRENT_GUESS_ARRAY].push(colorClick);
    displayColor();
  } else {
    CURRENT_GUESS++
    CURRENT_GUESS_ARRAY = `guess${CURRENT_GUESS}`;
  } 
  if(PLAYER_GUESS[CURRENT_GUESS_ARRAY].length === 4){
      compareGuess()
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
    console.log("winner")
    buttons.forEach(function(button) {
    button.removeEventListener("click", handleColor);
});
winnerMessage();
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
  winAudio.play();
  document.querySelector("h1").textContent = "YOU ARE THE MASTERMIND!!!";
  document.querySelector("p").style.display ="none";
  document.querySelector("h3").style.display ="block";
}

//End getting winner message

//"🎉🎉🎉"