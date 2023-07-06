function getComputerChoice() {
    let randNumber = Math.floor(Math.random() * 3) + 1;
    switch (randNumber) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissor";
        default: return "INVALID";
    }
}
// console.log(getComputerChoice());
function game() {
    let botWins = 0;
    let playerWins = 0;
    let matchesDraw = 0;
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = prompt("Rock, Paper or Scissor?").toLowerCase();

        function playRound(playerSelection, computerSelection) {
            if (!(playerSelection === "rock" || "paper" || "scissor")) {
                return "Invalid answer! Your options are either 'rock', 'paper' or 'scissor'";
            }
            while (playerSelection === "rock") {
                if (computerSelection === "Rock") {
                    matchesDraw++;
                    return "Draw!";
                } else if (computerSelection === "Paper") {
                    botWins++;
                    return "You lose! Paper beats Rock.";
                } else if (computerSelection === "Scissor") {
                    playerWins++;
                    return "You win! Rock beats Scissor.";
                }
            }
            while (playerSelection === "paper") {
                if (computerSelection === "Paper") {
                    matchesDraw++;
                    return "Draw!";
                } else if (computerSelection === "Scissor") {
                    botWins++;
                    return "You lose! Scissor beats Paper.";
                } else if (computerSelection === "Rock") {
                    playerWins++;
                    return "You win! Paper beats Rock.";
                }
            }
            while (playerSelection === "scissor") {
                if (computerSelection === "Scissor") {
                    matchesDraw++;
                    return "Draw!";
                } else if (computerSelection === "Paper") {
                    playerWins++;
                    return "You win! Scissor beats Paper.";
                } else if (computerSelection === "Rock") {
                    botWins++;
                    return "You lose! Rock beats Scissor.";
                }
            }
        }
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player: ${playerWins}, Bot: ${botWins}, Draws: ${matchesDraw}`);
    }
    while (playerWins == botWins) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Rock, Paper or Scissor?").toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`Player: ${playerWins}, Bot: ${botWins}, Draws: ${matchesDraw}`);
    }
}
game();