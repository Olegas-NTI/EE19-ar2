'use strict';

// Selecting elements
const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
// Players
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");
const diceElement = document.querySelector(".dice");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, playing;

// Initalization code
const init = function () {
    document.querySelector(`#current--0`).textContent = 0;
    document.querySelector(`#current--1`).textContent = 0;
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    score0Element.textContent = 0;
    score1Element.textContent = 0;
    player0Element.classList.remove("player--winner");
    player1Element.classList.remove("player--winner");
    player0Element.classList.add("player--active");
    player1Element.classList.remove("player--active");
    diceElement.classList.add("hidden");
};
//Running the function
init();

// Switch player function
const switchPlayer = function () {
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle("player--active");
    player1Element.classList.toggle("player--active");
};

// Rolling dice functionality
rollBtn.addEventListener("click", function () {
    if (playing) {
        // 1. Randomize a dice so number 1-6 
        const randomizedNumber = Math.trunc(Math.random() * 6) + 1;
        // 2. Display dice
        diceElement.classList.remove("hidden");
        diceElement.src = `dice-${randomizedNumber}.png`;


        // 3. Check if rolled 1: if ture switch to next player 
        if (randomizedNumber !== 1) {
            // Add dice to current score
            currentScore += randomizedNumber;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

holdBtn.addEventListener("click", function () {
    if (playing) {
        // add current score to the active player
        scores[activePlayer] += currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        // check if the score >= 100 
        if (scores[activePlayer] >= 100) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");
            diceElement.classList.add("hidden");
        } else {
            switchPlayer();
        }
    }
});

document.querySelector(".btn--new").addEventListener("click", init);