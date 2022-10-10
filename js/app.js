// 'use strict';

// function usersName () {
//   let usersName = prompt('What is your name?');
//   // console.log(usersName);
//   alert('Welcome! ' + usersName);

// }
// usersName();

// //-----------------------------------------------------------



// function beenToMidwest() {

//   let beenToMidwest = prompt('Have I been to the Mid-West?').toLowerCase();
//   beenToMidwest = beenToMidwest.toLowerCase();

//   if (beenToMidwest === 'yes' || beenToMidwest === 'y') {
//   // console.log('Thats great! Me too!');
//     alert('You are correct! I grew up there.');
//     //if (beenToMidwest !== 'yes' || beenToMidwest !=='no');
//     score++;
//   }

//   else if (beenToMidwest === 'no' || beenToMidwest === 'n') {
//   // console.log('That is too bad, its a good place to visit');
//     alert('Wrong, I am a Wolverine.');
//   } else {
//   // console.log('You need to answer with a Yes or a No');
//     alert('You need to answer with a Yes or a No');
//   }

// }
// beenToMidwest();

// //-------------------------------------------------------------------------------

// function beenToWest() {

//   let beenToWest = prompt('Have I been to the West Coast?').toLowerCase();
//   // console.log(beenToWest);
//   beenToWest = beenToWest.toLowerCase();
//   // console.log(beenToWest);

//   if (beenToWest === 'yes' || beenToWest === 'y') {
//   // console.log('Thats great! Me too!');
//     alert('Yup, been to all West Coast States.');
//     score++;
//   }

//   else if (beenToWest === 'no' || beenToWest === 'n') {
//   // console.log('That is too bad, its a good place to visit');
//     alert('Wrong, I live here now.');
//   }

//   else {
//   // console.log('You need to answer with a Yes or a No');
//     alert('You need to answer with a Yes or a No');
//   }
// }
// beenToWest();
// //--------------------------------------------------------------------------

// function likeComps() {

//   let likeComps = prompt('Do I like PC computers over Mac?').toLowerCase();
//   // console.log(likeComps);
//   likeComps = likeComps.toLowerCase();
//   // console.log(likeComps);

//   if (likeComps === 'yes' || likeComps === 'y') {
//   // console.log('Correct! Apples are for eating.');
//     alert('Correct, the pc is the way to go.');
//     score++;
//   }
//   else if (likeComps === 'no' || likeComps === 'n') {
//   // console.log('That is too bad, computers are great');
//     alert('Incorrect, PC is for computing, apples are for eating!');
//   }

//   else {
//   // console.log('You need to answer with a Yes or a No');
//     alert('You need to answer with a Yes or a No');
//   }
// }
// likeComps();
// //---------------------------------------------------------------------

// function sports() {

//   let sports = prompt('Do I like sports?').toLowerCase();
//   // console.log(likeComps);
//   sports = sports.toLowerCase();
//   // console.log(sports);

//   if (sports === 'yes' || sports === 'y') {
//   // console.log('Thats great! Me too!');
//     alert('Yeah, watching them more than playing, except for DISC GOLF, it\'s great!');
//     score++;
//   }

//   else if (sports === 'no' || sports === 'n') {
//   // console.log('That is too bad, sports are great');
//     alert('Wrong, competition is always a good thing.');
//   }
//   else {
//   // console.log('You need to answer with a Yes or a No');
//     alert('You need to answer with a Yes or a No');
//   }
// }
// sports();

// //---------------------------------------------------------------------------

// function fishing() {

//   let fishing = prompt('Do I like to fish?').toLowerCase();{
//   // console.log(fishing);
//     fishing = fishing.toLowerCase();
//   // console.log(fishing);
//   }

//   if (fishing === 'yes' || fishing === 'y') {
//     // console.log('Thats great! Me too!');
//     alert('Thats right! I love to crab and catch catfish and panfish!');
//     score++;
//   }

//   else if (fishing === 'no' || fishing === 'n') {
//     // console.log('That is too bad, fishing is great');
//     alert('Wrong, fishing is great!');
//   }
//   else {
//     // console.log('You need to answer with a Yes or a No');
//     alert('You need to answer with a Yes or a No');
//   }

// }
// fishing();

// //-------------------------------------------------------------------------------




// alert ('Now lets play a game. You will need to guess a number between 1 and 10');


// // function numGuess() {
// let numAttempts = 4;
// let numGuess = parseInt(prompt('please guess a number between 1 and 10'));
// let myNum = 9;

// let i = 1;




// while(i < (numAttempts + 1)){
//   if (numGuess === myNum){
//     alert ('correct');

//     break;
//   }
//   else if(i < numAttempts){
//     if(numGuess < myNum){
//       alert('youre number is too low, try again!');
//     }
//     if(numGuess > myNum){
//       alert('youre number is too high, try again!');
//     }
//     numGuess = prompt('What is my favorite number between 1 and 10?');
//     numGuess = parseInt(numGuess);
//   }
//   else{
//     alert('sorry you are out of attempts');
//     break;
//   }
//   i++;
// }

// }


// numGuess();



// //---------------------------------------------------------------------------------------------------------

let guessAmount2 = 6;
let statesLived = [' Michigan', ' Indiana', ' Illinois', ' Virginia', ' Texas', ' Washington',];

for(let i = 0; i < guessAmount2; i++){
  let userGuess = prompt('Name a State I have lived in.').toLowerCase();
  for(let j = 0; j < statesLived.length; j++){
    if(userGuess === statesLived[j]){
      alert('Nicely Done!');
      
    }
  }
}
alert(`No more guesses, I lived in ${statesLived}`);
