// global objects
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


//Password length section
var validlen = false;
while (validlen == false) {
  var passwordLength = lengthquery();
  console.log(passwordLength);
  validlen = validatelength();
}

//uppercase?
var validupper = false;
while (validupper == false) {
  var upper = addupper();
  console.log(upper);
  validupper = validateup();
}

//lowercase?

var validlower = false;
while (validlower == false) {
  var lower = addlower();
  console.log(lower);
  validlower = validatelow();
}
//numbers?

var validnumbers = false;
while (validnumbers == false) {
  var nums = addnumbers();
  console.log(nums);
  validnumbers = validatenum();
}

//symbols?

var validsymbol = false;
while (validsymbol == false) {
  var sym = addsymbols();
  console.log(sym);
  validsymbol = validatesym();

}







// generate password

function pwdgen () {
  var pwd = ""

for ( let i = 0; i < pwdlength; i++) {
  var randompos = Math.floor(Math.random() * charset.length)
  pwd = pwd.concat(charset[randompos])
}
}










// Completed



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
  var upperyn = window.prompt("Would you like to include upppercase letters?\n(Enter \'Yes\' or \'No\')")
  return upperyn;
}

function addlower() {
  var loweryn = window.prompt("Would you like to include lowercase letters?\n(Enter \'Yes\' or \'No\')")
  return loweryn;
}

function addnumbers() {
  var numyn = window.prompt("Would you like to include numbers?\n(Enter \'Yes\' or \'No\')")
  return numyn;
}

function addsymbols() {
  var symyn = window.prompt("Would you like to include special characters?\n(Enter \'Yes\' or \'No\')")
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