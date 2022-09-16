// Assignment Code
let generateBtn = document.querySelector("#generate");

let alphaLowerCase= "abcdefghijklmnopqrstuvwxyz";
let alphaUpperCase = alphaLowerCase.toUpperCase();
let numeric = "0123456789";
let allowedSymbols = "!@#$%^&*+?";
let LowerCaseLetters = alphaLowerCase.split("");
let UpperCaseLetters = alphaUpperCase.split("");
let symbols = allowedSymbols.split("");
let numbers = numeric.split("");

let min_password_length = 8;
let max_password_length = 128;
let [incUpperCase, incLowerCase, incNumeric, incSpecialChar] = [true,true,true,true];
let userPasswordLength = 0;


console.log(LowerCaseLetters);
console.log(UpperCaseLetters);
console.log(symbols);
console.log(numbers);

function generatePassword() {

}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
