function getComputerChoice() {
  const values = ["rock", "paper", "scissors"];

  return values[Math.floor(values.length * Math.random())];
}

function getHumanChoice() {
  let prompt = window.prompt("Enter your choice: ");

  if (prompt === "rock") return prompt;
  else if (prompt === "scissors") return prompt;
  else if (prompt === "paper") return prompt;
}

function playGame() {
  let humanScore = 0;
  let compScore = 0;

  let playRound = function playRound(humanChoice, compChoice) {
    humanChoice = humanChoice.toLowerCase();
    let winner = "";
    let loser = "";

    if (humanChoice === "scissors" && compChoice === "paper") {
      winner = humanChoice;
      loser = compChoice;
      ++humanScore;
      console.log("You Win! " + winner + " beats " + loser + ".");
    } else if (humanChoice === "rock" && compChoice === "scissors") {
      winner = humanChoice;
      loser = compChoice;
      ++humanScore;
      console.log("You Win! " + winner + " beats " + loser + ".");
    } else if (humanChoice === "paper" && compChoice === "rock") {
      winner = humanChoice;
      loser = compChoice;
      ++humanScore;
      console.log("You Win! " + winner + " beats " + loser + ".");
    } else {
      winner = compChoice;
      loser = humanChoice;
      ++compScore;
      console.log("You lose! " + winner + " beats " + loser + ".");
    }
    console.log("Player Score: " + humanScore + "Computer Score: " + compScore);
  };

  for (let i = 0; i < 5; ++i) {
    const humanSelection = getHumanChoice();
    const compSelection = getComputerChoice();
    playRound(humanSelection, compSelection);
  }
}

playGame();
