// function that gets the computer's choice for a particular round
function getComputerChoice() 
{
  let num = Math.floor(Math.random() * 3);
  if (num === 0) 
  {
    return "rock"
  } 
  else if (num === 1) 
  {
    return "paper";
  } 
  else
  {
    return "scissors";
  }
}

// function that gets the user's choice for a particular round
function getHumanChoice() 
{
  let choice = prompt("Enter your choice (rock, paper, or scissors):");
  return choice.toLowerCase();
}


function playGame() 
{
  // Score tracker for the game
  let humanScore = 0;
  let computerScore = 0;

  // function that sees who won the round while updated the score tracker
  function playRound(humanChoice, computerChoice) 
  {
    if (humanChoice === 'rock' && computerChoice == 'scissors') 
    {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else if (humanChoice === 'paper' && computerChoice == 'rock') 
    {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else if (humanChoice ==='scissors' && computerChoice == 'paper') 
    {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else if (humanChoice === computerChoice)
    {
      console.log("It's a tie!");
      playRound(getHumanChoice(), getComputerChoice());
    }
    else 
    {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  // Plays on repeat until 5 games are played (where someone wins)
  while (humanScore + computerScore < 5) 
  {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  // 
  if (humanScore > computerScore)
  {
    console.log("Congratulations! You won the game!");
  }
  else 
  {
    console.log("Sorry! You lost the game!");
  }
}


playGame();