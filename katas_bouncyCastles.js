// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  // Code here!
  return (4 / 3) * PI * Math.pow(radius, 3);
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here!
  return PI * Math.pow(radius, 2) * (height / 3);
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too!
  return height * width * depth;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!

  let sumVol = 0;

  if (solids.length === 0) return;

  for (let solid of solids) {
    if (solid.type === "sphere") {
      sumVol += sphereVolume(solid.radius);
    } else if (solid.type === "cone") {
      sumVol += coneVolume(solid.radius, solid.height);
    } else if (solid.type === "prism") {
      sumVol += prismVolume(solid.height, solid.width, solid.depth);
    }
  }

  return sumVol;
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
