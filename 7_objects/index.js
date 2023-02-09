// Objects
// Two methods for creating objects
// const student = {};
// const student = new Object();

// Why we use objects
// to minimise use of multiple variables
// const studentRoll = 55;
// const studentFirstName = "Rohan";
// const studentLastName = "raj";
// const studentClass = "12";

// const rollString = "roll";
// const student = {
//   roll: 55,
//   firstName: "Rohan",
//   lastName: "raj",
//   class: "12",
// };

//how to access objects

// const roll = student[rollString];
// const fullName = student.firstName + " " + student.lastName;
// console.log(fullName);

// how to create and update values in objects

// student.weight = "50kg";

// student["roll"] = 50;

// console.log(student);

// const addharCardData = {
//   firstName: "Rohan",
//   lastName: "kumar",
//   dob: "01-01-2000",
//   adharNo: 479382749328749,
//   address: { village: "xyz", district: "ranchi", state: "jharkhand" },
//   normalArray: ["45", "45"],

//   getFullName: function () {
//     return this.firstName + "" + this.lastName;
//   },
// };

// this === addharCardData

// const village = addharCardData.address.village;

// console.log(addharCardData.getFullName());

// Constructor function
// it start with Capital later

// function Person(firstName, lastName, age) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.age = age;
//   this.getFullName = function () {
//     return this.firstName + "" + this.lastName;
//   };
// }
// we we create objects using constructor function then we need to use new keyword before it

// const person1 = new Person("Anshu", "Raj", 95);
// const person2 = new Person("Anshu2", "Raj", 95);

// console.log(person1.getFullName());
// console.log(student);

// how to duplicate objects
// obj1 = #43393
// obj2 =  #43393

// const obj1 = { title: "obj1" };
// const obj2 = obj1;

// obj2.title = "obj2";

// console.log("obj1", obj1);
// console.log("obj2", obj2);

// Spread operator // deep clone
// obj1 = #43393
// obj2 =  #5454
// const obj1 = { title: "obj1" };
// const obj2 = { ...obj1 };
// obj2.title = "obj2";
// console.log("obj1", obj1);
// console.log("obj2", obj2);

// How to loop over Objects

// const student = {
//   roll: 55,
//   firstName: "Rohan",
//   lastName: "raj",
//   class: "12",
// };

// for (let key in student) {
//   console.log(key);
// }

// console.log(Object.entries(student));

// struture of map
// [
//   ["roll", 55],
//   ["firstName", "Rohan"],
//   ["lastName", "raj"],
// ];

// for (let [key, value] of Object.entries(student)) {
//   console.log("key", key);
//   console.log("value", value);
// }
