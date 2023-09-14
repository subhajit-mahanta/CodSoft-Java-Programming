const buttons = document.querySelectorAll('.buttons button');
const resultDiv = document.getElementById('result');
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');

const userScoreEmoji = document.createElement('span');
userScoreEmoji.innerHTML = ' 🏆';
userScoreSpan.appendChild(userScoreEmoji);

const computerScoreEmoji = document.createElement('span');
computerScoreEmoji.innerHTML = ' 🤖';
computerScoreSpan.appendChild(computerScoreEmoji);

const historyList = document.getElementById('history-list');

let userScore = 0;
let computerScore = 0;
const gameHistory = [];

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);

        resultDiv.innerHTML = roundResult;
        updateScores();
        updateTiming(roundResult);
    });
});

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
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
        return `${playerSelection} beats ${computerSelection}. You win!`;
    } else {
        computerScore++;
        return `${computerSelection} beats ${playerSelection}. Computer wins!`;
    }
}

function updateScores() {
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
}

function updateTiming(result) {
    const timestamp = new Date().toLocaleTimeString();
    gameHistory.push(`${result} (${timestamp})`);
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    historyList.innerHTML = '';
    gameHistory.forEach((entry) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = entry;
        historyList.appendChild(listItem);
    });
}
