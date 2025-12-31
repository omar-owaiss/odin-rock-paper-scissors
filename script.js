let humanScore = 0
let computerScore = 0

let roundMessage = document.querySelector(".message")
let totalScore = document.querySelector(".score")
let winnerMessage = document.querySelector(".winner")
let display = document.querySelector(".display")
const btnReset = document.createElement("button")


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
        roundMessage.textContent= "You win! Paper beats Rock"
        humanScore++
    }

    else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        roundMessage.textContent= "You win! Scissors beats Paper"
        humanScore++
    }

    else if (humanChoice.toLowerCase() === computerChoice) {
        roundMessage.textContent= "It's a draw! Try again"
    }

    else {
        roundMessage.textContent= `You lose! ${computerChoice} beats ${humanChoice}`
        computerScore++
    }
    totalScore.textContent= `Your score: ${humanScore} \n Computer score: ${computerScore}`
    if (humanScore === 5) {
        winnerMessage.textContent = "Congratulations! You won!"
        btnReset.textContent = "Reset"
        display.appendChild(btnReset)
        btnReset.addEventListener("click", () => {
            computerScore = 0
            humanScore = 0
            roundMessage.textContent = ""
            totalScore.textContent = ""
            winnerMessage.textContent = ""
            display.removeChild(btnReset)
        })
    }
    else if (computerScore === 5) {
        winnerMessage.textContent = "Bummer! You lost."
        btnReset.textContent = "Reset"
        display.appendChild(btnReset)
        btnReset.addEventListener("click", () => {
            computerScore = 0
            humanScore = 0
            roundMessage.textContent = ""
            totalScore.textContent = ""
            winnerMessage.textContent = ""
            display.removeChild(btnReset)
        })
    }
    

}

const btnRock = document.querySelector(".rock")
const btnPaper = document.querySelector(".paper")
const btnScissors = document.querySelector(".scissors")

btnRock.addEventListener("click", () => {playRound("rock")})
btnPaper.addEventListener("click", () => {playRound ("paper")})
btnScissors.addEventListener("click", () => {playRound("scissors")})
