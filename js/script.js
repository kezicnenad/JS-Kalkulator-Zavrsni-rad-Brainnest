let playerSelection = prompt("Enter");
let computerSelection;

function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  switch (random) {
    case 0:
      computerSelection = "Rock";
      break;
    case 1:
      computerSelection = "Scissors";
      break;
    case 2:
      computerSelection = "Paper";
  }
}

computerPlay();

function playGame(player, computer){
  const playerSelectionToLowercase = player.toLowerCase();
  const computerSelectionToLowercase = computer.toLowerCase();

  if (
    playerSelectionToLowercase === "rock" && computerSelectionToLowercase === "scissors"
  ) {
    alert("Player win");
  } else if (
    playerSelectionToLowercase === "scissors" && computerSelectionToLowercase === "paper"
  ) {
    alert("Player win");
  } else if (
    playerSelectionToLowercase === "paper" && computerSelectionToLowercase === "rock"
  ) {
    alert("Player win");
  } else {
    alert("Computer win");
  }
}

for (let i = 0; i < 5; i++) {
  playGame(playerSelection, computerSelection);
}