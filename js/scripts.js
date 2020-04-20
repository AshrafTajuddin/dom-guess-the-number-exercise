/////////////// store the data our program///////////////////////

/// assigned a random number between 1 and 10
let randomNumber = Math.floor(Math.random() * 10) + 1;

/// 3 consts are to store a reference to the results paragraphs in HTML
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

/// 2 consts store references to the form text input and submit button
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

/// 2 lets store a guess count of 1 and   to a reset button
let guessCount = 1;
let resetButton;

/// to check whether a player's guess is correct or not and respond to user
function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses:👉 ";
  }
  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! It's right! 😎";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
    // 3 attempts to try
  } else if (guessCount === 3) {
    lastResult.textContent = "░▒▓▆▅▃▂▁𝐆𝐀𝐌𝐄 𝐎𝐕𝐄𝐑▁▂▃▅▆▓▒░😩";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong! Try again please ! 🤔";
    lastResult.style.backgroundColor = "blue";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low! 🔽";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high! 🔼";
    }
  }
  guessCount++;
  guessField.value = "";
  guessField.focus();
}
guessSubmit.addEventListener("click", checkGuess);

/// set the game over so to prevent user from keep playing.
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}
/// Reset everything, so the user can play again.
function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = "";
  }
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "hotpink";
  lastResult.textContent = "Guess your number now! 😃";
  randomNumber = Math.floor(Math.random() * 10) + 1;
}
