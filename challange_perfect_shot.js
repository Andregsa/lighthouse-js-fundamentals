const finalPosition = (moves) => {
  // Your code in here ...
  const movesToNumX = {
    west: -1,
    east: 1,
  };
  const movesToNumY = {
    north: 1,
    south: -1,
  };

  let finalPos = [0, 0];

  for (let i of moves) {
    if (i === "north" || i === "south") finalPos[1] += movesToNumY[i];
    else finalPos[0] += movesToNumX[i];
  }

  return finalPos;
};

const moves = ["north", "north", "west", "west", "north", "east", "north"];

console.log(finalPosition(moves));
