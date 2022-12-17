// Assignment Code
var generateBtn = document.querySelector("#generate");
var charset = []
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var zerotonine = [0,1,2,3,4,5,6,7,8,9]
var symbols = ["\"", "!", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<","=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// logic
/* .push adds to string, .concat connects strings to each other


instructions reference the need to select a character type. why, and what does that mean? 

if (logical) {
  do thing A
} else if (logical 2) {
  do thing B
} else {
  do thing Z
}

*/


//Password length section
var pwdlength = window.prompt("How long do you want your password to be? \n(minimum length 8 characters, maximum length 128 characters)")

if (pwdlength < 8 || pwdlength > 128) {
  // find out how to return to previous step
} else {
  // find out how to continue to next step
}


//Uppercase section

var upperyn = window.prompt("Would you like to include upppercase letters?\n(Enter \'Yes\' or \'No\')")

upperyn = upperyn.toLowerCase()

if (upperyn === "yes") {
  charset = charset.concat(uppercaseLetters)
} else if (upperyn === "no") {
  // find out how to continue to next step
} else {
  // find out how to return to previous step
}

//Lowercase section

var loweryn = window.prompt("Would you like to include lowercase letters?\n(Enter \'Yes\' or \'No\')")

loweryn = loweryn.toLowerCase()

if (loweryn === "yes") {
  charset = charset.concat(lowercaseLetters)
} else if (loweryn === "no") {
  // find out how to continue to next step
} else {
  // find out how to return to previous step
}

//Numbers section

var numyn = window.prompt("Would you like to include numbers?\n(Enter \'Yes\' or \'No\')")

numyn = numyn.toLowerCase()

if (numyn === "yes") {
  charset = charset.concat(zerotonine)
} else if (numyn === "no") {
  // find out how to continue to next step
} else {
  // find out how to return to previous step
}


//Symbols section

var symyn = window.prompt("Would you like to include special characters?\n(Enter \'Yes\' or \'No\')")

symyn = symyn.toLowerCase()

if (symyn === "yes") {
  charset = charset.concat(symbols)
} else if (symyn === "no") {
  // find out how to continue to next step
} else {
  // find out how to return to previous step
}

var pwd = ""

for ( let i = 0; i < pwdlength; i++) {
  var randompos = Math.floor(Math.random() * charset.length)
  pwd = pwd.concat(charset[randompos])
}

//Print password to window alert

