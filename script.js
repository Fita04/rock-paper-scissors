const buttons = document.querySelectorAll("button");

const resultContainer = document.querySelector(".results");

const results = document.createElement("ul");
resultContainer.appendChild(results);

let humanScore = 0; 
let computerScore = 0;  
let roundInstance = 0;

let humanSelection; 

let currentRoundResult;


let computerSelection = function () { 
    let computerChoice = Math.random(); 

    if (computerChoice <= 0.34) { return("rock");
        
    } else if (computerChoice > 0.34 && computerChoice <= 0.67) { return("paper");

    } else { return ("scissors");

    }
}


function checkRoundWinner (human, computer) { 
    let resultOfRound = document.createElement("li");

    if (human === computer) { console.log("Draw!");
        
    } else if (human === "scissors" && computer === "rock" ) { 
        console.log("Rock beats scissors! Computer wins!"); computerScore++; return(computerScore); 
    } else if (human === "scissors" && computer === "paper" ) { 
        console.log("Scissors beats paper! Player wins!"); humanScore++; return(humanScore);  
        
    } else if (human === "rock" && computer === "paper") { 
        console.log("Paper beats rock! Computer wins!"); computerScore++; return(computerScore);  
    
    } else if (human === "rock" && computer === "scissors") { 
        console.log ("Rock beats scissors! Player wins!"); humanScore++; return(humanScore);
        
    } else if (human === "paper" && computer === "scissors") { 
        console.log ("Scissors beats paper! Computer wins!"); computerScore++; return(computerScore); 

    } else if (human === "paper" && computer === "rock") { 
        console.log("Paper beats rock! Player wins!");  humanScore++; return(humanScore);
    
    }

}

function checkGameWinner () { 
    
    if (roundInstance === 5)
        {if (humanScore > computerScore) { console.log("Player wins the game!"); roundInstance = 0; humanScore = 0; computerScore = 0;
        
        } else if (computerScore > humanScore) { console.log("Computer wins!"); roundInstance = 0; humanScore = 0; computerScore = 0;
        
        } else { console.log("It's a draw!"); roundInstance = 0; humanScore = 0; computerScore = 0;
        
        }
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {;

        roundInstance++;

        humanSelection = button.value;
        let currentCompSelection = computerSelection();

        console.log(button.value);
        console.log(currentCompSelection);
       
        checkRoundWinner(humanSelection, currentCompSelection);

        console.log(roundInstance)

        checkGameWinner();


        return roundInstance;
    });
});