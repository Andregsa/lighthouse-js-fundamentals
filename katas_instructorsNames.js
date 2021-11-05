const instructorWithLongestName = function (instructors) {
  // Put your solution here

  //declare a variable that will store the longest name and assign to the first element of the array of objects
  let longestName = instructors[1];

  //Loop through the array of instructors
  for (let instructor of instructors) {
    //check if the length of instructor is higher than the length of the longestName
    if (instructor.name.length > longestName.name.length) {
      longestName = instructor;
    }
  }

  return longestName;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilias", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
