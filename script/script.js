// Variables
let symbolComputer;
let symbolPlayer;
let turns = 0;
let winsComputer = 0;
let winsPlayer = 0;
let winCondition = 3;

do {
  // Computer "thinks" about his choice
  randomNum = Math.random()*3;
  randomNum = Math.round(randomNum + 0.5);

  if(randomNum == 1){symbolComputer = "Scissor"};
  if(randomNum == 2){symbolComputer = "Rock"};
  if(randomNum == 3){symbolComputer = "Paper"};

  // Player chooses
  actualPlayer = prompt("Pick your weapon!", "Scissor = 1, Rock = 2, Paper = 3");

  if(actualPlayer == 1){symbolPlayer = "Scissor"};
  if(actualPlayer == 2){symbolPlayer = "Rock"};
  if(actualPlayer == 3){symbolPlayer = "Paper"};

  // Check who won
  // If both have the same symbol it's a draw
  if(symbolComputer == symbolPlayer) {alert("Draw")}

  // Scissor beats paper, paper beats rock, rock beats scissor
  if(symbolComputer == "Scissor" && symbolPlayer == "Rock") {
    winsPlayer++;
    alert("You win! Computer chose SCISSOR");
  }

  if(symbolComputer == "Scissor" && symbolPlayer == "Paper") {
    winsComputer++;
    alert("You lose! Computer chose SCISSOR");
  }

  if(symbolComputer == "Rock" && symbolPlayer == "Paper") {
    winsPlayer++;
    alert("You win! Computer chose ROCK");
  }

  if(symbolComputer == "Rock" && symbolPlayer == "Scissor") {
    winsComputer++;
    alert("You lose! Computer chose ROCK");
  }

  if(symbolComputer == "Paper" && symbolPlayer == "Scissor") {
    winsPlayer++;
    alert("You win! Computer chose PAPER");
  }

  if(symbolComputer == "Paper" && symbolPlayer == "rock") {
    winsComputer++;
    alert("You lose! Computer chose PAPER");
  }

  // If someone wins 3 times the game is over
  turns++;
} while (winsPlayer < 3 && winsComputer < 3)

// Who won how often
if(winsPlayer === 3) {
  alert("You won the game!");
} else {
  alert("The computer won the game..");
}
alert("Your score: " + winsPlayer + "\nComputer score: " + winsComputer);