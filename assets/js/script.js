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
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// Assign UI min to max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
// Mousedown is to be used over click event, click event
// reloads page when not wanted, where mousedown allows 
// the functionality that we are looking for
game.addEventListener('mousedown', function(e) {
    // if we target the submit once it turns into play-again
    if(e.target.className === 'play-again') {
        // reload the page
        window.location.reload();

      
    }
});

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
        // Game Over: Won

        gameOver(true, `${winningNum} is correct! You WIN!`)
    } else {
        // Wrong Number
        guessesLeft -= 1;
        if(guessesLeft === 0) {
           
            // Game Over: Lost
         gameOver(false, `${guess} is wrong, You have lost.
         The correct number was ${winningNum}.`)

        } else {
            // Game continues - answer wrong

            // Change border color
            guessInput.style.borderColor = 'red';

            // Clear Input
            guessInput.value = '';

            // Tell user it's the wrong number
            setMessage(`${guess} is not correct.
             ${guessesLeft} guesses left`, 'red');
        }
    };
});

    // Game over
    function gameOver(won, msg) {
        let color;
        // Turnary operator / if/ else statement
        won === true ? color = 'green' : 'red';
    

        // Disable input
        guessInput.disabled = true;
        // Change border color
        guessInput.style.borderColor = color;
        // Change text color
        message.style.color = color;
        // Set message win
        setMessage(msg);
    

    // Play Again
    guessBtn.value = 'Play Again';
        guessBtn.className += 'play-again';
        console.log(guessBtn);
    };
    

    // Get Winning Number
    function getRandomNum(min, max) {
        // Notice the formula used for the Math.random, this 
        // helps get us a whole number (without decimal) between
        // our min and max values, regardless of what they are.
        return Math.floor(Math.random() * (max - min + 1) + min);
        
    };

    // Set message
    function setMessage(msg, color) {
        message.style.color = color;
        message.textContent = msg;
    };





