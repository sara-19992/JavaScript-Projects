let sum = 0;
let isStart = false;
let isWin = false;
let isOut = false;
let cards = [];

function reset() {
  sum = 0;
  cards = [];
  isOut = isWin = false;
}

function randomCard() {
  let random;
  random = Math.floor(Math.random() * 13 + 1);
  if (random === 1) {
    return 11;
  }
  if (random > 10) {
    return 10;
  } else {
    return random;
  }
}

function showCards() {
  let card = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    card += cards[i] + " ";
  }
  return card;
}

function regame() {
  let message = "";
  if (sum < 21) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    isWin = true;
    message = "Wohoo! you have got a blackjack";
  } else {
    isOut = true;
    message = "you are out of the game";
  }
  document.getElementById("card-el").textContent = showCards();
  document.getElementById("sum-el").textContent = "Sum: " + sum;
  document.getElementById("message-el").textContent = message;
}

function startGame() {
  reset();
  isStart = true;
  let first = randomCard();
  let secound = randomCard();
  cards.push(first);
  cards.push(secound);
  sum = first + secound;

  regame();
}

function newCard() {
  if (isStart && !isWin && !isOut) {
    let newCard = randomCard();
    cards.push(newCard);
    sum += newCard;
    regame();
  }
}
