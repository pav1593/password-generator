# Password Generator

## Purpose

Apply Javascript best practices to create an interactive password generator web application as per business requirements stated below.

## How to Use

The user is presented with an HTML page with a text box a button to generate a password. Once the button is pressed the user is presented with prompts to:

A) Enter the desired character length of the password of at least 8 and at most 128 characters. An error message is displayed in the browser text box f the user enters values outside of this range and the user is prompted to try again.

B) Include Upper Case, Lower Case, numbers and/or special characters in the password. The user must include at least one character type in order to generate a password, otherwise an error message is displayed and prompts are repeated unless the user Cancels to exit the app.

Once all criteria is validated a randomized password is generated using the criteria specified and is dipslayed in the brower text box.

## Business Requirements

### User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

### Acceptance Criteria

GIVEN I need a new, secure password\
WHEN I click the button to generate a password\
THEN I am presented with a series of prompts for password criteria\
WHEN prompted for password criteria\
THEN I select which criteria to include in the password\
WHEN prompted for the length of the password\
THEN I choose a length of at least 8 characters and no more than 128 characters\
WHEN asked for character types to include in the password\
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters\
WHEN I answer each prompt\
THEN my input should be validated and at least one character type should be selected\
WHEN all prompts are answered\
THEN a password is generated that matches the selected criteria\
WHEN the password is generated\
THEN the password is either displayed in an alert or written to the page\

### Mock-Up

The following image shows the web application's appearance and functionality:

![](./assets/03-javascript-homework-demo.png)

The Password Generator application displays a red button to "Generate Password".

## Deployment

### Public repository at: https://github.com/pav1593/password-generator

### Web deployment to: https://pav1593.github.io/password-generator/
