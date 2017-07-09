// JavaScript function that wraps everything
$(document).ready(function() {

// Create the global variables that will be needed for the game
//-------------------------------------------------------------

	// Random number that is the target
	var randomNumber = 0;

	// Score that is updated based on player clicks
	var score = 0;

	// The number values associated with each crystal
	var crystal1 = 0;
	var crystal2 = 0;
	var crystal3 = 0;
	var crystal4 = 0;

	// Record wins and losses
	var wins = 0;
	var losses = 0;

// Create the functions that will be needed for the game
//--------------------------------------------------------

	// Function to select random number (source: MDN)
	function getRandomIntInclusive(min, max) {
	  min = Math.ceil(min);
	  max = Math.floor(max);
	  return Math.floor(Math.random() * (max - min + 1)) + min; 
	  //The maximum is inclusive and the minimum is inclusive 
	};

	// Function to start/reset game. 
	function startGame() {
		// generate target number and put it in html
		randomNumber = getRandomIntInclusive(19,120);
		$(".targetNumber").html(randomNumber);
		// set new numbers for each crystal
		// Create attributes for each image class
		crystal1 = getRandomIntInclusive(1,12);
		$(".crystal1").attr("crystalValue",crystal1);
		crystal2 = getRandomIntInclusive(1,12);
		$(".crystal2").attr("crystalValue",crystal2);
		crystal3 = getRandomIntInclusive(1,12);
		$(".crystal3").attr("crystalValue",crystal3);
		crystal4 = getRandomIntInclusive(1,12);
		$(".crystal4").attr("crystalValue",crystal4);
		// Set score to zero and print to html
		score = 0;
		$(".score").html(score);
		// Testing
		// ----------------------
		console.log(randomNumber);
		console.log(crystal1);
		console.log(crystal2);
		console.log(crystal3);
		console.log(crystal4);
		console.log(score);
		// ----------------------
	};

	// Function to update wins and losses
	function winLoss() {
		if (score === randomNumber) {
			// If score and randomNumber match then increment wins by 1
			wins += 1;
			// Record wins in html document
			$(".addWin").html("Wins : " + wins); 	
			// show true if it is either a win or a loss
			return true; 
		}
		else if (score > randomNumber) {
			// If score is greater than randomNumber then increment losses by 1
			losses += 1;
			// Record losses in html document
			$(".addLoss").html("Losses : " + losses);
			// show true if it is either a win or a loss
			return true;
		}
		else {
			// show false if game should continue
			return false;
		}
	};



// Run the main javascript/jquery in this section
// -------------------------------------------------------

	// Create all numbers required for the game
	startGame();

	// Run this section of code if any of the crystal images is clicked
	$(".crystal-image").on("click", function(){
		// Grab the corresponding value of the crystal that was clicked and add it to score
		var crystalValue = ($(this).attr("crystalValue"));
		crystalValue = parseInt(crystalValue);
		score += crystalValue;
		// Record the score to html
		$(".score").html(score);
		// Testing
		// ---------------------------
		console.log(this);
		console.log(crystalValue);
		console.log(score);
		// ---------------------------
		// Check the score, add to win or loss, or continue
		var gameOver = winLoss();
		// If game is over then reset
		if (gameOver === true){
			startGame();
		} ;
	});
});
	




