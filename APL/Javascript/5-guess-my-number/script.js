messageSelector = document.querySelector(".message");
scoreSelector = document.querySelector(".score");
numberSelector = document.querySelector(".number");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(typeof guess, guess);
    //When there is no input
    if (!guess) {
        messageSelector.textContent = "🚫 Please enter a number!";
    }
    //When client guesses the right number
    else if (guess === secretNumber) {
        messageSelector.textContent = "🥂 Congratulaitons, +1 point!";
        score++;
        scoreSelector.textContent = score;
        numberSelector.textContent = secretNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        numberSelector.style.width = "30rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    }
    //When client has score below 1 
    else if (score == 1) {
        messageSelector.textContent = "☠ You lost the game!";
        score = 0;
        scoreSelector.textContent = score;
    }
    //When client has too high score
    else if (guess > secretNumber) {
        messageSelector.textContent = "📈 Too high, -1 point!";
        score--;
        scoreSelector.textContent = score;
    }
    //When client has too low score
    else if (guess < secretNumber) {
        messageSelector.textContent = "📉 Too low, -1 point!";
        score--;
        scoreSelector.textContent = score;
    }
});


///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/

playAgainSelector = document.querySelector(".again");

playAgainSelector.addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    messageSelector.textContent = "Start guessing...";
    scoreSelector.textContent = score;
    numberSelector.textContent = "?";
    document.querySelector(".guess").value = "";

    //Setting up style.css to starting value before javscript
    document.querySelector("body").style.backgroundColor = "#222";
    numberSelector.style.width = "15rem";
});


