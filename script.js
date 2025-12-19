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
