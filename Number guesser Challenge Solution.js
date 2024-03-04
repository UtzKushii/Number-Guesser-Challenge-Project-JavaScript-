let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const compareGuesses = (userGuess, computerGuess, secretTarget) => 
{
  const userDifference = Math.abs(secretTarget - userGuess);
  const computerDifference = Math.abs(secretTarget - computerGuess);
  if (userDifference <= computerDifference) 
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

//This will update the score every time a player wins.
const updateScore = winner => 
{
  if (winner === 'human') 
  {
    humanScore++;
  } 
  else 
  {
    computerScore++;
  }
}

advanceRound = () => 
{
  currentRoundNumber++;
}
