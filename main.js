const strokeOptions = ["rock", "paper", "scissors"];

const buttons = document.querySelectorAll(".buttons > button");
const resultLabel = document.querySelector(".result");

let playerSelection = "";
let playerPoint = 0;
let computerPoint = 0;

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        playerSelection = strokeOptions[index];
        if (playerPoint != 5 && computerPoint != 5)
            round(playerSelection, getComputerChoice(strokeOptions));
    });
});

function getComputerChoice(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function round(playerSelection, computerSelection) {
    if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        playerPoint += 1;
        resultLabel.textContent =
            "Your selection " +
            playerSelection +
            " beat computer selection " +
            computerSelection;
        console.log("playerPoint", playerPoint);
    } else if (playerSelection == computerSelection) {
        resultLabel.textContent = "Draw";
    } else {
        computerPoint += 1;
        resultLabel.textContent =
            "Computer selection " +
            computerSelection +
            " beat your selection " +
            playerSelection;
        console.log("computerPoint", computerPoint);
    }
    if (playerPoint == 5) {
        resultLabel.textContent = "YOU WIN";
    } else if (computerPoint == 5) {
        resultLabel.textContent = "COMPUTER WIN";
    }
}
