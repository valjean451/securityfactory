// global objects
var generateBtn = document.querySelector("#generate");
var charset = []
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var zerotonine = [0,1,2,3,4,5,6,7,8,9]
var symbols = ["\"", "!", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<","=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
var validlen = false;
var validupper = false;
var validlower = false;
var validnumbers = false;
var pwd = ""
var upperyn = ""
var loweryn = ""
var numyn = ""
var symyn = ""
var passwordLength = ""
var upper = ""
var lower = ""
var nums = ""
var sym = ""

// Write password to the #password input

function writePassword() {
  charset = []
  validlen = false;
  validupper = false;
  validlower = false;
  validnumbers = false;
  pwd = ""
  upperyn = ""
  loweryn = ""
  numyn = ""
  symyn = ""
  passwordLength = ""
  upper = ""
  lower = ""
  nums = ""
  sym = ""
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Core function
function generatePassword() {
//length?
while (validlen == false) {
  passwordLength = lengthquery();
  console.log(passwordLength);
  validlen = validatelength();
}

if (passwordLength == null) {
  return ""
}

//uppercase?
while (validupper == false) {
  upper = addupper();
  console.log(upper);
  validupper = validateup();
}

if (upper == null) {
  return ""
}

//lowercase?
while (validlower == false) {
  lower = addlower();
  console.log(lower);
  validlower = validatelow();
}

if (lower == null) {
  return ""
}

//numbers?
while (validnumbers == false) {
  nums = addnumbers();
  console.log(nums);
  validnumbers = validatenum();
}

if (nums == null) {
  return ""
}

//symbols?
var validsymbol = false;
while (validsymbol == false) {
  sym = addsymbols();
  console.log(sym);
  validsymbol = validatesym();
}

if (sym == null) {
  return ""
}

//todo: validate to make sure there is at least one yes
if (upper == "no" && lower == "no" && nums == "no" && sym == "no") {
  alert("Please include at least one of the four categories: uppercase, lowercase, numnbers, special characters.")
  return ""
}

// generate password

createset()
pwdgen()
return pwd
}


//user inputs length
function lengthquery() {
  var pwdlength = window.prompt("How long do you want your password to be? \n(minimum length 8 characters, maximum length 128 characters)")  
  return pwdlength;
  }

//validate length input

  function validatelength() {
    if (passwordLength == null) {
      console.log("user clicked \'cancel\'");
      return true;
    }
    passwordLength = parseInt(passwordLength) 
    if (isNaN(passwordLength)) {
      alert("Please enter a number between 8 and 128.");
      return false;
    } 
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a number between 8 and 128.");
      return false;
    }
    return true;
    }
    
//check what data sets to add
function addupper() {
  upperyn = window.prompt("Would you like to include upppercase letters?\n(Enter \'Yes\' or \'No\')")
  return upperyn;
}

function addlower() {
  loweryn = window.prompt("Would you like to include lowercase letters?\n(Enter \'Yes\' or \'No\')")
  return loweryn;
}

function addnumbers() {
  numyn = window.prompt("Would you like to include numbers?\n(Enter \'Yes\' or \'No\')")
  return numyn;
}

function addsymbols() {
  symyn = window.prompt("Would you like to include special characters?\n(Enter \'Yes\' or \'No\')")
  return symyn;
}


// validate data set inputs

function validateup() {
  if (upper == null) {
    console.log("user clicked \'cancel\'");
    return true;
    }
    upper = upper.toLowerCase()
  if (upper == "yes" || upper == "no") {
    return true;
  }
  alert("Please enter \'yes\' or \'no\'.")
  return false;
}

function validatelow() {
  if (lower == null) {
    console.log("user clicked \'cancel\'");
    return true;
    }
    lower = lower.toLowerCase()
  if (lower == "yes" || lower == "no") {
    return true;
  }
  alert("Please enter \'yes\' or \'no\'.")
  return false;
}

function validatenum() {
  if (nums == null) {
    console.log("user clicked \'cancel\'");
    return true;
    }
    nums = nums.toLowerCase()
  if (nums == "yes" || nums == "no") {
    return true;
  }
  alert("Please enter \'yes\' or \'no\'.")
  return false;
}

function validatesym() {
  if (sym == null) {
    console.log("user clicked \'cancel\'");
    return true;
    }
    sym = sym.toLowerCase()
  if (sym == "yes" || sym == "no") {
    return true;
  }
  alert("Please enter \'yes\' or \'no\'.")
  return false;
}

// generate password
function createset() {
  if (upper == "yes") {
    charset = charset.concat(uppercaseLetters)
  }
  console.log(charset)
  
  if (lower == "yes") {
    charset = charset.concat(lowercaseLetters)
  }
  console.log(charset)
  
  if (nums == "yes") {
    charset = charset.concat(zerotonine)
  }
  console.log(charset)
  
  if (sym == "yes") {
    charset = charset.concat(symbols)
  }
  console.log(charset)
  }
  
function pwdgen () {
for ( let i = 0; i < passwordLength; i++) {
  var randompos = Math.floor(Math.random() * charset.length)
  pwd = pwd.concat(charset[randompos])
}
console.log(pwd)
return pwd
}
