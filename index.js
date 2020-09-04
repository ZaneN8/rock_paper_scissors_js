state = {
  options: ["Rock", "Paper", "Scissors"],
  playerPick: "",
  computerPick: "",
  whoWon: "",
};

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

// function randomChoice(options) {
//   return state.options[Math.floor(Math.random() * state.options.length)];
// }

function handleClick(index) {
  state.computerPick =
    state.options[Math.floor(Math.random() * state.options.length)];
  state.playerPick = state.options[index];

  console.log(state.playerPick); // HERE
  console.log(state.computerPick); // HERE

  checkWinner(state.playerPick, state.computerPick);
  console.log(checkWinner(state.playerPick, state.computerPick));
}

function checkWinner(playerPick, computerPick) {
  let winner = null;
  if (playerPick === "Rock") {
    if (computerPick === "Paper") {
      winner = "computer";
    }
    if (computerPick === "Scissors") {
      winner = "player";
    }
  } else if (playerPick === "Paper") {
    if (computerPick === "Scissors") {
      winner = "computer";
    }
    if (computerPick === "Rock") {
      winner = "player";
    }
  } else if (playerPick === "Scissors") {
    if (computerPick === "Rock") {
      winner = "computer";
    }
    if (computerPick === "Paper") {
      winner = "player";
    }
  }
  if (!winner) {
    winner = "tie";
  }
  return winner;
}

function render() {
  let htmlStr = `
  <div>
  <h1>Rock Paper Scissors</h1>
  </div>
  ${playerChoice()}
  ${checkWinner()}
  `;

  document.getElementById("app").innerHTML = htmlStr;
}

render();
