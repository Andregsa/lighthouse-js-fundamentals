const judgeVegetable = (vegetables, metric) => {
  let highest = 0;
  let submitter;

  for (let veggie of vegetables) {
    if (veggie[metric] > highest) {
      highest = veggie[metric];
      submitter = veggie.submitter;
    }
  }

  return submitter;
};

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

console.log(judgeVegetable(vegetables, metric));
