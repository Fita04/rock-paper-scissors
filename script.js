const buttons = document.querySelectorAll("button");

const resultContainer = document.querySelector(".results");

const results = document.createElement("ul");
resultContainer.appendChild(results);

let humanScore = 0; 
let computerScore = 0;  
let roundInstance = 0;

let humanSelection; 

let currentRoundResult = document.createElement("li");
results.appendChild(currentRoundResult);

let roundText = document.createElement("span");
roundText.textContent = "";
currentRoundResult.appendChild(roundText);

let gameResult = document.createElement("li");
gameResult.textContent = "";
currentRoundResult.appendChild(gameResult);


let computerSelection = function () { 
    let computerChoice = Math.random(); 

    if (computerChoice <= 0.34) { return("rock");
        
    } else if (computerChoice > 0.34 && computerChoice <= 0.67) { return("paper");

    } else { return ("scissors");

    }
}


function checkRoundWinner (human, computer) { 
    let resultOfRound = document.createElement("li");

    if (human === computer) { roundText.textContent = `Draw! Player: ${humanScore} Computer: ${computerScore}`;
        
    } else if (human === "scissors" && computer === "rock" ) { 
        computerScore++; roundText.textContent = `Rock beats scissors, computer wins! Player: ${humanScore} Computer: ${computerScore}`; return(computerScore); 
    } else if (human === "scissors" && computer === "paper" ) { 
        humanScore++; roundText.textContent = `Scissors beats paper, player wins! Player: ${humanScore} Computer: ${computerScore}`; return(humanScore);  
        
    } else if (human === "rock" && computer === "paper") { 
        computerScore++; roundText.textContent = `Paper beats rock, computer wins! Player: ${humanScore} Computer: ${computerScore}`; return(computerScore);  
    
    } else if (human === "rock" && computer === "scissors") { 
        humanScore++; roundText.textContent = `Rock beats scissors, player wins! Player: ${humanScore} Computer: ${computerScore}`; return(humanScore);
        
    } else if (human === "paper" && computer === "scissors") { 
        computerScore++; roundText.textContent = `Scissors beats paper, computer wins! Player: ${humanScore} Computer: ${computerScore}`; return(computerScore); 

    } else if (human === "paper" && computer === "rock") { 
        humanScore++; roundText.textContent = `Paper beats rock, player wins! Player: ${humanScore} Computer: ${computerScore}`; return(humanScore);
    
    }

}

function checkGameWinner () { 
    
    if (roundInstance === 5)
        {if (humanScore > computerScore) {roundInstance = 0; humanScore = 0; computerScore = 0; gameResult.textContent = "Player wins the game!"
        
        } else if (computerScore > humanScore) { roundInstance = 0; humanScore = 0; computerScore = 0; gameResult.textContent = "Computer wins the game!"
        
        } else { roundInstance = 0; humanScore = 0; computerScore = 0; gameResult.textContent = "It's a draw!"
        
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