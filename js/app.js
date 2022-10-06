'use strict';


let usersName = prompt('What is your name?');
console.log(usersName);
alert('Welcome! ' + usersName);



let score = 0;





let beenToMidwest = prompt('Have I been to the Mid-West?').toLowerCase();
// console.log(beenToMidwest);
beenToMidwest = beenToMidwest.toLowerCase();
// console.log(beenToMidwest);

if (beenToMidwest === 'yes' || beenToMidwest === 'y') {
  // console.log('Thats great! Me too!');
  alert('You are correct! I grew up there.');
  if (beenToMidwest !== 'yes' || beenToMidwest !=='no') {
alert('Try again')
}

else if (beenToMidwest === 'no' || beenToMidwest === 'n') {
  // console.log('That is too bad, its a good place to visit');
  alert('Wrong, I am a Wolverine.');
} else {
  // console.log('You need to answer with a Yes or a No');
  alert('You need to answer with a Yes or a No');
}









let beenToWest = prompt('Have I been to the West Coast?').toLowerCase();
// console.log(beenToWest);
beenToWest = beenToMidwest.toLowerCase();
// console.log(beenToWest);

if (beenToWest === 'yes' || beenToWest === 'y') {
  // console.log('Thats great! Me too!');
  alert('Yup, been to all West Coast States.');
  if (beenToWest !== 'yes' || beenToWest !=='no') {
alert('Try again')
}

else if (beenToWest === 'no' || beenToWest === 'n') {
  // console.log('That is too bad, its a good place to visit');
  alert('Wrong, I live here now.');
}
else {
  // console.log('You need to answer with a Yes or a No');
  alert('You need to answer with a Yes or a No');
}









let likeComps = prompt('Do I like PC computers over Mac?').toLowerCase();
// console.log(likeComps);
likeComps = likeComps.toLowerCase();
// console.log(likeComps);

if (likeComps === 'yes' || likeComps === 'y') {
  // console.log('You bet! Apples are for eating.');
  alert('Nope, apples are for eating!');
  if (likeComps !== 'yes' || likeComps !=='no') {
alert('Try again')
}

else if (likeComps === 'no' || likeComps === 'n') {
  // console.log('That is too bad, computers are great');
  alert('Correct, apples are for eating.');
}
else {
  // console.log('You need to answer with a Yes or a No');
  alert('You need to answer with a Yes or a No');
}








let sports = prompt('Do I like sports?').toLowerCase();
// console.log(likeComps);
sports = sports.toLowerCase();
// console.log(sports);

if (sports === 'yes' || sports === 'y') {
  // console.log('Thats great! Me too!');
  alert('Yeah, watching them more than playing, except for DISC GOLF, it\'s great!');
  if (sports !== 'yes' || sports !=='no') {
alert('Try again')
}

else if (sports === 'no' || sports === 'n') {
  // console.log('That is too bad, sports are great');
  alert('Wrong, competition is always a good thing.');
}
else {
  // console.log('You need to answer with a Yes or a No');
  alert('You need to answer with a Yes or a No');
}










let fishing = prompt('Do I like to fish?').toLowerCase();{
// console.log(fishing);
fishing = fishing.toLowerCase();
// console.log(fishing);
}
if (fishing === 'yes' || fishing === 'y') {
  // console.log('Thats great! Me too!');
  alert('Thats right! I love to crab and catch catfish and panfish!');
  if (fishing !== 'yes' || fishing !=='no') {
alert('Try again')
}

else if (fishing === 'no' || fishing === 'n') {
  // console.log('That is too bad, fishing is great');
  alert('Wrong, fishing is great!');
}
else {
  // console.log('You need to answer with a Yes or a No');
  alert('You need to answer with a Yes or a No');
}


alert ('Now lets play a game. You will need to guess a number between 1 and 10');


let guessAmount1 = 4;
let myNum = 9;


for (let i = 0; i < guessAmount1; i++){
  let numGuess = prompt('What is my favorite number between 1 and 10?');
  if (numGuess < myNum) {
    alert('Too low, try again!');
  }
  if (numGuess > myNum) {
    alert('Too high, try again!');
  }
  if (numGuess === myNum, score++){
    alert('Perfecto! You guessed it!');
  }
}
alert('The correct number is 9');




let guessAmount2 = 6;
let statesLived = [' Michigan', ' Indiana', ' Illinois', ' Virginia', ' Texas', ' Washington',];

for(let i = 0; i < guessAmount2; i++){
  let userGuess = prompt('Name a State I have lived in.');
  for(let j = 0; j < statesLived.length; j++){
    if(userGuess === statesLived[j]){
      alert('Nicely Done!');
    }
  }
}
alert(`No more guesses, I lived in ${statesLived}`);
