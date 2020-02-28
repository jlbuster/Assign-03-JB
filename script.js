// Assignment Code
let generateBtn = document.querySelector("#generate");
let spcharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '~', '`', '<', '>', '?', '/', ':', ';', '[', ']', '{', '}', '|' ]
let numcharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let lowcharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let upcharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']


function generatePassword() {

  let pass = ""

  let passsize = prompt("Please indicate the length of your password. (Type a number(s) between 8 and 128)")

  while (passsize < 8 || passsize > 128) {

    alert("Length must be between 8 and 128")

    passsize = prompt("Please indicate the length of your password. (Type a number(s) between 8 and 128)")

  }

  let special = confirm("Please indicate whether you would like special characters in your password")

  let numeric = confirm("Please indicate whether you would like numeric characters in your password")

  let lowercase = confirm("Please indicate whether you would like lowercase letters in your password")

  let uppercase = confirm("Please indicate whether you would like uppercase letters in your password")
  
  passsize = Number(passsize)

while (pass.length!==passsize) {
  if (special) {
    pass = pass + (spcharacters[Math.floor(Math.random()*(spcharacters.length-1))])
  } 

  if (pass.length === passsize) {
    break;
  }

  if (numeric) {
    pass = pass + (numcharacters[Math.floor(Math.random()*(numcharacters.length-1))])
  }

  if (pass.length === passsize) {
    break;
  }

  if (lowercase) {
    pass = pass + (lowcharacters[Math.floor(Math.random()*(lowcharacters.length-1))])
  }

  if (pass.length === passsize) {
    break;
  }

  if (uppercase) {
    pass = pass + (upcharacters[Math.floor(Math.random()*(upcharacters.length-1))])
  }

  if (pass.length === passsize) {
    break;

  }

 }

 return pass

}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 

  