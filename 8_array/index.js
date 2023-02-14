// Basics of array
// const even = new Array();

// const evenObjects = {
//   0: 2,
//   1: 4,
//   2: 6,
//   3: 8,
//   4: 10,
// };

// const two = evenObjects[0];

// const evenNumbers = [2, 4, 6, 8, 10];
// const twoArray = evenNumbers[0];

// CRUD -> CREATE , READ , UPDATE , DELETE ( Array)

// CREATE
// const days = [

// ];

// // Push -> Add elements from end

// days.push("Sunday");

// // UnShift -> Add elements from front

// days.unshift(
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// );

// // console.log("Days", days);
// console.log({ days });

// READ

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// const sunday = days[0];
// const friday = days[5];

// Update

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// days[7] = "S";

// console.log(days);

// DELETE

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// POP -> removes last element
// days.pop();

// Shift -> Removes first element
// days.shift();

// Splice -> removes desired elements -> Orignal array modify
// days.splice(1,3)

// slice -> slice elements from Orignal array -> then returns new array
// const slicedDays = days.slice(1, 5);

// Filter -> we can removes elements using condition

// const filteredDay = days.filter((value, index, array) => {
//   return value.length > 6;
// });

// console.log({ days, filteredDay });

// LOOPS

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// Simple Loop
// for (let i = 0; i <= days.length - 1; i++) {
//   console.log(`Today is ${days[i]}`);
// }

// For of Loop

// for (let day of days) {
//   console.log(`Today is ${day}`);
// }

// ForEach Loop

// days.forEach((day, index) => {
//   console.log(`Today is ${day} , ${index} `);
// });

// Map Loop

// const newDays = days.map((day, index) => {
//   console.log(`Today is ${day} , ${index} `);

//   return day[0];
// });

// console.log(newDays);

// More Methods

// Find

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((value, i, obj) => {
//   return value > 8;
// });

// console.log(found);

// Index of

// const array1 = [5, 12, 8, 130, 44, 8];

// const index = array1.indexOf(8, 4);

// console.log(index);

// Find Index

// const array1 = [1, 1, 3, 7, 5, 6];

// const index = array1.findIndex((value) => {
//   if (value % 2 === 0) {
//     return value;
//   }
// });

// console.log(index);

// Concat

// const array1 = ["a", "b", "c"];
// const array2 = ["e", "d", "f"];

// const newJoinedArray = array1.concat(array2, array1);

// console.log(newJoinedArray);

// at

// const array1 = [5, 12, 8, 130, 44];

// let index = 2;

// console.log(
//   `Using an index of ${index} the item returned is ${array1.at(index)}`
// );

// Array Checker Methods

// EVERY

// const array1 = [1, 30, 39, 29, 10, 13, 31];

// console.log(
//   array1.every((value) => {
//     return value < 40;
//   })
// );

// Some

// const array1 = [55, 50, 5];

// console.log(
//   array1.some((value) => {
//     return value < 40;
//   })
// );

// Include

// const array1 = [1, 30, 39, 29, 10, 13, 31, 30];

// console.log(array1.includes(30, 4));

// IsArray

// const array1 = [];
// const isArray = Array.isArray(array1);

// console.log(isArray);

// REDUCE

// const array1 = [1, 2, 3, 4];

// const sum = array1.reduce((prevValue, currentValue) => {
//   return prevValue * currentValue;
// }, 1);

// console.log(sum);

// Sort

// const months = ["March", "Jan", "Feb", "Dec"];
// const array1 = [1, 30, 4, 21, 100000];

// console.log(array1.sort((a, b) => b - a));

// JOIN
// const elements = ["Fire", "Air", "Water"];
// console.log(elements.join("-"));

// const date = [10, 12, 2022];
// console.log(date.join("/"));


// flat

// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// // Expected output: Array [0, 1, 2, 3, 4]

// const arr2 = [0, 1, 2, [[[3, 4]]]];

// console.log(arr2.flat(3));
// Expected output: Array [0, 1, 2, 3, 4]