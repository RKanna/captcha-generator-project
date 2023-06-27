"use strict";
let genNeedNumber = [];
genNeedNumber.length = 10;
let genNeedLetter = [];

let randomNumber2 = Math.floor(Math.random() * 10);
console.log(randomNumber2);

// genNeedNumber = genNeedNumber.push(randomNumber);
// console.log(genNeedNumber);

// function NewArray(size) {
//   let genNeedNumber = [];
//   for (let i = 0; i < size; ++i) {
//     genNeedNumber[i] = i;
//   }
//   return genNeedNumber;
// }

// let NumberArray = NewArray(10);
// console.log(NumberArray);
let randomNumber = [];
function newArray(size) {
  randomNumber = Math.floor(Math.random() * 10);
  return randomNumber;
}
let newRandomArray = newArray(10);
console.log(newRandomArray);
let finalOutcome = "";
function makeRandomAlpha(length) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    finalOutcome += characters.charAt(
      Math.floor(Math.random() * charactersLength)
    );
    counter += 1;
  }
  return finalOutcome;
}
makeRandomAlpha();
console.log(makeRandomAlpha(4));

let randomIndex = Math.floor(Math.random() * 3);

// Concatenate the variables based on the random index
var result;
if (randomIndex === 0) {
  result = randomNumber2.toString() + finalOutcome + randomNumber.toString();
} else if (randomIndex === 1) {
  result = finalOutcome + randomNumber2.toString() + randomNumber.toString();
} else {
  result = finalOutcome + randomNumber.toString() + randomNumber2.toString();
}

console.log(result);
