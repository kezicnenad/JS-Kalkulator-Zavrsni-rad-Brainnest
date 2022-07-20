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
}

function checkDetails(player, computer) {
  if (player === "rock" || player === "paper" || player === "scissors") {
    console.log("Correct entry");

    roundCounter++;

    // UVJET AKO JE MANJE OD 5 KOLA
    // UVJET KO JE POBJEDNIK

    // UVJET AKO JE VIŠE OD 5 KOLA DAJ POBJEDNIKA
    playGame();
  } else {
    console.log("Incorrect entry. Try again");
    playGame();
  }
}

console.log("Enter Rock, Paper or Scissors");
playGame();


// let playerSelection = prompt("Enter");
// let computerSelection;

// function computerPlay() {
//   let random = Math.floor(Math.random() * 3);
//   switch (random) {
//     case 0:
//       computerSelection = "Rock";
//       break;
//     case 1:
//       computerSelection = "Scissors";
//       break;
//     case 2:
//       computerSelection = "Paper";
//   }
// }

// computerPlay();

// function playGame(player, computer){
//   const playerSelectionToLowercase = player.toLowerCase();
//   const computerSelectionToLowercase = computer.toLowerCase();

//   if (
//     playerSelectionToLowercase === "rock" && computerSelectionToLowercase === "scissors"
//   ) {
//     alert("Player win");
//   } else if (
//     playerSelectionToLowercase === "scissors" && computerSelectionToLowercase === "paper"
//   ) {
//     alert("Player win");
//   } else if (
//     playerSelectionToLowercase === "paper" && computerSelectionToLowercase === "rock"
//   ) {
//     alert("Player win");
//   } else {
//     alert("Computer win");
//   }
// }

// for (let i = 0; i < 5; i++) {
//   playGame(playerSelection, computerSelection);
// }
