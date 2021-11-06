const checkAir = function (samples, threshold) {
  // Code here!

  //First filter the array by only dirty string and them find the quantity of this new array of "dirty" strings
  let countPolutted = samples.filter((x) => x == "dirty").length;

  //Threshold check: if polluted rate is higher than threshold return polluted
  if (countPolutted / samples.length > threshold) return "Polluted";

  //Otherwise, return Clean
  return "Clean";
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
