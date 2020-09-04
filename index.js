state = {
  options: ["Rock", "Paper", "Scissors"],
  player: "",
};

function randomChoice(options) {
  // state.options; // Math.random
  // Math.random(state.options)
  return state.options[Math.floor(Math.random() * state.options.length)];
}

function handleClick(index) {
  // state.options[index] = playerPick;
  console.log(state.options[index]);
  console.log(randomChoice());
  checkWinner();
}

function playerChoice() {
  playerStr = "";
  state.options.forEach(function (option, index) {
    playerStr += `
  <div onClick="handleClick(${index})">
  ${option}
  </div>
  `;
  });
  return playerStr;
}

function checkWinner(playerChoice, randomChoice) {
  let winner = null;
  if (playerChoice === "Rock") {
    if (randomChoice === "Paper") {
      winner = "computer";
    }
    if (randomChoice === "Scissors") {
      winner = "player";
    }
  } else if (playerChoice === "Paper") {
    if (randomChoice === "Scissors") {
      winner = "computer";
    }
    if (randomChoice === "Rock") {
      winner = "player";
    }
  } else if (playerChoice === "Scissors") {
    if (randomChoice === "Rock") {
      winner = "computer";
    }
    if (randomChoice === "Paper") {
      winner = "player";
    }
  }
  if (!winner) {
    winner = "tie";
  }
}

function render() {
  let htmlStr = `
  <div>
  <h1>Rock Paper Scissors</h1>
  </div>
  ${playerChoice()}


  `;
  // ${playerChoice()}

  document.getElementById("app").innerHTML = htmlStr;
}

render();
