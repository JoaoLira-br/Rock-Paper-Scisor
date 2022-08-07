let playerPoints = 0;
let computerPoints = 0;
let lastTie = false;
const winnerText = document.getElementById("winner-text");

//Randomly chooses a Rock, Paper or Scisor for the computer
function computerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  let computerChoice = "";
  switch (randomNum) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scisor";
      break;

    default:
      console.log(`RandomNum ${randomNum} is bugged`);
      break;
  }
  return computerChoice;
}
// plays a single round of the game and evaluates the winner
// restart the round if there is a tie
function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  if (playerChoice === computerSelection) {
    console.log(
      `You chose: ${playerChoice} \n Enemy chose: ${computerSelection} \n`
    );

    console.log(
      "%c Looks like we have a tie, let`s try again!",
      "color:yellow; font-weight:bold"
    );
    lastTie = true;
    console.log(
      `SCORE: \n YOU: ${playerPoints} Points \n ENEMY: ${computerPoints} Points\n`
    );
  } else if (playerChoice === "rock" && computerSelection === "paper") {
    console.log(
      `You chose: ${playerChoice} \n Enemy chose: ${computerSelection} \n`
    );

    console.log(
      " %c Round Lost: Paper beats Rock",
      "color:red; font-weight:bold"
    );
    computerPoints++;
    console.log(
      ` SCORE: \n YOU: ${playerPoints} Points \n ENEMY: ${computerPoints} Points\n`
    );
  } else if (playerChoice === "rock" && computerSelection === "scisor") {
    console.log(
      `You chose: ${playerChoice} \n Enemy chose: ${computerSelection} \n`
    );

    console.log(
      "%c Round Won: Rock beats Scisor",
      "color:rgb(82, 217, 248); font-weight:bold"
    );
    playerPoints++;
    console.log(
      `SCORE: \n YOU: ${playerPoints} Points \n ENEMY: ${computerPoints} Points\n`
    );
  } else if (playerChoice === "paper" && computerSelection === "rock") {
    console.log(
      `You chose: ${playerChoice} \n Enemy chose: ${computerSelection} \n`
    );

    console.log(
      "%c Round Won: Paper beats Rock",
      "color:rgb(82, 217, 248); font-weight:bold"
    );
    playerPoints++;
    console.log(
      `SCORE: \n YOU: ${playerPoints} Points \n ENEMY: ${computerPoints} Points\n`
    );
  } else if (playerChoice === "paper" && computerSelection === "scisor") {
    console.log(
      `You chose: ${playerChoice} \n Enemy chose: ${computerSelection} \n`
    );

    console.log(
      "%c Round Lost: Scisor beats Paper",
      "color:red; font-weight:bold"
    );
    computerPoints++;
    console.log(
      `SCORE: \n YOU: ${playerPoints} Points \n ENEMY: ${computerPoints} Points\n`
    );
  } else if (playerChoice === "scisor" && computerSelection === "rock") {
    console.log(
      `You chose: ${playerChoice} \n Enemy chose: ${computerSelection} \n`
    );

    console.log(
      "%c Round Lost: Rock beats Scisor",
      "color:red; font-weight:bold"
    );
    computerPoints++;
    console.log(
      `SCORE: \n YOU: ${playerPoints} Points \n ENEMY: ${computerPoints} Points\n`
    );
  } else if (playerChoice === "scisor" && computerSelection === "paper") {
    console.log(
      `You chose: ${playerChoice} \n Enemy chose: ${computerSelection} \n`
    );

    console.log(
      "%c Round Won: Scisor Beats Paper",
      "color:rgb(82, 217, 248); font-weight:bold"
    );
    playerPoints++;
    console.log(
      `SCORE: \n YOU: ${playerPoints} Points \n ENEMY: ${computerPoints} Points\n`
    );
  }
}
// TODO: adicionar variaveis de pontuacao, condicionais de pontuacao e finalizacao de jogo
//plays n rounds of the game
function game(rounds) {
  for (let i = 0; i < rounds; i++) {
    if (lastTie === true) {
      i--;
      lastTie = false;
    }
    let playerSelection = prompt("Rock, Paper or Scisor?");
    let computerSelection = computerChoice();

    playRound(playerSelection, computerSelection);
  }
  if (playerPoints > computerPoints) {
    console.log(
      `YOU HAVE WON!!!: \n PLAYER = ${playerPoints} points \n ENEMY = ${computerPoints} points`
    );
    winnerText.innerHTML = `PLAYER = ${playerPoints} points \n ENEMY = ${computerPoints} points`;
  } else {
    console.log(
      `YOU HAVE LOST: \n PLAYER = ${playerPoints} points \n ENEMY = ${computerPoints} points`
    );
    winnerText.innerHTML = `PLAYER = ${playerPoints} points \n ENEMY = ${computerPoints} points`;
  }
}

game(5);
//   function game(playerChoice, computerChoice){

//   };
