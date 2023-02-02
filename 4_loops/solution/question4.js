// 4. Write a program that will allow someone to guess a four digit pin exactly 4
// times. If the user guesses the number correctly. It prints “That was
// correct!” Otherwise it will print “Sorry that was wrong.” Program stops after the 4th attempt of if they got it right.

const defaultPin = 0000;
const guessMessage = "Please make your guess:";
const wrongMessage = "Sorry that was wrong.";
const correctMessage = "That was correct!";
const maxAttempts = 4;
let currentAttemps = 1;

for (let i = 1; i <= maxAttempts; i++) {
  const userInput = parseInt(
    prompt(
      `Attemt Remaining: ${maxAttempts - currentAttemps} \n ${guessMessage}`
    )
  );

  if (userInput === defaultPin) {
    console.log(correctMessage);
    break;
  } else {
    console.log(wrongMessage);
  }

  currentAttemps++;

  // Step 1 = Take User Input
  // Compare userInput with default input
  // if input is correct then show message Thats correct
  // if input is not correct then show message Wrong message & Give Retry
  // if Retry more than 4 then exit
}
