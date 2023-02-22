
let choices = ["paper", "rock", "scissor"];

// comp random choice
function getComputerChoice() {
    let randomChoice = choices[Math.floor(Math.random()* choices.length)];

    return randomChoice;
}

//single round
function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    console.log(computerSelection)
    playerSelection = prompt("Choose: Paper Rock Scissor").toLowerCase();
    //outcome

    if(computerSelection === playerSelection) {
        return("TIE!");
    }else if(computerSelection === "rock" && playerSelection === "scissor"){
        return("comp won!");
    }else if(computerSelection === "paper" && playerSelection === "rock")
    {
        return("comp won!");
    } else if(computerSelection === "scissor" && playerSelection === "paper") {
        return("comp won!");
    }else if(playerSelection === "rock" && computerSelection === "scissor") {
        return("You won!");
    }else if(playerSelection === "paper" && computerSelection === "rock") {
        return("You won!");
    }else if(playerSelection === "scissor" && computerSelection === "paper") {
        return("You won!");
    }else {
        return("ERROR");
    }
}

// game begins
function game() {
    
    for(let i = 0; i < 5; i++) {
        console.log(playRound())
    }
}

game()