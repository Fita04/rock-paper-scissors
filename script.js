const buttons = document.querySelectorAll("button");

const resultContainer = document.querySelector(".results");

const results = document.createElement("ul");
resultContainer.appendChild(results);

let humanScore = 0; 
let computerScore = 0;  

let humanSelection; 


let computerSelection = function () { 
    let computerChoice = Math.random(); 

    if (computerChoice < 0.34) { return("rock");
        
    } else if (computerChoice > 0.34 && computerChoice < 0.67) { return("paper");

    } else { return ("scissors");

    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {;
        humanSelection = button.value;
        computerSelection();
        console.log(button.value);
        console.log(computerSelection());
        console.log(playRound(humanSelection, computerSelection));
    });
});

function playRound (humanSelection, computerSelection) { 
    let resultOfRound = document.createElement("li");

    if (humanSelection === computerSelection) { console.log("Draw!");
        
    } else if (humanSelection === "scissors" && computerSelection === "rock" ) { 
        console.log("Rock beats scissors! Computer wins!"); computerScore++; return(computerScore); 
    } else if (humanSelection === "scissors" && computerSelection === "paper" ) { 
        console.log("Scissors beats paper! Player wins!"); humanScore++; return(humanScore);  
        
    } else if (humanSelection === "rock" && computerSelection === "paper") { 
        console.log("Paper beats rock! Computer wins!"); computerScore++; return(computerScore);  
    
    } else if (humanSelection === "rock" && computerSelection === "scissors") { 
        console.log ("Rock beats scissors! Player wins!"); humanScore++; return(humanScore);
        
    } else if (humanSelection === "paper" && computerSelection === "scissors") { 
        console.log ("Scissors beats paper! Computer wins!"); computerScore++; return(computerScore); 

    } else if (humanSelection === "paper" && computerSelection === "rock") { 
        console.log("Paper beats rock! Player wins!");  humanScore++; return(humanScore);
    
    }   
}

function playGame (){   


    let roundInstance = 0;
   
    do { playRound();
        
    } while (roundInstance < 5);

    roundInstance++; 

    if (roundInstance > 5 && humanScore>computerScore) { console.log("Player wins!");  
        
    } else if ( roundInstance > 5 && humanScore === computerScore) { console.log("It's a draw!");
        
    }
    
    else if (roundInstance > 5 && computerScore>humanScore) { console.log("Computer wins!");
        
    }
}