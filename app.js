let cards = [];
let sum = 0;
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let msgEl = document.querySelector("#msg-el");
let myAgeEl = document.getElementById("age-el");
let msg;
let isAlive = true;
let player = {
  name: "Adina",
  chips: 165,
};

let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function randomRANGE(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

function randomNumber() {
  return Math.floor(Math.random() * 110);
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  cards = [];
  let firstCard = getRandomCard();
  cards[0] = firstCard;
  let secondCard = getRandomCard();
  cards[1] = secondCard;
  let isAlive = true;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards:";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sum = 0;
  for (let i = 0; i < cards.length; i++) {
    sum = sum + cards[i];
  }
  sumEl.textContent = "Sum:" + sum;
  if (sum === 21) {
    message = "Congrats!You've got Blackjack!";
    isAlive = false;
    hasBlackJack = true;
  } else if (sum < 21) {
    message = "Do you want to draw a new card?";
    isAlive = true;
    hasBlackJack = false;
  } else if (sum > 21) {
    message = "Sorry, you are out!";
    isAlive = false;
    hasBlackJack = false;
  }
  messageEl.textContent = message;
}

function displayMyAge() {
  myAgeEl.innerText = parseInt(myAgeEl.value);

  console.log("The value for the birthday card is ", myAgeEl.value);

  if (myAgeEl.value < 100) {
    msg = "Not Eligible";
  } else if (myAgeEl.value === 100) {
    msg = "Here is your birtday card from the King";
  } else if (myAgeEl.value > 100) {
    msg = "Not eligible,you have already gotten one";
  }
  msgEl.textContent = msg;
  console.log(msgEl);
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    messageEl.textContent = "Drawing a new card from the desk!";
    cards.push(card);
    renderGame();
  }
}
