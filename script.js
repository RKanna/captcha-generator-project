"use strict";

let btnCheck = document.getElementById("check-button");

function generateRandomDigits(length) {
  let result = "";
  const characters = "0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generateRandomLetters(length) {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function generateResult() {
  let finalOutcome = generateRandomLetters(2);
  let firstString = finalOutcome.charAt(0) + "   " + finalOutcome.charAt(1);
  let randomNumber = generateRandomDigits(1);
  let finalOutcomeTwo = generateRandomLetters(2);
  let secondString =
    finalOutcomeTwo.charAt(0) + "   " + finalOutcomeTwo.charAt(1);
  let randomNumber2 = generateRandomDigits(1);

  let randomIndex = Math.floor(Math.random() * 5);

  let result;
  if (randomIndex === 0) {
    result =
      secondString +
      "  " +
      randomNumber2 +
      "  " +
      firstString +
      "  " +
      randomNumber;
  } else if (randomIndex === 1) {
    result =
      firstString +
      "  " +
      randomNumber2 +
      "  " +
      secondString +
      "  " +
      randomNumber;
  } else if (randomIndex === 2) {
    result =
      firstString +
      "  " +
      secondString +
      "  " +
      randomNumber +
      "  " +
      randomNumber2;
  } else if (randomIndex === 3) {
    result =
      firstString +
      "  " +
      randomNumber +
      "  " +
      randomNumber2 +
      "  " +
      secondString;
  } else if (randomIndex === 4) {
    result =
      randomNumber2 +
      "  " +
      firstString +
      "  " +
      secondString +
      "  " +
      randomNumber;
  } else {
    result =
      randomNumber +
      "  " +
      secondString +
      "  " +
      randomNumber2 +
      "  " +
      firstString;
  }
  return result;
}

function rotateFunc() {
  let btnRotate = document.getElementById("inner-captcha");
  let result = generateResult();
  document.getElementById("inner-captcha").textContent = result;
  btnRotate.style.color = "white";
}

// Generate initial random value on page load
rotateFunc();

btnCheck.addEventListener("click", rotateFunc);
