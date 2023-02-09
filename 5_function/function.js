// const height = 100;
// const width = 150;
// const area = height * width;
// console.log("Area", area);
// const height1 = 200;
// const width1 = 150;
// const area1 = height1 * width1;
// console.log("Area", area1);

// function calculateArea(heightValue = 1, widthValue = 1) {
//   // console.log("height", heightValue, "width", widthValue);
//   const height = heightValue;
//   const width = widthValue;
//   const area = height * width;
//   //   console.log("Area", area);
//   return area;
// }

// console.log("height", height);

// const area1 = calculateArea(500, 600);

// console.log("area", area1);

// const login = function (username, password) {
//   console.log("username", username);
// };

// login("Anshu");

function printMessage(message, maiFunctionHu) {
  console.log(message);
  maiFunctionHu();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

printMessage("Hello", sayGoodbye);

// // // using anonymous function

// printMessage("anonymous", function () {
//   console.log("This is from anonymous");
// });

// (function callAutomaticaly() {
//   console.log("This is auto");
// })();

// function normalFunction() {}
const calculateArea = (height, width) => {
  return height * width;
};

const calculateArea1 = (height, width) => height * width;

const area1 = calculateArea(55, 55);

console.log("Area", area1);
