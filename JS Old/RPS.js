const choices = ["rock", "paper", "scissor"];

const playerDisplay = document.getElementById("Playergi"); // Element for player's choice
const computerDisplay = document.getElementById("Scriptgi"); // Element for computer's choice
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resultDisplay = document.getElementById("resultDisplay");

let playerScore = 0;
let computerScore = 0;

function startGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
    } else {
        switch (playerChoice) {
            case "paper":
                result = computerChoice === "rock" ? "You Win! 🎉" : "You Lose! 😢";
                break;

            case "scissor":
                result = computerChoice === "paper" ? "You Win! 🎉" : "You Lose! 😢";
                break;

            case "rock":
                result = computerChoice === "scissor" ? "You Win! 🎉" : "You Lose! 😢";
                break;
        }
    }

    // Update player's and bot's choices
    playerDisplay.textContent = `Your Choice: ${playerChoice}`;
    computerDisplay.textContent = `Bot's Choice: ${computerChoice}`;

    // Display result
    resultDisplay.textContent = result;
    resultDisplay.style.visibility = "visible";

    // Update scores based on result
    if (result === "You Win! 🎉") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (result === "You Lose! 😢") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}

const choices = ["rock", "paper", "scissor"];

const playerDisplay = document.getElementById("Playergi"); // Element for player's choice
const computerDisplay = document.getElementById("Scriptgi"); // Element for computer's choice
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const resultDisplay = document.getElementById("resultDisplay");

let playerScore = 0;
let computerScore = 0;

function startGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
    } else {
        switch (playerChoice) {
            case "paper":
                result = computerChoice === "rock" ? "You Win! 🎉" : "You Lose! 😢";
                break;

            case "scissor":
                result = computerChoice === "paper" ? "You Win! 🎉" : "You Lose! 😢";
                break;

            case "rock":
                result = computerChoice === "scissor" ? "You Win! 🎉" : "You Lose! 😢";
                break;
        }
    }

    // Update player's and bot's choices
    playerDisplay.textContent = `Your Choice: ${playerChoice}`;
    computerDisplay.textContent = `Bot's Choice: ${computerChoice}`;

    // Display result
    resultDisplay.textContent = result;
    resultDisplay.style.visibility = "visible";

    // Update scores based on result
    if (result === "You Win! 🎉") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (result === "You Lose! 😢") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}
