const coins = [10, 6, 5, 2];

const amountNeedToPay = 69;

// function enoughCoin(coins, amount) {
//   const moneyArray = coins.map((value, i) => {
//     if (i === 0) {
//       return value;
//     } else if (i === 1) {
//       return value * 2;
//     } else if (i === 2) {
//       return value * 5;
//     } else {
//       return value * 10;
//     }
//   });

//   const totalMoney = moneyArray.reduce((prev, curr) => prev + curr, 0);

//   console.log("moneyArray", moneyArray);
//   console.log("totalMoney", totalMoney);

//   if (totalMoney >= amount) {
//     return true;
//   } else {
//     return false;
//   }
// }

const enoughCoin = (coins, amount) =>
  coins[0] + coins[1] * 2 + coins[2] * 5 + coins[3] * 10 >= amount;

console.log(enoughCoin(coins, amountNeedToPay));
