// Create a function that returns the computer's choice of rock, paper, or scissors
function getComputerChoice () {

    let computerChoice = Math.random() // Assign a numerical value for each possible move. Use Math.floor(Math.random()) for this

    if (computerChoice < 0.34) { return("Rock")
        
    } else if (computerChoice > 0.34 && computerChoice < 0.64) { return("Paper")
        
    } else {return ("Scissors")

    }
}

