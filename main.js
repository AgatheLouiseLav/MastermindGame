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
	//render()
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
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
  button.addEventListener("click", handleColor);
});


//End Getting ID of button


//Modify Object selfsufficiently

function handleColor(evt) {
  const colorClick = evt.target.id;
  if(PLAYER_GUESS[CURRENT_GUESS_ARRAY].length <= 3){
    PLAYER_GUESS[CURRENT_GUESS_ARRAY].push(colorClick);
    if(PLAYER_GUESS[CURRENT_GUESS_ARRAY].length === 4){
      compareGuess()
    }
  } else {
    CURRENT_GUESS++
    CURRENT_GUESS_ARRAY = `guess${CURRENT_GUESS}`;
  } 
  console.log(CURRENT_GUESS_ARRAY)
  console.log(CURRENT_GUESS)
  console.log(PLAYER_GUESS)
  console.log(secretCombo)
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
  //  console.log(PLAYER_GUESS,"player guess");
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