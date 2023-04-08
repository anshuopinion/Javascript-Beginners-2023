// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
// };

// const { firstName, lastName, age } = person;

// console.log(firstName, lastName, age);
// console.log(person.firstName, person.age, person.lastName);

// const array1 = [1, 2, 3];

// const [a, b, c] = array1;

// console.log(a, b, c);

// const firstName = "Rohan";

// const person = {
//   firstName: "Anshu",
//   lastName: "Doe",
//   age: 30,
// };

// const { firstName: objectFirstName } = person;

// console.log(firstName, objectFirstName);

// const arrayOfNumbers = [2, 4, 6, 8, 9];

// function sumOfNumbers(value1, value2, value3) {
//   return value1 + value2 + value3;
// }

// // console.log(sumOfNumbers(1, 2, 3));
// console.log(sumOfNumbers(...arrayOfNumbers));

function sumOfNumbers(...values) {
  //   return value1 + value2 + value3;
  return values.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
  }, 0);
}

console.log(sumOfNumbers(1, 4, 6,45,45,88));
