function getComputerChoice () { // Create a function that returns the computer's choice of rock, paper, or scissors

    let computerChoice = Math.random(); // Assign a numerical value for each possible move. Use (Math.random()) for this

    if (computerChoice < 0.34) { return("Rock");
        
    } else if (computerChoice > 0.34 && computerChoice < 0.64) { return("Paper");

    } else { return ("Scissors");

    }
}

function getHumanChoice () {
    let humanChoice = prompt("What's your move?");

    if (humanChoice.toLowerCase() === "rock") { return("Rock");
        
    } else if (humanChoice.toLowerCase() === "paper") { return("Paper")
        
    } else if (humanChoice.toLowerCase() === "scissors") { return("Scissors") 

    }

}

