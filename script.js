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
console.log(makeRandomAlpha(2));

let finalOutcomeTwo = "";
function makeRandomAlphaTwo(length) {
  const charactersTwo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLengthTwo = charactersTwo.length;
  let counterTwo = 0;
  while (counterTwo < length) {
    finalOutcomeTwo += charactersTwo.charAt(
      Math.floor(Math.random() * charactersLengthTwo)
    );
    counterTwo += 1;
  }
  return finalOutcomeTwo;
}
makeRandomAlphaTwo();
console.log(makeRandomAlphaTwo(2));

let randomIndex = Math.floor(Math.random() * 5);

// Concatenate the variables based on the random index
let result;
function resultValue() {
  if (randomIndex === 0) {
    result =
      finalOutcomeTwo +
      randomNumber2.toString() +
      finalOutcome +
      randomNumber.toString();
  } else if (randomIndex === 1) {
    result =
      finalOutcome +
      randomNumber2.toString() +
      finalOutcomeTwo +
      randomNumber.toString();
  } else if (randomIndex === 2) {
    result =
      finalOutcome +
      finalOutcomeTwo +
      randomNumber.toString() +
      randomNumber2.toString();
  } else if (randomIndex === 3) {
    result =
      finalOutcome +
      randomNumber.toString() +
      randomNumber2.toString() +
      finalOutcomeTwo;
  } else if (randomIndex === 3) {
    result =
      randomNumber2.toString() +
      finalOutcome +
      finalOutcomeTwo +
      randomNumber.toString();
  } else if (randomIndex === 4) {
    result =
      randomNumber.toString() +
      finalOutcome +
      randomNumber2.toString() +
      finalOutcomeTwo;
  } else {
    result =
      randomNumber2.toString() +
      finalOutcomeTwo +
      randomNumber.toString() +
      finalOutcome;
  }
  console.log(result);
}
resultValue();

const btnRotate = document.getElementById("inner-captcha");

// // btnRotate.addEventListener("click", () => {
// //   document.getElementById("inner-captcha").textContent = result;
// //   resultValue();
// // });

function rotateFunc() {
  resultValue();
  document.getElementById("inner-captcha").textContent = result;
}
