/*
The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

Given the after-tax income as `ati`, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

@Werdna
*/

const earnings = 10000;

const percentageOfAmount = (amount, percentage) => {
  return (amount * percentage) / 100;
};

const fiftyThirtyTwenty = (amount) => {
  return {
    Needs: percentageOfAmount(earnings, 50),
    Wants: percentageOfAmount(earnings, 30),
    Savings: percentageOfAmount(earnings, 20),
  };
};

console.log(fiftyThirtyTwenty(earnings));
