const numberOfVowels = function (data) {
  // Put your solution here

  //declare an object of vowels that returns true
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  let sum = 0;

  for (let i = 0; i < data.length; i++) {
    //if the letter match the object it will return true, otherwise will return undefined
    if (vowels[data[i]]) sum++;
  }
  return sum;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
