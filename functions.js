
function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(computerSelection){
    playerSelection = String(prompt("Enter your choice: "))
    playerSelection = (playerSelection.toUpperCase()).substring(0,1) + (playerSelection.toLowerCase()).substring(1)
   
    var dict = { 
        "Rock":0,
        "Paper":1,
        "Scissors":2
    }
    const outputs = [`You Win! ${playerSelection} beats ${computerSelection}`, `You Lose! ${computerSelection} beats ${playerSelection}`, "Draw!"]
    const result = (dict[playerSelection]-dict[computerSelection]+2)%3
    if (result === 2) {
        console.log("Draw! Play Again!")
        return playRound(getComputerChoice())
    }
    return outputs[result]
}

function game(rounds=5){
    var score = [0,0]
    for (let i = 0; i < rounds; i++) {
        let result = String(playRound(getComputerChoice()))
        console.log(result)
        result.substring(4,5) == "W" ? score[0] = score[0]+1 : score[1] = score[1]+1
    }
    console.log(score[0] > score[1] ? `You won! Final score: ${score[0]} to ${score[1]}` : `You lost! Final score: ${score[1]} to ${score[0]}`)
}

game(5)