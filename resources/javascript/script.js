'use strict'

// Declaring Dom variables
const player0El = document.querySelector('.player-0');
const player1El = document.querySelector('.player-1');
const diceEl = document.querySelector('.dice');
const newButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const score0 = document.getElementById('score-0');
const score1 = document.getElementById('score-1');
const currentScore0 = document.getElementById('currentscore-0');
const currentScore1 = document.getElementById('currentscore-1');

let scores = [0, 0];
let currentScore;
let activePlayer;
let playing;

// Declaring initialisation function
const initialisation = function () {
    diceEl.classList.add('hidden');
    score0.textContent = 0;
    score1.textContent = 0;
    currentScore1.textContent = 0;
    currentScore0.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player-active');
    player1El.classList.remove('player-active');
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
}
const switchPlayer = function () {
    document.getElementById(`currentscore-${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player-active');
    player1El.classList.toggle('player-active');
};


initialisation();
rollButton.addEventListener('click', function () {
    if (playing) {
        // Rolling dice
        const dice = Math.trunc(Math.random() * 6) + 1;

        // Displaying the dice
        diceEl.classList.remove('hidden');
        diceEl.src = `resources/images/dice-${dice}.png`;

        // Checking rolled dice
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`currentscore-${activePlayer}`).textContent = currentScore
        } else {
            switchPlayer();

        }

    }

})

holdButton.addEventListener('click', function () {

    if (playing) {
        // Adding current score to player's Score
        scores[activePlayer] += currentScore;
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

        // Checking if the player's score is >= 100
        if (scores[activePlayer] >= 100) {
            diceEl.classList.add('hidden');
            document.querySelector(`.player-${activePlayer}`).classList.add('player--winner');
            playing = false;

        } else {

            switchPlayer();

        }

    }

})

newButton.addEventListener('click', function () {
    initialisation();

})



