"use strict";

let btnCheck = document.getElementById("check-button");
let captchaResult;

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
  let firstString = finalOutcome.charAt(0) + " " + finalOutcome.charAt(1);
  let randomNumber = generateRandomDigits(1);
  let finalOutcomeTwo = generateRandomLetters(2);
  let secondString =
    finalOutcomeTwo.charAt(0) + " " + finalOutcomeTwo.charAt(1);
  let randomNumber2 = generateRandomDigits(1);

  let randomIndex = Math.floor(Math.random() * 5);

  let result;
  if (randomIndex === 0) {
    result =
      secondString +
      " " +
      randomNumber2 +
      " " +
      firstString +
      " " +
      randomNumber;
  } else if (randomIndex === 1) {
    result =
      firstString +
      " " +
      randomNumber2 +
      " " +
      secondString +
      " " +
      randomNumber;
  } else if (randomIndex === 2) {
    result =
      firstString +
      " " +
      secondString +
      " " +
      randomNumber +
      " " +
      randomNumber2;
  } else if (randomIndex === 3) {
    result =
      firstString +
      " " +
      randomNumber +
      " " +
      randomNumber2 +
      " " +
      secondString;
  } else if (randomIndex === 4) {
    result =
      randomNumber2 +
      " " +
      firstString +
      " " +
      secondString +
      " " +
      randomNumber;
  } else {
    result =
      randomNumber +
      " " +
      secondString +
      " " +
      randomNumber2 +
      " " +
      firstString;
  }

  captchaResult = result;
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

function checkValidation() {
  const validateInput = document
    .getElementById("input-Validate")
    .value.replace(/\s/g, "");
  const capWithoutSpace = captchaResult.replace(/\s/g, "");
  const messageValidation = document.getElementById("message");
  const inputValidate = document.getElementById("input-Validate");
  const whiteContainerSpace = document.getElementById("background-container");

  if (capWithoutSpace === validateInput) {
    whiteContainerSpace.classList.remove("white-space-border");
    messageValidation.classList.add("message-el");
    messageValidation.innerText = "Nice! You don't appear to be a robot.";
    messageValidation.style.color = "lightgreen";
    setTimeout(function () {
      messageValidation.innerText = "";
      inputValidate.value = "";
      messageValidation.classList.remove("message-el");
      whiteContainerSpace.classList.add("white-space-border");
      rotateFunc();
    }, 5000);
  } else {
    whiteContainerSpace.classList.remove("white-space-border");
    messageValidation.classList.add("message-el");
    messageValidation.style.color = "red";
    messageValidation.innerText = "Captcha not matched. Please try again!";
  }
}
