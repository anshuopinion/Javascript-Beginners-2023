// Nullish coalescing operator ??

// const person = {
//   name: "John",
//   address: {
//     city: "New York",
//   },
// };

// console.log(person.address?.state ?? "Jharkhand");

let address = null;

address ??= "Jharkhand";

console.log(address);
