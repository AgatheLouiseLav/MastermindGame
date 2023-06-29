# MastermindGame

<h3>What is mastermind?</h3>

Mastermind is a code-breaking game, where one player has to guess the code of 4 colors (randomly generated), within a limited number of attempts, in this case 10. 
The player has to use logical deduction and the feedback provided to guess the secret code.

The secret code can have many time the same color!!!

<h3>Pseudo code + Technology used</h3>

=>HTML: Divide the screen in half, the left side shows the player's choice of code and the right side gives reminder of the feedback color code and the color choice / 
	button for the player to click on and a play button.
	1.Left side: board side with 10 place of guesses code,
	2.Right side: Title of the game , h2Tag of the goal and an pTag as a reminder of the feedback conditions, and buttons of color for the player to choose.
	

=>CSS: 	Make the UI simple and enjoyable to use,

	BONUS: make it mobile responsive,

=>JS:  	1.Generate a secret code, using a for loop.
	2.Player's choice of code breaking, addEventListener to each color button.
	3.Store Player's choice and display it on the screen,using the ID of the buttons Tag (of the color) to push it in an obejct of 10 arrays, 1 array would be of 	4 items representing the guesses.
	4.Compare the secret code after each guess, once the guess has reach an amount of 4 items, run a function to compre the secret code to th player guess.
	5.Check each color of the player code and display feedback (right color + right place and right color), using a for loop check if the index of player guess 		match exactly the secret code index and use array method to check if player guess includes some of the color code.
	6. Display the feedback, set an attributes id to a specific div.
	7.If the Player's code has the 4 right color at the right place then, we 've got a winner, Change the right side of the screen rendering Winning message with 		the secret code and a play button.
	8.If the Player's choice isn't correct then carry on the game,
	9.Once the Player reach 10 attempts and are all wrong then, the player loses, Change the right side of the screen rendering Loses message with the secret code 		and a play button.
	10.Playe again button, add a click eventListener to clear the board , empty the player guess object, re-generate a new secret code.

	11.BONUS: add a timer.



<img src="./image/MastermindImg1.png" alt="screenshot of mastermind game" />

<img src="./image/MastermindFeedback.png" alt="screenshot of feedback in mastermind"/>

<img src="./image/MastermindWinCon.png" alt="screenshot of mastermind game" />

<img src="./image/MasterminsLoseCon.png" alt="screenshot of mastermind game" />


<a href=" https://agathelouiselav.github.io/MastermindGame/">Link to play Mastermind</a>
