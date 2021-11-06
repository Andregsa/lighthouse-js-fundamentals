const multiplicationTable = function (maxValue) {
  // Your code here
  let table = "";

  for (let i = 0; i < maxValue; i++) {
    for (let j = 0; j < maxValue; j++) {
      table += `${(i + 1) * (j + 1)} `;
    }
    if (table.length > 1 && i < table.length - 1) table += "\n";
  }
  return table;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
