// Methods Learned
// parseint(), isNaN(),

// Game Function:
// - Player must guess a number between a min and max
// - Player gets a certain amount of guesses
// - Notify player of guesses remaining
// - Notify player of the correct answer if lose
// - Let player choose to play again

// Grab elements from DOM
const game = document.querySelector('#game');

const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');

const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');

const message = document.querySelector('.message');

// Game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// Assign UI min to max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guessBtn
// Notice how we turn guess from string using parseInt
guessBtn.addEventListener('click', function (e) {
    let guess = parseInt(guessInput.value);
    console.log(guess);

    // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min}
         and ${max}`, 'red');
    }

    // Check if won
    if(guess === winningNum) {
        // Disable input
        guessInput.disabled = true;
        // Change border color
        guessInput.style.borderColor = 'green';
        // Set message win
        setMessage(`${winningNum} is correct! You have won!`,
         'green');
    } else {
        
    }

    // Set message
    function setMessage(msg, color) {
        message.style.color = color;
        message.textContent = msg;
    }


});
