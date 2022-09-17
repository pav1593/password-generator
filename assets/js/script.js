// Assignment Code
let generateBtn = document.querySelector("#generate");

//create character sets and split into arrays
let alphaLowerCase= "abcdefghijklmnopqrstuvwxyz";
let alphaUpperCase = alphaLowerCase.toUpperCase();
let numeric = "0123456789";
let allowedSymbols = "!@#$%^&*+?";
let LowerCaseLetters = alphaLowerCase.split("");
let UpperCaseLetters = alphaUpperCase.split("");
let symbols = allowedSymbols.split("");
let numbers = numeric.split("");

//intitialize password criteria
let min_password_length = 8;
let max_password_length = 128;
let [incUpperCase, incLowerCase, incNumeric, incSpecialChar] = [true,true,true,true];
let userPasswordLength = 0;

//get and verify user input against password criteria
function getUserInput() {

        //result string to store error messages to be displayed in the text box
        let s = null;

        // prompt user for password length
        userPasswordLength = prompt("Enter your desired password length of at least " + min_password_length + " characters and no more than " + max_password_length + " characters, or press Cancel to quit:");

        // confirm prompt doesn't return a null value which will exit the password generator
        if (userPasswordLength === null) {
            return s;
        // ensure that password is within allowable length otherwise exit and return an Input error msg
        } else if (userPasswordLength<min_password_length || userPasswordLength>max_password_length) {
            s= "Input Error: Password length must be at least 8 and no more than 128 characters. Please try again.";
            return s;
        } else {
              // prompt user for charcgter types to include in password 
              incUpperCase = confirm("Press Ok to include Upper Case letters, or Cancel to exclude?");
              incLowerCase = confirm("Press Ok to include Lower Case letters, or Cancel to exclude?");
              incNumeric = confirm("Press Ok to include numeric values, or Cancel to exclude?");
              incSpecialChar = confirm("Press Ok to include special characters, or Cancel to exclude?");

              // if none of the charcter types are selected otherwise exit and return an Input Error msg
              if (!incLowerCase && !incUpperCase && !incNumeric && !incSpecialChar) {
                  s= "Input Error: Password must include at least one class of alphanumeric characters and/or special characters. Please try again.";
                  return s;
              } else {
                return s;
              }
    }
    return s;
  }

  // function generates a randomized password based on the user input criteria
function generatePassword() {
    
    let pswd=[];
    let passwordDictionary = [];

    // create a passwordDictionary array which will contain all of the user selected character types
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
    
    // generate a password by randomly picking characters from the passwordDictionary array and storing into pswd variable
    for (let i=0;i<userPasswordLength;i++) {
      pswd += passwordDictionary[Math.floor(Math.random()*passwordDictionary.length)];
    }
    // return the generated password
    return pswd;
}

// Write password to the #password input
function writePassword() {

  let userInput = getUserInput(); // call the user input function
  let password = generatePassword(); // call the generate password function
  let passwordText = document.querySelector("#password");
  
  // if getUserInput function returned a NULL then all inputs validated successfully otherwise output the returned error message
  if (userInput===null) {
      passwordText.value = password; 
  } else {
      passwordText.value = userInput;
} 

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

