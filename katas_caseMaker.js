const camelCase = function (input) {
  // Your code here
  let stringArray = input.split(" ");
  let camel = "";

  //If there is no empty space, no need to Uppercase
  if (stringArray.length <= 1) return input;

  //Loop through the array and replace the first lettet to UpperCase and concatenate to the camel string variable
  stringArray.forEach((x, i) => {
    if (i == 0) camel += x;
    camel += x.substr(0, 1).toUpperCase() + x.substr(1);
  });

  return camel;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
