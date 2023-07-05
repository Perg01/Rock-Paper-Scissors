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
function playRound(playerSelection, computerSelection) {
    if (!(playerSelection === "rock" || "paper" || "scissor")) {
        return "Invalid answer! Your options are either 'rock', 'paper' or 'scissor'";
    }
    while (playerSelection === "rock") {
        if (computerSelection === "Rock") {
            return "Draw!";
        } else if (computerSelection === "Paper") {
            return "You lose! Paper beats rock.";
        } else if (computerSelection === "Scissor") {
            return "You win! Rock beats Scissor.";
        }
    }

}
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));