const guess = [];
guess.length = 4;
const playerGuess= {
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
//const playAgainBtn = document.querySelector("button")

//const greenBtn = document.getElementById("green_btn")
//const yellowBtn = document.getElementById("yellow_btn")
//const pinkBtn = document.getElementById("pink_btn")
//const redBtn = document.getElementById("red_btn")
//const blueBtn = document.getElementById("blue_btn")
//const purpleBtn = document.getElementById("purple_btn")



///*----- app's state (variables) -----*/
//const colors = ["red", "green","yellow", "orange", "blue", "pink"];
//const secretCombo = [];

///*----- cached element references -----*/
//let winner;;
 

///*----- event listeners -----*/
//playAgainBtn.addEventListener("click", initial)

///*----- functions -----*/
//initial()

//function initial(){
//	secretColors()
//	clearBoard()
//	clearMessage()
//	generateSecretCode()
//	render()

//}

//function generateSecretCode(){
//for(let i = 0; i< 4; i++){
//	const randomColors = Math.floor(Math.random() *colors.length)
//	secretCombo.push(colors[randomColors])     
//	}
//	return secretCombo;
//}

//function compareCodes(secretCode, guess) {}

//function getPlayerGuess(){
////collect and compare code
//}

//function playGame() {}


//function handleChoice(evt) {
//  // Guards (no nothing unless one of the three buttons were clicked)
//  if (evt.target.tagName !== 'BUTTON') return;
//  //Player has made a choice
//  results.p = evt.target.innerText.toLowerCase();
//  //compute a random choice for the computer
//  results.c = getRandomRPS();
//  winner = getWinner();
//  scores[winner] += 1;
//  render();
//};

//Get the ID of the button
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
  button.addEventListener("click", handleColor);
});

function handleColor(evt) {
  console.log(evt.target.id);
}
//End Getting ID of button

//Get the ID of button and push it to an array that stops at the length of [3]
const firstArray = [];

function handleColor(evt) {
  const colorClick = evt.target.id;
  if(firstArray.length <= 3){
    firstArray.push(colorClick)
  } else {
   return 
  } 
  console.log(firstArray)
}

//End of array.push for ID

//Modify Object selfsufficiently
let CURRENT_GUESS = 1;
let CURRENT_GUESS_ARRAY = `guess${CURRENT_GUESS}`;

Object.keys(playerGuess).forEach(function(index) {
    console.log(index)
});

function handleColor(evt) {
  const colorClick = evt.target.id;
  if(playerGuess[CURRENT_GUESS_ARRAY].length <= 3){
    playerGuess[CURRENT_GUESS_ARRAY].push(colorClick);
  } else {
    CURRENT_GUESS++
    CURRENT_GUESS_ARRAY = `guess${CURRENT_GUESS}`;
    return 
  } 
  console.log(CURRENT_GUESS_ARRAY)
  console.log(CURRENT_GUESS)
  console.log(playerGuess)
}
//END modify object