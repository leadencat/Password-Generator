// Assignment Code
```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
``` 

// for (expression 1; expression 2; expression 3) {
  // code block to be executed


var generateBtn = document.querySelector("#generate");

var uppercase = ["A","B", "C", "D", "E", "F", "G"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g"];
var special = ["!", "@", "*", "+", "."];
var numeric = ["1", "2", "3", "4", "5"];

for (var i = 0; i < intg.length; i ++) {
  console.log("Password Generator")
};

function passwordPrompt() {
  var length = parseInt (
    window.prompt("How long would you like your password?"),
  );

  if (Number.isNaN(length)) {
    window.alert("ERROR: Password length must be entered with numbers");
    return;
  }

  if (length > 128) {
  window.alert("ERROR: Password length must be less than 129 characters");
  return;
};

if (length < 8) {
window.alert("ERROR: Password length must contain more than 7 characters");
return;
};
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
