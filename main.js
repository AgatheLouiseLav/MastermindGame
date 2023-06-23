const playAgainBtn = document.querySelector("button")
playAgainBtn.addEventListener("click", initial)

const greenBtn = document.getElementById("green_btn")
const yellowBtn = document.getElementById("yellow_btn")
const pinkBtn = document.getElementById("pink_btn")
const redBtn = document.getElementById("red_btn")
const blueBtn = document.getElementById("blue_btn")
const purpleBtn = document.getElementById("purple_btn")


const colors = ["red", "green","yellow", "orange", "blue", "pink"]
const secretCombo = []


function initial(){
	secretColors()
	clearBoard()
	clearMessage()
}

function generateSecretCode(){
for(let i = 0; i< 4; i++){
	const randomColors = Math.floor(Math.random() *colors.length)
	secretCombo.push(colors[randomColors])     
	}
	return secretCombo;}

function compareCodes(secretCode, guess) {}

function getPlayerGuess(){
//collect and compare code
}

function playGame() {}
