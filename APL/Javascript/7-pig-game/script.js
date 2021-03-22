'use strict';

// Selecting elements
const score0Element = document.querySelector("#score--0");
const score1Element = document.querySelector("#score--1");
// Players
const player0Element = document.querySelector("#name--0");
const player1Element = document.querySelector("#name--1");
const diceElement = document.querySelector(".dice");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

// Starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add("hidden");
let currentScore = 0;


// Rolling dice functionality
rollBtn.addEventListener("click", function () {
    // 1. Randomize a dice so number 1-6 
    const randomizedNumber = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    diceElement.classList.remove("hidden");
    diceElement.src = `dice-${randomizedNumber}.png`;


    // 3. Check if rolled 1: if ture switch to next player 
    if (randomizedNumber !== 1) {
        // Add dice to current score
        currentScore += randomizedNumber;
        player0Element.textContent = currentScore;
    } else {
        // Switch to next player
        currentScore = 0;
    }
});