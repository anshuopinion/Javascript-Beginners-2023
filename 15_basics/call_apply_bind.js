// call apply bind

// const student1 = {
//   name: "Anshu Raj",
//   marks: 25,
//   isPassed: function () {
//     if (this.marks > 25) {
//       console.log("You are passed!");
//     } else {
//       console.log("You are failed!");
//     }
//   },
// };

// const student2 = {
//   name: "Rohan",
//   marks: 88,
// };

// student1.isPassed.call(student2);

const address1 = {
  city: "Patna",
  state: "Bihar",

  address: function (street, pincode) {
    console.log(`${street}, ${pincode},${this.city},${this.state}`);
  },
};
const address2 = {
  city: "Ranchi",
  state: "Jharkhand",
};
// For Call
address1.address.call(address2, "Patratu", 845475);
// For Apply
address1.address.apply(address2, ["Patratu", 845475]);
// For Bind

const bindAddresValue = address1.address.bind(address2, "Patratu", 845475);

bindAddresValue()