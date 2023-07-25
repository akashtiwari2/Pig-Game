'use strict';

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const currentscore0El = document.getElementById('current--0');
const currentscore1El = document.getElementById('current--1');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let currentscore = 0;
let activePlayer = 0;
const scores = [0, 0];
//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
function switchplayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentscore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
const rollfunction = function () {
  // genereating a new number
  let randomNumber = Number(Math.trunc(Math.random() * 6) + 1);
  // Display the dice
  console.log(randomNumber);
  diceEl.classList.remove('hidden');
  diceEl.src = 'dice-' + randomNumber + '.png';
  // check for rolled number if it is one switch to next person
  if (randomNumber !== 1) {
    currentscore += randomNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentscore;
  } else {
    // switch to next Person
    switchplayer();
  }
};
btnroll.addEventListener('click', rollfunction);

const holdfunction = function () {
  // Add  currentscore to active players score
  scores[activePlayer] += currentscore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  // Check If score already >=100 then finish the game
  // Else switch to the next player
  switchplayer();
};
btnhold.addEventListener('click', holdfunction);
