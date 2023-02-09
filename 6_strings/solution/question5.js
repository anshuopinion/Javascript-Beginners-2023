// 5. Extract Amount from string → “ I bought car at ₹ 550000 “

const sample = "I bought car at ₹ 550000 ";
const result = sample.split(" ")[5];

console.log(result);
