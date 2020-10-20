	// Player name
	var player1 = "Player 1";
	var player2 = "Player 2";
	var player1Score = 0;
	var player2Score = 0;
    var round = 0;
    var scores = 0;

	// Function to change the player name
	function editNames() {
		player1 = prompt("Change Player1 name");
		player2 = prompt("Change player2 name");

		document.querySelector("p.Player1").innerHTML = player1;
		document.querySelector("p.Player2").innerHTML = player2;
	}

	// Function to roll the dice
	function rollTheDice() {
		setTimeout(function () {
			var randomNumber1 = Math.floor(Math.random() * 6) + 1;
			var randomNumber2 = Math.floor(Math.random() * 6) + 1;
            round += 1;
			//store score
			player1Score  = player1Score + randomNumber1;
			player2Score  = player2Score + randomNumber2;

			document.getElementById("PlayerScore1").innerHTML = player1Score;
			document.getElementById("PlayerScore2").innerHTML = player2Score;

			document.querySelector(".img1").setAttribute("src",
				"img/dice" + randomNumber1 + ".png");

			document.querySelector(".img2").setAttribute("src",
				"img/dice" + randomNumber2 + ".png");
				
			document.querySelector("h1").innerHTML = "Rounds " + round;

			if (round != 4) {
				getTheWinner(randomNumber1,randomNumber2);
			}else {
				getTheWinner(player1Score,player2Score,'THE GAME!');
				round  = 0;
				player1Score = 0;
				player2Score = 0;
			}


		}, 2500);
	}

	function getTheWinner(score1,score2,type = 'Round') {
		if (score1 === score2) {
			document.querySelector("h3").innerHTML = "Draw " + type + "!";
		}

		else if (score1 % 2 == 0) {
			document.querySelector("h3").innerHTML
							= (player2 + " WINS " + type + "!");
		}

		else {
			document.querySelector("h3").innerHTML
							= (player1 + " WINS " + type + "!");
		}
	}
