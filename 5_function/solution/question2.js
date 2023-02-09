// Question 2
// Create a function that calculate area of circle
// Function name should be calcAreaOfCicle()
// create another function calcSquare()
// Pass calcAreaOfCicle function as callback of calcSqaure
// like - calcSqaure(calcAreaOfCircle)
// store value of calculated value in result
//  like - result = calcSqaure(calcAreaOfCircle)
// then print result;

const calcAreaOfCicle = (radius) => {
  return Math.PI * radius * radius;
};

console.log("Area of Circle", calcAreaOfCicle(8));

const calcSqaure = (callback, radius) => {
  const areaOfCircle = callback(radius);
  return areaOfCircle * areaOfCircle;
};

const result = calcSqaure(calcAreaOfCicle, 8);

console.log("Result", result);
