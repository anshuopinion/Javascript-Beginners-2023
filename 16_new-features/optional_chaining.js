const person = {
  name: "John",
  address: {
    city: "New York",
  },
};

// if (person.address.state) {
//   console.log(person.address.state);
// } else {
//   return undefined;
// }

console.log(person.address?.state); // undefined
