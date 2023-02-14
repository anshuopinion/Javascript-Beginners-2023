const fact = 6;
function factorial(num) {
  const value = new Array(num)
    .fill(1)
    .map((value, i) => value * i + 1)
    .reduce((prev, curr) => prev * curr, 1);
  //   console.log(value);
  return value;
}

// [1, 1, 1, 1, 1];
console.log("Factorial of ", fact, "=", factorial(fact));
