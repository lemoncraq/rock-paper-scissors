const strokeOptions = ["rock", "paper", "scissors"];
function getComputerChoice(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function round(playerSelection, computerSelection) {
    let points = 0;
    if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        console.log(
            "your selection: " +
                playerSelection +
                " beat computer selection: " +
                computerSelection
        );
        points = 1;
    } else {
        console.log(
            "computer selection: " +
                computerSelection +
                " beat your selection: " +
                playerSelection
        );
    }
    return points;
}

function game() {
    let countRounds = 0;
    let totalRounds = 4;
    let playerScore = 0;
    for (countRounds; countRounds < totalRounds; countRounds++) {
        let playerSelection = window.prompt();
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice(strokeOptions);
        if (playerSelection == computerSelection) {
            console.log("the game is a draw");
            continue;
        }

        playerScore += round(playerSelection, computerSelection);
    }
    console.log(playerScore);
}

game();
