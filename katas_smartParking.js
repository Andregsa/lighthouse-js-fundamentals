const whereCanIPark = function (spots, vehicle) {
  // Code here!

  //Object to store the type of vehicles and assign to what parking type they can park.
  const type = {
    regular: ["R"],
    small: ["S", "R"],
    motorcycle: ["S", "M", "R"],
  };

  //Interacte through 2D Array
  for (let y = 0; y < spots.length; y++) {
    for (let x = 0; x < spots[y].length; x++) {
      //Check if Vehicle type is allowed to park comparing they Key of the object
      //and also the Value of object(That is upper case) with the value of the Spots array.
      if (type[vehicle].includes(spots[y][x])) {
        return [x, y]; //Return the Spot available
      }
    }
  }

  //Return false if no parking spot is available
  return false;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
);

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
);
