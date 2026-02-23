function getComputerChoice () { // Create a function that returns the computer's choice of rock, paper, or scissors

    let computerChoice = Math.random(); // Assign a numerical value for each possible move. Use (Math.random()) for this

    if (computerChoice < 0.34) { return("rock");
        
    } else if (computerChoice > 0.34 && computerChoice < 0.67) { return("paper");

    } else { return ("scissors");

    }
}

function getHumanChoice () { // Create a function that returns the player's choice by using a prompt
    let humanChoice = prompt("What's your move?");

    if (humanChoice.toLowerCase() === "rock") { return("rock"); // the .toLowerCase method was added so that any variation of the moves are valid, provided they're spelled correctly
        
    } else if (humanChoice.toLowerCase() === "paper") { return("paper")
        
    } else if (humanChoice.toLowerCase() === "scissors") { return("scissors") 

    }

}
    function playRound (computerChoice, humanChoice) {
    if (humanChoice === computerChoice) { return("Draw!");
        
    } else if (humanChoice === "scissors" && computerChoice === "rock" ) { console.log("Computer wins!")

    } else if (humanChoice === "scissors" && computerChoice === "paper" ) { console.log("Player wins!")  
          
    } else if (humanChoice === "rock" && computerChoice === "paper") { console.log("Computer wins!") 
    
    } else if (humanChoice === "rock" && computerChoice === "scissors") { console.log ("Player wins!")
        
    } else if (humanChoice === "paper" && computerChoice === "scissors") { console.log ("Computer wins!")

    } else if (humanChoice === "paper" && computerChoice === "rock") {console.log("Computer wins!")
    
    }

    let humanScore = 0;
    let computerScore = 0;
   
    }