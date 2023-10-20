// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// check to make sure passwork length is between 8 and 128 characters
function generatePassword() {
  var passwordLength = prompt("How many characters do you need?");
  var passwordCharacters = "";
  if (passwordLength > 300 || passwordLength < 8) {
    alert("Password length must be between 8 to 128 characters.");
    return;
  // confirm what characters to use in password
  }
  if (confirm("Would you like uppercase letters?")) {
    passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (confirm("Would you like lowercase letters?")) {
    passwordCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (confirm("Would you like numbers?")) {
    passwordCharacters += "0123456789";
  } 
  if (confirm("Would you like special characters")) {
    passwordCharacters += "+_)(*&^%$#@!-=[]';.,/\|}{<>?";
  }
  if (!passwordCharacters) {
    alert("Password length must be between 8 to 128 characters.")
    return;
  }
// Randomize password characters based on prompt confirmation
  var password = '';
  for (var i = 0; i < passwordLength; i++){
    password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  };
  
  return password;
  console.log(password);
}
//write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
