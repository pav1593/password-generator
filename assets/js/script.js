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
let userPasswordLength = 8;


function generatePassword() {
    
    let pswd=[];
    let passwordDictionary = [];

    if (incUpperCase) {
      passwordDictionary = UpperCaseLetters;
    } 
    if (incLowerCase) {
      passwordDictionary = passwordDictionary.concat(LowerCaseLetters);
      // console.log(passwordDictionary);
    }

    if (incNumeric) {
      passwordDictionary = passwordDictionary.concat(numbers);
      // console.log(passwordDictionary);
    } 

    if (incSpecialChar) {
      passwordDictionary = passwordDictionary.concat(symbols);
      // console.log(passwordDictionary);
    } 
    
    for (let i=0;i<userPasswordLength;i++) {
      pswd += passwordDictionary[Math.floor(Math.random()*passwordDictionary.length)];
    }
    
    return pswd;
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
