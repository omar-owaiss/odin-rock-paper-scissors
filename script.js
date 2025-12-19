let humanScore = 0
let computerScore = 0

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


function getHumanChoice() {
    let humanChoice = prompt("pick rock paper or scissors! ")
    if (humanChoice === "rock") {
        return "rock"
    }
    else if (humanChoice === "paper") {
        return "paper"
    }
    else  {
        return "scissors"
    }
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats scissors") 
        humanScore++
    }

    else if (humanChoice.toLowerCase() === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock") 
        humanScore++
    }

    else if (humanChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper") 
        humanScore++
    }

    else if (humanChoice.toLowerCase() === computerChoice) {
        console.log("It's a draw! Try again")
    }

    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        computerScore++
    }
}
