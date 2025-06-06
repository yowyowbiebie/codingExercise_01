const choices = ["rock","paper","scissors"]

function getComputerChoice(){
     return choices[Math.floor(Math.random()*choices.length)]
} 

function getHumanChoice(){
    return prompt("Please enter: rock, paper, or scissors").trim().toLowerCase();
    
}



function playGame(rounds){
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice){
  
    const winConditions = { 
        rock:"scissors",
        paper:"rock",
        scissors:"paper"
    };

    if (humanChoice === computerChoice){
        return `It's a tie! You both chose ${humanChoice}`;
    } else if (winConditions[humanChoice]=== computerChoice){
        humanScore = humanScore+1
        return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore = computerScore+1
        return `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    

}   
    for (let i = 0; i< rounds; i++){
        let humanChoose = getHumanChoice();
        let computerChoose = getComputerChoice();
        console.log(playRound(humanChoose,computerChoose));
        console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

    if (humanScore>computerScore){
        return console.log(`Human wins!\n` + `Final Score - Human: ${humanScore}, Computer: ${computerScore}`)
    } else if(computerScore > humanScore){
        return console.log(`Computer wins!\n` + `Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    } else{
        return console.log(`It's a tie!\n` + `Final Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }
    


}
 


