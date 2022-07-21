let playerSelection = "";
let computerSelection = "";

let playerResult = 0;
let computerResult = 0;

let roundCounter = 0;

function computersChoice() {
  const randomizeChoice = Math.floor(Math.random() * 3);

  switch (randomizeChoice) {
    case 0:
      console.log("Computer: rock");
      computerSelection = "Computer: rock";
      break;
    case 1:
      console.log("Computer: scissors");
      computerSelection = "Computer: scissors";
      break;
    case 2:
      console.log("Computer: paper");
      computerSelection = "Computer: paper";
  }
}

function playGame() {
  console.log("Round", roundCounter + 1);

  playerSelection = prompt("Enter Rock, Paper or Scissors").toLowerCase();
  console.log("Player:", playerSelection);
  computersChoice();

  checkDetails(playerSelection, computerSelection);

  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerResult++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerResult++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerResult++;
  } else if (playerSelection === computerSelection) {
    playerResult = playerResult;
    computerResult = computerResult;
  } else {
    computerResult++;
  }

  if (playerResult > computerResult) {
    console.log("Player wins");
  } else if (playerResult === computerResult) {
    console.log("Tye");
  } else {
    console.log("Computer wins");
  }
}

function checkDetails(player, computer) {
  if (player === "rock" || player === "paper" || player === "scissors") {
    console.log("Correct entry");

    roundCounter++;

    if (roundCounter < 5){
      playGame();
    } else {
      console.log("Igra gotova");
    }
    // UVJET AKO JE MANJE OD 5 KOLA
    // UVJET KO JE POBJEDNIK

    // UVJET AKO JE VIŠE OD 5 KOLA DAJ POBJEDNIKA
  } else {
    console.log("Incorrect entry. Try again");
    playGame();
  }
}

console.log("Enter Rock, Paper or Scissors");
playGame();