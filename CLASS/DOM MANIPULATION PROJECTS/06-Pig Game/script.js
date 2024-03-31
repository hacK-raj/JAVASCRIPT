'use strict';
//Selecting elements
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const winningMsg = document.querySelector('.player--wins');

const rules = document.querySelector('.rules');
let scores, currentScore, activePlayer, player;
//Initial Condition
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  player = true;

  score0.textContent = 0;
  score1.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;

  rules.classList.remove('hidden');
  diceEl.classList.add('hidden');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

const canvas = document.querySelector('#confetti');
const jsConfetti = new JSConfetti();

//Rolling Dice Functionality
function rollDice() {
  if (player) {
    //1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // console.log(dice);

    //2. Display dice
    rules.classList.add('hidden');
    diceEl.classList.remove('hidden');
    diceEl.src = `./dice/dice-${dice}.png`;

    //3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      // current0.textContent = currentScore;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switch player
      switchPlayer();
    }
  }
}

btnRoll.addEventListener('click', rollDice);
function btnHoldd() {
  if (player) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. Cheak if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish game
      player = false;
      winningMsg.textContent = activePlayer + 1;
      diceEl.classList.add('hidden');
      jsConfetti.addConfetti();
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switch player
      switchPlayer();
    }
  }
}
btnHold.addEventListener('click', btnHoldd);
//  btnCloseModal.addEventListener('click',function(){
//     modal.classList.add('hidden')
//     overlay.classList.add('hidden')
//  })
//  overlay.addEventListener('click',function(){
//     modal.classList.add('hidden')
//     overlay.classList.add('hidden')
//  })
btnNew.addEventListener('click', init);

function closeModal() {
  init();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  } else if (e.key === 'r') {
    rollDice();
  } else if (e.key === ' ') {
    btnHoldd();
  }
});
