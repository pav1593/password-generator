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

function getUserInput() {

        let s = null;

        userPasswordLength = prompt("Enter your desired password length of at least " + min_password_length + " characters and no more than " + max_password_length + " characters, or press Cancel to quit:");

        if (userPasswordLength === null) {
            return s;
        } else if (userPasswordLength<min_password_length || userPasswordLength>max_password_length) {
            s= "Input Error: Password length must be at least 8 and no more than 128 characters. Please try again.";
            return s;
        } else {
              incUpperCase = confirm("Press Ok to include Upper Case letters, or Cancel to exclude?");
              incLowerCase = confirm("Press Ok to include Lower Case letters, or Cancel to exclude?");
              incNumeric = confirm("Press Ok to include numeric values, or Cancel to exclude?");
              incSpecialChar = confirm("Press Ok to include special characters, or Cancel to exclude?");

              if (!incLowerCase && !incUpperCase && !incNumeric && !incSpecialChar) {
                  s= "You must include at least one class of alphanumeric characters and/or special characters. Please try again.";
                  return s;
              } else {
                return s;
              }
    }
    return s;
  }

function generatePassword() {
    
    let pswd=[];
    let passwordDictionary = [];

    if (incUpperCase) {
      passwordDictionary = UpperCaseLetters;
    } 
    if (incLowerCase) {
      passwordDictionary = passwordDictionary.concat(LowerCaseLetters);
    }

    if (incNumeric) {
      passwordDictionary = passwordDictionary.concat(numbers);
    } 

    if (incSpecialChar) {
      passwordDictionary = passwordDictionary.concat(symbols);
    } 
    
    for (let i=0;i<userPasswordLength;i++) {
      pswd += passwordDictionary[Math.floor(Math.random()*passwordDictionary.length)];
    }
    
    return pswd;
}

// Write password to the #password input
function writePassword() {
  let userInput = getUserInput();
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  
  if (userInput===null) {
      passwordText.value = password;
  } else {
      passwordText.value = userInput;
} 

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

