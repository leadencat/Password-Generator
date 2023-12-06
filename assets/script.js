
// array options
var capitalLetters = ["A", "B", "C", "D", "E", "F", "G"];
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g"];
var special = ["!", "@", "*", "+", "."];
var numeric = ["1", "2", "3", "4", "5"];

function passwordPrompt() {
  var length = parseInt(
    window.prompt("How long would you like your password?"),
  );

  // funtions correcting right password length/type
  if (Number.isNaN(length)) {
    window.alert("ERROR: Password length must be entered with numbers");
    return;
  };

  if (length > 128) {
    window.alert("ERROR: Password length must be less than 129 characters");
    return;
  };

  if (length < 8) {
    window.alert("ERROR: Password length must contain more than 7 characters");
    return;
  };

  // array seletions for preffered password
  var lowerCase = confirm("If you would like lowercase letters, press OK");
  var upperCase = confirm("If you would like uppercase letters, press OK");
  var incNumbers = confirm("If you would like numbers, press OK");
  var incSpecial = confirm("If you would like symbols, press OK");

  if (
    lowerCase === false &&
    upperCase === false &&
    incSpecial === false &&
    incNumbers === false
  ) {
    window.alert("Must have one or more character types");
    return;
  }

  var userInput = {
    length: length,
    lowerCase: lowerCase,
    upperCase: upperCase,
    incNumbers: incNumbers,
    incSpecial: incSpecial,
  };
  return userInput;
}

// Calling on random array based on previous function selections
function randomize(arr) {
  var Index = Math.floor(Math.random() * arr.length);
  var randomArray = arr[Index];
  return randomArray;
}

// Function to choose letters, numbers or symbols based on user choice, includes at least one at random from each selected
function passwordGen() {
  var totalOptions = passwordPrompt();
  var results = [];
  var totalCharacters = [];
  var inputCharacters = [];

  // If they did not select anything, return to the main generator
  if (!totalOptions)
    return;


  // Checking if lowercase was selected, if so, adding those characters from array
  if (totalOptions.lowerCase) {
    totalCharacters = totalCharacters.concat(lowerLetters);
    inputCharacters.push(randomize(lowerLetters));
  }

  // Checking if uppsercase was selected, if so, adding those characters from array 
  if (totalOptions.upperCase) {
    totalCharacters = totalCharacters.concat(capitalLetters);
    inputCharacters.push(randomize(capitalLetters));
  }

  // Checking if numbers were selected, if so, adding those characters from array
  if (totalOptions.incNumbers) {
    totalCharacters = totalCharacters.concat(numeric);
    inputCharacters.push(randomize(numeric));
  }

  // Checking if symbols were selected, if so, adding those characters from array
  if (totalOptions.incSpecial) {
    totalCharacters = totalCharacters.concat(special);
    inputCharacters.push(randomize(special));
  }

  for (var i = 0; i < totalOptions.length; i++) {
    var generated = randomize(totalCharacters);
    results.push(generated);
  }
  for (var i = 0; i < inputCharacters.length; i++) {
    results[i] = inputCharacters[i];
  }
  return results.join("");

}

var generateBtn = document.querySelector("#generate");

//  #password input
function writePassword() {
  var password = passwordGen();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//event listener
generateBtn.addEventListener("click", writePassword);
