// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var specialChar = [
    "!",
    "#",
    "$",
    "%",
    "&",
    "(",
    ")",
    "*",
    "+",
    "-",
    '"',
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "[",
    "]",
    "^",
    "_",
    "`",
    "{",
    "|",
    "}",
    "~",
  ];
  var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var optArray = [];
  var password = "";

  var length = prompt("How long do you want your password to be?");
  if (length < 8) {
    alert("password must be 8 characters long");
    return;
  }
  if (confirm("Do you want upper case letters?")) {
    optArray.push(upperCase);
  }
  if (confirm("Do you want lower case letters?")) {
    optArray.push(lowerCase);
  }

  if (confirm("Do you want numbers?")) {
    optArray.push(nums);
  }

  if (confirm("Do you want special characters?")) {
    optArray.push(specialChar);
  }

  if (!optArray.length){
    alert("you must select one character type")
    return
  }
  console.log(optArray)
  for (let index = 0; index < length; index++) {
    
    var randomArray=optArray[Math.floor(Math.random()*optArray.length)]
  
    var randomChar=randomArray[Math.floor(Math.random()*randomArray.length)]
    password=password+randomChar
  }
  return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
