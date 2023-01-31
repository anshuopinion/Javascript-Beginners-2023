// Using Switch Statement Check number is divisible by 5 and 15

const num = 35;

switch (true) {
  case num % 5 === 0:
    console.log("Number is divisible by 5 ", num);
    break;
  case num % 5 === 0 && num % 15 === 0:
    console.log("Number is divisible by 5 and 15", num);
    break;
  default:
    console.log("not divisible ");
    break;
}
