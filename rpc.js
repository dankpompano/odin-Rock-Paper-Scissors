let humanScore = 0;
let compScore = 0;

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
  // UI
  const container = document.createElement("div");
  const rockBtn = document.createElement("button");
  const scissorsBtn = document.createElement("button");
  const paperBtn = document.createElement("button");
  const results = document.createElement("div");
  const winner = document.createElement("p");

  rockBtn.textContent = "Rock";
  scissorsBtn.textContent = "Scissors";
  paperBtn.textContent = "Paper";
  winner.textContent = "";

  document.body.appendChild(container);
  container.appendChild(rockBtn);
  container.appendChild(scissorsBtn);
  container.appendChild(paperBtn);
  container.appendChild(results);
  container.appendChild(winner);

  rockBtn.addEventListener("click", () =>
    playRound("rock", getComputerChoice())
  );
  scissorsBtn.addEventListener("click", () =>
    playRound("scissors", getComputerChoice())
  );
  paperBtn.addEventListener("click", () =>
    playRound("paper", getComputerChoice())
  );

  function playRound(humanChoice, compChoice) {
    humanChoice = humanChoice.toLowerCase();
    let winner = "";
    let loser = "";

    if (humanChoice === "scissors" && compChoice === "paper") {
      winner = humanChoice;
      loser = compChoice;
      ++humanScore;
      results.innerText = "You Win! " + winner + " beats " + loser + ".";
    } else if (humanChoice === "rock" && compChoice === "scissors") {
      winner = humanChoice;
      loser = compChoice;
      ++humanScore;
      results.innerText = "You Win! " + winner + " beats " + loser + ".";
    } else if (humanChoice === "paper" && compChoice === "rock") {
      winner = humanChoice;
      loser = compChoice;
      ++humanScore;
      results.innerText = "You Win! " + winner + " beats " + loser + ".";
    } else {
      winner = compChoice;
      loser = humanChoice;
      ++compScore;
      results.innerText = "You lose! " + winner + " beats " + loser + ".";
    }
    results.innerText =
      "Player Score: " + humanScore + " Computer Score: " + compScore;

    announceWinner();
  }

  function announceWinner() {
    if (humanScore === 5) {
      winner.innerText = "The Player is the winner!";
      disableButtons();
    } else if (compScore === 5) {
      winner.innerText = "The Computer is the winner!";
      disableButtons();
    }
  }

  function disableButtons() {
    rockBtn.disabled = true;
    scissorsBtn.disabled = true;
    paperBtn.disabled = true;
  }
}

playGame();
