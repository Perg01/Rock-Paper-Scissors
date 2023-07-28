function getComputerChoice() {
    let randNumber = Math.floor(Math.random() * 3) + 1;
    switch (randNumber) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissor";
        default: return "INVALID";
    }
}

const rockbtn = document.querySelector('#rock');
const paperbtn = document.querySelector('#paper');
const scissorbtn = document.querySelector('#scissor');
const scoreboard = document.querySelector('.scoreboard');
const p = document.querySelector('.score');
const dialog = document.querySelector('.dialog');
const image = document.querySelector('.image');
const display = document.querySelector('.display');

let botWins = 0;
let playerWins = 0;
let matchesDraw = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "Rock") {
            matchesDraw++;
            p.textContent = "DRAW!";
            image.src = "./TextPro.me_164c2f1b44e39e.jpg";
            display.appendChild(image);
            scoreboard.appendChild(p);

        } else if (computerSelection === "Paper") {
            botWins++;
            p.textContent = "ROUND LOST! Paper beats Rock";
            image.src = "./RoundLost!.jpg";
            display.appendChild(image);
            scoreboard.appendChild(p);

        } else if (computerSelection === "Scissor") {
            playerWins++;
            p.textContent = "ROUND WON! Rock beats Scissor";
            image.src = "./RoundWon!.jpg";
            display.appendChild(image);
            scoreboard.appendChild(p);

        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "Paper") {
            matchesDraw++;
            p.textContent = "DRAW!";
            image.src = "./TextPro.me_164c2f1b44e39e.jpg";
            display.appendChild(image);
            scoreboard.appendChild(p);
        } else if (computerSelection === "Scissor") {
            botWins++;
            p.textContent = "ROUND LOST! Scissor beats Paper";
            image.src = "./RoundLost!.jpg";
            display.appendChild(image);
            scoreboard.appendChild(p);
        } else if (computerSelection === "Rock") {
            playerWins++;
            p.textContent = "ROUND WON! Paper beats Rock";
            image.src = "./RoundWon!.jpg";
            display.appendChild(image);
            scoreboard.appendChild(p);
        }
    }
    else if (playerSelection === "scissor") {
        if (computerSelection === "Scissor") {
            matchesDraw++;
            p.textContent = "DRAW!";
            image.src = "./TextPro.me_164c2f1b44e39e.jpg";
            display.appendChild(image);
            scoreboard.appendChild(p);
        } else if (computerSelection === "Paper") {
            playerWins++;
            p.textContent = "ROUND WON! Scissor beats Paper";
            image.src = "./RoundWon!.jpg";
            display.appendChild(image);
            scoreboard.appendChild(p);
        } else if (computerSelection === "Rock") {
            botWins++;
            p.textContent = "ROUND LOST! Rock beats Scissor";
            image.src = "./RoundLost!.jpg";
            display.appendChild(image);
            scoreboard.appendChild(p);
        }
    }
    dialog.textContent = `Player: ${playerWins} Bot: ${botWins} Draws: ${matchesDraw}`;
    scoreboard.appendChild(dialog);
    if (playerWins === 5) {
        image.src = "./winner.gif";
        dialog.textContent = 'Congrats! You Win';
        scoreboard.appendChild(dialog);
        scoreboard.appendChild(p);
        display.appendChild(image);
        playerWins = 0;
        botWins = 0;
        matchesDraw = 0;
    } else if (botWins === 5) {
        image.src = "./gameOver.gif";
        dialog.textContent = 'Game Over :c';
        scoreboard.appendChild(dialog);
        scoreboard.appendChild(p);
        playerWins = 0;
        botWins = 0;
        matchesDraw = 0;
    }
}

rockbtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
});
paperbtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
});
scissorbtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    const playerSelection = "scissor";
    playRound(playerSelection, computerSelection);
});






