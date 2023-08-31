const scoreZero = document.getElementById("score--0");
const scoreOne = document.getElementById("score--1");
const currentZero = document.getElementById("current--0");
const currentOne = document.getElementById("current--1");
const img = document.querySelector(".dice");
const playerZero = document.querySelector(".player--0");
const playerOne = document.querySelector(".player--1");
const rollDice = document.querySelector(".btn--roll");
const holdDice = document.querySelector(".btn--hold");
const newGame = document.querySelector(".btn--new");
scoreZero.textContent = 0;
scoreOne.textContent = 0;
let scors, test, playing, currentNumber;
scors = [0, 0];
test = 0;
playing = true;
currentNumber = 0;
img.classList.add("hidden");
const switchPlayer = () => {
  //swich
  document.getElementById(`current--${test}`).textContent = 0;
  currentNumber = 0;
  test = test == 0 ? 1 : 0;
  playerZero.classList.toggle("player--active");
  playerOne.classList.toggle("player--active");
};

rollDice.addEventListener("click", () => {
  if (playing) {
    img.classList.remove("hidden");
    const random = Math.trunc(Math.random() * 6) + 1;
    img.src = `assets/images/dice-${random}.png`;
    if (random !== 1) {
      currentNumber += random;
      document.getElementById(`current--${test}`).textContent = currentNumber;
    } else {
      switchPlayer();
    }
  }
});

holdDice.addEventListener("click", () => {
  if (playing) {
    scors[test] += currentNumber;
    document.getElementById(`score--${test}`).textContent = scors[test];
    document.getElementById(`current--${test}`).textContent = 0;
    currentNumber = 0;
    if (scors[test] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${test}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${test}`)
        .classList.remove("player--active");
      img.classList.add("hidden");
    } else {
      switchPlayer();
    }
  }
});

newGame.addEventListener("click", () => {
  scoreZero.textContent = 0;
  scoreOne.textContent = 0;
  currentZero.textContent = 0;
  currentOne.textContent = 0;
  playing = true;
  document.querySelector(`.player--${test}`).classList.remove("player--winner");
  playerZero.classList.add("player--active");
  playerOne.classList.remove("player--active");
});
