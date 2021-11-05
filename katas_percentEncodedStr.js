const urlEncode = function (text) {
  let encodeText = "";

  //Remove white spaces from outside of string
  let trimmedText = text.trim();

  // Put your solution here
  // loop through string and check for spaces
  for (let i = 0; i < trimmedText.length; i++) {
    //if whitespace replace by %20 and add to new string encodeText
    if (trimmedText[i] == " ") {
      encodeText += "%20";
    } else {
      //else just add the char to new string
      encodeText += trimmedText[i];
    }
  }

  return encodeText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
