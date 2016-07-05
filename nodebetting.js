var prompt = require('prompt-sync')();

var bankroll = 100;
console.log("The original bankroll is " + bankroll)

initializeGame();

function play(){
  var bet = prompt('Please enter your bet between $5 and 10: ');
  var guess = prompt('Please enter your bet between 1 and 10: ');
  gameplay(bet,guess);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateBankroll() {
  console.log(`Your bankroll is ${bankroll}`)
  if (bankroll <= 0) {
    console.log('Game Over!')
  } else {
    play();
  }
}

function initializeGame() {
  bankroll = 100;
  updateBankroll();
}

function gameplay(bet, guess) {
    var correctNumber = getRandom(1,10);

    if (guess === correctNumber) {
      bankroll += parseInt(bet);
      console.log(`${guess} is correct!`);
      updateBankroll();
    } 
    else if (guess === parseInt(correctNumber) + 1 || guess == parseInt(correctNumber) - 1) {
      console.log(`${guess} was sooooooo close! The correct answer was ${correctNumber}`);
      updateBankroll();
    } 
    else {
      bankroll = parseInt(bankroll) - parseInt(bet);
      console.log(`${guess} was incorrect. The correct answer was ${correctNumber}`);
      updateBankroll();
    }
}