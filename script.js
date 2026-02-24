const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice () { // Create a function that returns the computer's choice of rock, paper, or scissors

    let computerChoice = Math.random(); // Assign a numerical value for each possible move. Use Math.random() for this

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

function playGame (){
    function playRound (humanChoice, computerChoice) {
        if (humanChoice === computerChoice) { console.log("Draw!");
            
        } else if (humanChoice === "scissors" && computerChoice === "rock" ) { 
            console.log("Rock beats scissors! Computer wins!"); computerScore++; return(computerScore);  // computerScore++ increments the value of the variable by 1. Return sends it to the global scope so that it's value can be increased

        } else if (humanChoice === "scissors" && computerChoice === "paper" ) { 
            console.log("Scissors beats paper! Player wins!"); humanScore++; return(humanScore);  
            
        } else if (humanChoice === "rock" && computerChoice === "paper") { 
            console.log("Paper beats rock! Computer wins!"); computerScore++; return(computerScore);  
        
        } else if (humanChoice === "rock" && computerChoice === "scissors") { 
            console.log ("Rock beats scissors! Player wins!"); humanScore++; return(humanScore);
            
        } else if (humanChoice === "paper" && computerChoice === "scissors") { 
            console.log ("Scissors beats paper! Computer wins!"); computerScore++; return(computerScore); 

        } else if (humanChoice === "paper" && computerChoice === "rock") { 
            console.log("Paper beats rock! Player wins!");  humanScore++; return(humanScore);
        
        }   
    }

    let humanScore = 0;
    let computerScore = 0;    
    playRound(humanSelection, computerSelection);
}

playGame(1);
playGame(2);