function getComputerChoice () { // Create a function that returns the computer's choice of rock, paper, or scissors

    let computerChoice = Math.random(); // Assign a numerical value for each possible move. Use (Math.random()) for this

    if (computerChoice < 0.34) { return("Rock");
        
    } else if (computerChoice > 0.34 && computerChoice < 0.67) { return("Paper");

    } else { return ("Scissors");

    }
}

function getHumanChoice () { // Create a function that returns the player's choice by using a prompt
    let humanChoice = prompt("What's your move?");

    if (humanChoice.toLowerCase() === "rock") { return("Rock"); // the .toLowerCase method was added so that any variation of the moves are valid, provided they're spelled correctly
        
    } else if (humanChoice.toLowerCase() === "paper") { return("Paper")
        
    } else if (humanChoice.toLowerCase() === "scissors") { return("Scissors") 

    }

}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) { return("Draw!")
        
    } else if () {
        
    }
}

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
