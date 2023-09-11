const buttons = document.querySelectorAll('.buttons button');
const resultDiv = document.getElementById('result');
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');

let userScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
        resultDiv.textContent = roundResult;
    });
});

function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        userScore++;
        userScoreSpan.textContent = userScore;
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}
