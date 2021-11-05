const sumLargestNumbers = function (data) {
  //Sorting array using Bubble Sorting method
  for (let i = 0; i < data.length; i++)
    for (let j = 0; j < data.length - 1; j++) {
      if (data[i] < data[j]) {
        let temp = data[j];
        data[j] = data[i];
        data[i] = temp;
      }
    }

  console.log(data);

  return data[data.length - 1] + data[data.length - 2];
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
