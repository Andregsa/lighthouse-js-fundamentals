const smartGarbage = (trash, bin) => {
  bin[trash]++;

  return bin;
};

console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));
