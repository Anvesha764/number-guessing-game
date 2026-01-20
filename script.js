let randomNumber;
let maxNumber;
let attempts = 0;

// Start game
function startGame() {
  const maxInput = document.getElementById("maxInput");
  maxNumber = Number(maxInput.value);

  if (!maxNumber || maxNumber <= 0) {
    alert("Please enter a valid maximum number");
    return;
  }

  randomNumber = Math.floor(Math.random() * maxNumber) + 1;
  attempts = 0;

  document.getElementById("setup").classList.add("hidden");
  document.getElementById("game").classList.remove("hidden");

  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "Attempts: 0";
  document.getElementById("rangeText").textContent =
    `Guess a number between 1 and ${maxNumber}`;

  document.getElementById("guessInput").disabled = false;
  document.getElementById("guessInput").focus();
}

// Check guess
function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guess = Number(guessInput.value);
  const message = document.getElementById("message");

  if (!guess || guess < 1 || guess > maxNumber) {
    message.textContent = `❌ Enter a number between 1 and ${maxNumber}`;
    guessInput.value = "";
    return;
  }

  attempts++;
  document.getElementById("attempts").textContent =
    `Attempts: ${attempts}`;

  if (guess === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}`;
    guessInput.disabled = true;
    document.getElementById("playAgainBtn").classList.remove("hidden");
  } else if (guess > randomNumber) {
    message.textContent = "📉 Too big! Try again.";
  } else {
    message.textContent = "📈 Too small! Try again.";
  }

  // clear input after every guess
  guessInput.value = "";
}

// Play again
function playAgain() {
  document.getElementById("setup").classList.remove("hidden");
  document.getElementById("game").classList.add("hidden");

  document.getElementById("maxInput").value = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("message").textContent = "";
  document.getElementById("rangeText").textContent =
    "Choose a max number to start";

  document.getElementById("playAgainBtn").classList.add("hidden");
}

// Enter key support
document.getElementById("maxInput").addEventListener("keydown", e => {
  if (e.key === "Enter") startGame();
});

document.getElementById("guessInput").addEventListener("keydown", e => {
  if (e.key === "Enter") checkGuess();
});
