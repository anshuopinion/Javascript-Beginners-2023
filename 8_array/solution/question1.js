// function concat(...num) {
//   console.log(num.flat(1));
//   return num.flat(1);
// }

const concat = (...num) => num.flat(1);

console.log(concat([1, 2, 3], [4, 5], [6, 7]));
