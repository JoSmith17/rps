var choices = ["rock", "paper", "scissors"];

function computerMove() {
  var decision = choices[Math.floor(Math.random() * choices.length)];
  return decision;
}

function calculateWinner(userMove, aiMove) {
  if (userMove === "rock" && aiMove === "paper") {
    return "Computer";
  }
  else if (userMove === "rock" && aiMove === "scissors") {
    return "You";
  }
  else if (userMove === "rock" && aiMove === "rock") {
    return "Draw";
  } 
  else if (userMove === "paper" && aiMove === "scissors") {
    return "Computer";
  }
  else if (userMove === "paper" && aiMove === "rock") {
    return "You";
  }
  else if (userMove === "paper" && aiMove === "paper") {
    return "Draw";
  }
  else if (userMove === "scissors" && aiMove === "rock") {
    return "Computer";
  }
  else if (userMove === "scissors" && aiMove === "paper") {
    return "You";
  }
  else if (userMove === "scissors" && aiMove === "scissors") {
    return "Draw";
  }
  else {
    return "None!!! Invalid input! Please try again!";
  }
}

module.exports = {
  computerMove,
  calculateWinner
}