let humanScore = 0
let computerScore = 0

let scoreMessage = document.querySelector(".message")

function getComputerChoice() {
    let computerChoice = Math.random()
    if (computerChoice <= 0.3) {
        return "rock"
    }
    else if (computerChoice >= 0.6) {
        return "paper"
    }
    else {
        return "scissors"
    }
}


// function getHumanChoice() {
//     let humanChoice = prompt("pick rock paper or scissors! ")
//     if (humanChoice === "rock") {
//         return "rock"
//     }
//     else if (humanChoice === "paper") {
//         return "paper"
//     }
//     else  {
//         return "scissors"
//     }
// }


function playRound(humanChoice) {
    computerChoice = getComputerChoice()
    if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
        scoreMessage.textContent= "You win! Rock beats scissors" 
        humanScore++
    }

    else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        scoreMessage.textContent= "You win! Paper beats Rock"
        humanScore++
    }

    else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        scoreMessage.textContent= "You win! Scissors beats Paper"
        humanScore++
    }

    else if (humanChoice.toLowerCase() === computerChoice) {
        scoreMessage.textContent= "It's a draw! Try again"
    }

    else {
        scoreMessage.textContent= `You lose! ${computerChoice} beats ${humanChoice}`
        computerScore++
    }
}

const btnRock = document.querySelector(".rock")
const btnPaper = document.querySelector(".paper")
const btnScissors = document.querySelector(".scissors")

btnRock.addEventListener("click", () => {playRound("rock")})
btnPaper.addEventListener("click", () => {playRound ("paper")})
btnScissors.addEventListener("click", () => {playRound("scissors")})
