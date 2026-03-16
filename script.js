const buttons = document.querySelectorAll("button");

let humanSelection; 

buttons.forEach((button) => {
    button.addEventListener("click", () => {;
        humanSelection = button.value;
        console.log(button.value);
    });
});

let computerSelection = function () { 
    let computerChoice = Math.random(); 

    if (computerChoice < 0.34) { return("rock");
        
    } else if (computerChoice > 0.34 && computerChoice < 0.67) { return("paper");

    } else { return ("scissors");

    }
}

let humanScore = 0; 
let computerScore = 0;  

function playRound (humanChoice, computerChoice) { 
    if (humanChoice === computerChoice) { console.log("Draw!");
        
    } else if (humanChoice === "scissors" && computerChoice === "rock" ) { 
        console.log("Rock beats scissors! Computer wins!"); computerScore++; return(computerScore); 
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

function playGame (){   
    if (humanScore>computerScore) { console.log("Player wins!")  
        
    } else if (humanScore === computerScore) { console.log("It's a draw!")
        
    }
    
    else { console.log("Computer wins!")
        
    }
}