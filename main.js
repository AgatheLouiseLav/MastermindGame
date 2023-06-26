let CURRENT_GUESS = 1;
let CURRENT_GUESS_ARRAY = `guess${CURRENT_GUESS}`;


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

///*----- constants -----*/



///*----- app's state (variables) -----*/
const colors = ["red", "green","yellow", "purple", "blue", "pink"];
const secretCombo = [];
const matchElm = document.getElementsByClassName("match");
const buttons = document.querySelectorAll("button");
let guessCombo ;
let guessFeedback ;

///*----- cached element references -----*/
//let winner;;
 

///*----- event listeners -----*/
//playAgainBtn.addEventListener("click", initial)

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
console.log(generateSecretCode())


//Get the ID of the button
buttons.forEach(function(button) {
  button.addEventListener("click", handleColor);
});
//End Getting ID of button


//Modify Object selfsufficiently
function handleColor(evt) {
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
  const currentGuessArray = PLAYER_GUESS[CURRENT_GUESS_ARRAY];
  let perfectMatches = 0;
  let colorMatches = 0;  
  for (let i = 0; i < currentGuessArray.length; i++) {
    if (currentGuessArray[i] === secretCombo[i]) {
      perfectMatches++; 
    } if (secretCombo.includes(currentGuessArray[i])) {
      colorMatches++;
    }  
  console.log(`Perfect matches: ${perfectMatches}`);
  console.log(`Colors matches: ${colorMatches}`);
  console.log(PLAYER_GUESS,"**");
  displayFeedback()
  }
  if(perfectMatches === 4){
    console.log("winner")
    buttons.forEach(function(button) {
    button.removeEventListener("click", handleColor);
});
    return
  } 
}
//END compare guess

//Get the ID of the combo html to render the colors of the game
function displayColor() {
  guessCombo[0].setAttribute("id", `${PLAYER_GUESS[CURRENT_GUESS_ARRAY][0]}`)
  guessCombo[1].setAttribute("id", `${PLAYER_GUESS[CURRENT_GUESS_ARRAY][1]}`)
  guessCombo[2].setAttribute("id", `${PLAYER_GUESS[CURRENT_GUESS_ARRAY][2]}`)
  guessCombo[3].setAttribute("id", `${PLAYER_GUESS[CURRENT_GUESS_ARRAY][3]}`)
 console.log(guessCombo, "guessCombo")
 console.log(CURRENT_GUESS)
}
// End of displaying colors in Game

//Display feeback
function displayFeedback() {
  guessFeedback = document.querySelectorAll(`#guess-${CURRENT_GUESS}>div.feedback>div.match`);
  console.log(guessFeedback, "feedback is here")
  for (let i = 0; i < matchElm.length; i++) {
    matchElm[i].style.backgroundColor = "pink";
  }
  //guessFeedback.appendChild.setAttribute("id", "puple");
}
//End display feedback