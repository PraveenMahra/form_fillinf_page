import "./style.css";
import { setupCounter } from "./counter.js";

const input = document.getElementById("email");
const emailError = document.querySelector(".email-detail");
const inputPassword = document.getElementById("password");
const passwordEl = document.querySelector(".password-detail");
const length = document.querySelector(".length");
const number = document.querySelector(".number");
const upperCase = document.querySelector(".uppercase");
const lowerCase = document.querySelector(".lowercase");
const specialChar = document.querySelector(".special-charcter");
const button = document.querySelector(".btn");

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

input.addEventListener("keyup", function () {
  const email = input.value;

  if (email === "") {
    input.style.borderColor = "grey";
    emailError.classList.add("hidden");
    return;
  }

  if (validateEmail(email)) {
    input.style.borderColor = "green";
    emailError.classList.add("hidden");
  } else {
    input.style.borderColor = "red";
    emailError.classList.remove("hidden");
  }
});

inputPassword.addEventListener("keyup", () => {
  const password = inputPassword.value;

  let totalCorrect = 0;

  if (password.length >= 8 && password.length <= 15) {
    length.classList.add("green-text");
    length.classList.remove("red-text");

    totalCorrect++;
  } else {
    length.classList.add("red-text");
    length.classList.remove("green-text");
  }

  if (/\d/.test(password)) {
    number.classList.add("green-text");
    number.classList.remove("red-text");
    totalCorrect++;
  } else {
    number.classList.add("red-text");
    number.classList.remove("green-text");
  }

  if (/[A-Z]/.test(password)) {
    upperCase.classList.add("green-text");
    upperCase.classList.remove("red-text");
    totalCorrect++;
  } else {
    upperCase.classList.add("red-text");
    upperCase.classList.remove("green-text");
  }

  if (/[a-z]/.test(password)) {
    lowerCase.classList.add("green-text");
    lowerCase.classList.remove("red-text");
    totalCorrect++;
  } else {
    lowerCase.classList.add("red-text");
    lowerCase.classList.remove("green-text");
  }

  if (/[!@#$%^&*()\-_=+[{\]}\\|:;"'<,>.?/]/.test(password)) {
    specialChar.classList.add("green-text");
    specialChar.classList.remove("red-text");
    totalCorrect++;
  } else {
    specialChar.classList.add("red-text");
    specialChar.classList.remove("green-text");
  }

  if (totalCorrect === 5) {
    inputPassword.style.borderColor = "green";
    button.classList.add("green-background");
  } else {
    button.classList.remove("green-background");
    inputPassword.style.borderColor = "red";
  }

  if (password === "") {
    inputPassword.style.borderColor = "grey";
    specialChar.classList.remove("red-text");
    length.classList.remove("red-text");
    number.classList.remove("red-text");
    upperCase.classList.remove("red-text");
    lowerCase.classList.remove("red-text");
  }
});
