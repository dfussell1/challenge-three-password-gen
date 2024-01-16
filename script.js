// Assignment code here

// Array of uppercase letters that may be included in password
var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Array of lowercase letters that may be included in password
var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of numerical characters that may be included in password
var numerical = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

// Array of special characters that may be included in password
var specChar = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

function generatePassword() {

  var optionsArr = [];
  var password = '';

  var passLength = parseInt(prompt("Enter Desired Password Length Between 8-128"));

// This ensures the user enters a numerical character
  if(isNaN(passLength)) {
    alert('Please enter a number');
    return;
  }

// User must enter a number between 8 and 128
  if(passLength < 8 || passLength > 128) {
    alert('Please enter a number between 8 and 128');
    return;
  } 
// Asks user what type of characters they would like to include in their password
  var includeUppercase = confirm('Would you like uppercase letters?');
  var includeLowercase = confirm('Would you like lowercase letters?');
  var includeNumbers = confirm('Would you like to include numbers?');
  var includeSpecChars = confirm('Would you like to include special characters?');

  // Ensures user selects at least one of the prompts above 
  if(!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecChars) {
    alert('Please select at least one character type');
    return;
  }

  // Creates the new array based on user's selected options
  if(includeUppercase) {
    optionsArr = optionsArr.concat(upperCase);
  }
  if(includeLowercase) {
    optionsArr = optionsArr.concat(lowerCase);
  }
  if(includeNumbers) {
    optionsArr = optionsArr.concat(numerical);
  }
  if(includeSpecChars) {
    optionsArr = optionsArr.concat(specChar);
  }

  // For loop to loop over array and choose characters for password
  for (var i = 0; i < passLength; i++) {
    var randomIndex = Math.floor(Math.random() * optionsArr.length);
    password += optionsArr[randomIndex];
  }

  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
