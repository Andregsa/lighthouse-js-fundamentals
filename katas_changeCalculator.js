const calculateChange = function (total, cash) {
  // Your code here
  let result = {};

  let change = cash - total;

  if (parseInt(change / 2000) > 0) {
    result["twentyDollar"] = parseInt(change / 2000 > 0);
    change = change % 2000;
  }

  if (parseInt(change / 1000) > 0) {
    result["tenDollar"] = parseInt(change / 1000);
    change = change % 1000;
  }

  if (parseInt(change / 500) > 0) {
    result["fiveDollar"] = parseInt(change / 500);
    change = change % 500;
  }

  if (parseInt(change / 200) > 0) {
    result["twoDollar"] = parseInt(change / 200);
    change = change % 200;
  }

  if (parseInt(change / 100) > 0) {
    result["oneDollar"] = parseInt(change / 100);
    change = change % 100;
  }

  if (parseInt(change / 25) > 0) {
    result["quarter"] = parseInt(change / 25);
    change = change % 25;
  }

  if (parseInt(change / 10) > 0) {
    result["dime"] = parseInt(change / 10);
    change = change % 10;
  }
  if (parseInt(change / 5) > 0) {
    result["nickel"] = parseInt(change / 5);
    change = change % 5;
  }

  if (parseInt(change / 1) > 0) {
    result["penny"] = parseInt(change / 1);
  }

  return result;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
