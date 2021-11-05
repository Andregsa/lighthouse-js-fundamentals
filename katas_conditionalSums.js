const conditionalSum = function (values, condition) {
  // Your code here

  //Return 0 if array length is 0
  if (values.length === 0) return 0;

  //variable to store the sum
  let sum = 0;

  for (let x of values) {
    let checkEven = x % 2; //Check if the number if Even or Odd

    //If checkEven pass and condition is even then add to var sum
    if (checkEven === 0 && condition === "even") sum += x;
    //If checkEven did not pass and condition is odd then add to var sum
    else if (checkEven !== 0 && condition === "odd") sum += x;
  }

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
