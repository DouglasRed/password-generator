// Assignment code here

//Creates a random value by looking at the length of the variable
var randomNumber = function (max, min) {
  var value = Math.floor(Math.random() * (max - min));
  return value;
};
//Defines the strings used to create the random passwords
function writePassword(promptLength) {
  var newCharacters = "";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!#$%&()*+,-./`':;<=>?@[]^_{|}~";
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var numbersString = "0123456789";
  window.alert(
    "Please answer five questions for a completely random password."
  );

  //Declares how long the password should be
  var promptLength = parseInt(
    window.prompt(
      "How many characters would you like your password to contain? Pick a number from 8 to 128."
    )
  );
  //Criteria for the password
  if (promptLength < 8 || promptLength > 128 || promptLength == NaN) {
    window.alert("You need to provide a valid answer! Please try again.");
    writePassword();
  } else {
    //Should we include lowercase letters?
    var promptLowercase = window.confirm(
      "Do you want to include lowercase letters in your password?"
    );
    //Should we include uppercase letters?
    var promptUppercase = window.confirm(
      "Do you want to include uppercase letters in your password?"
    );
    //Should we include special characters?
    var promptSpecialCharacters = window.confirm(
      "Do you want to include special characters in your password?"
    );
    //Should we include numbers?
    var promptNumbers = window.confirm(
      "Do you want to include numbers in your password?"
    );
  }
  //adds desired strings to a new string for the creation of the user's password
  if (promptLowercase) {
    newCharacters = newCharacters + lowercaseLetters;
  }
  if (promptUppercase) {
    newCharacters = newCharacters + uppercaseLetters;
  }
  if (promptSpecialCharacters) {
    newCharacters = newCharacters + specialCharacters;
  }
  if (promptNumbers) {
    newCharacters = newCharacters + numbersString;
  }
  //Looks to see if we have enough data to make a password
  if (
    promptLowercase == false &&
    promptUppercase == false &&
    promptSpecialCharacters == false &&
    promptNumbers == false
  ) {
    window.alert("You need to select at least one type of chatracter.");
    writePassword();
  } else {
    // calls the password creation function
    passwordChecker();
  }
  //calls random numbers to create a password
  function passwordChecker() {
    var password = "";
    for (i = 0; i < promptLength; i++) {
      var character = randomNumber(newCharacters.length, 0);
      password += newCharacters[character];
      // console.log(password);
    }
    //ensures number values are present if desired
    console.log(password);
    switch (promptNumbers) {
      case password.includes(0):
      case password.includes(1):
      case password.includes(2):
      case password.includes(3):
      case password.includes(4):
      case password.includes(5):
      case password.includes(6):
      case password.includes(7):
      case password.includes(8):
      case password.includes(9):
        break;
      default:
        //send user back to create a new password if conditions are not met
        passwordChecker();
        break;
    }
    //ensures lowercase values are present if desired
    switch (promptLowercase) {
      case password.includes("a"):
      case password.includes("b"):
      case password.includes("c"):
      case password.includes("d"):
      case password.includes("e"):
      case password.includes("f"):
      case password.includes("g"):
      case password.includes("h"):
      case password.includes("i"):
      case password.includes("j"):
      case password.includes("k"):
      case password.includes("l"):
      case password.includes("m"):
      case password.includes("n"):
      case password.includes("o"):
      case password.includes("p"):
      case password.includes("q"):
      case password.includes("r"):
      case password.includes("s"):
      case password.includes("t"):
      case password.includes("u"):
      case password.includes("v"):
      case password.includes("w"):
      case password.includes("x"):
      case password.includes("y"):
      case password.includes("z"):
        break;
      default:
        //send user back to create a new password if conditions are not met
        passwordChecker();
        break;
    }
    // console.log("Lowercase works");
    //ensures uppercase values are present if desired
    switch (promptUppercase) {
      case password.includes("A"):
      case password.includes("B"):
      case password.includes("C"):
      case password.includes("D"):
      case password.includes("E"):
      case password.includes("F"):
      case password.includes("G"):
      case password.includes("H"):
      case password.includes("I"):
      case password.includes("J"):
      case password.includes("K"):
      case password.includes("L"):
      case password.includes("M"):
      case password.includes("N"):
      case password.includes("O"):
      case password.includes("P"):
      case password.includes("Q"):
      case password.includes("R"):
      case password.includes("S"):
      case password.includes("T"):
      case password.includes("U"):
      case password.includes("V"):
      case password.includes("W"):
      case password.includes("X"):
      case password.includes("Y"):
      case password.includes("Z"):
        break;
      default:
        //send user back to create a new password if conditions are not met
        passwordChecker();
        break;
    }

    //ensures special values are present if desired
    switch (promptSpecialCharacters) {
      case password.includes("!"):
      case password.includes("#"):
      case password.includes("$"):
      case password.includes("%"):
      case password.includes("&"):
      case password.includes("("):
      case password.includes(")"):
      case password.includes("*"):
      case password.includes("+"):
      case password.includes(","):
      case password.includes("-"):
      case password.includes("."):
      case password.includes("/"):
      case password.includes("`"):
      case password.includes("'"):
      case password.includes(":"):
      case password.includes(";"):
      case password.includes("<"):
      case password.includes("="):
      case password.includes(">"):
      case password.includes("?"):
      case password.includes("@"):
      case password.includes("["):
      case password.includes("]"):
      case password.includes("^"):
      case password.includes("_"):
      case password.includes("{"):
      case password.includes("|"):
      case password.includes("}"):
      case password.includes("~"):
        break;
      default:
        //send user back to create a new password if conditions are not met
        passwordChecker();
        break;
    }

    //changes the "Your secure Password" text to the password
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button - triggers the writePassword function to activate
generateBtn.addEventListener("click", writePassword);
