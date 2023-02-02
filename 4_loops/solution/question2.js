// Given a number n Calculate the factorial of the number

// 4 = 4 X 3 X 2 X 1 = 24
// 3 =  3 X 2 X 1 = 6

const inputNumber = 4;
let result = 1;
// result = 1 * 1 = 1
// result = 1 * 2 = 2
// result = 2 * 3 = 6
// result = 6 * 4 = 24

for (let i = 1; i <= inputNumber; i++) {
  result = result * i;
}

console.log(`factorial of  ${inputNumber} =   ${result}  `);
