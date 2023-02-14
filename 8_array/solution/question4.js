function secondLargest(numbers) {
  return numbers.sort((a, b) => b - a)[1];
}

console.log(secondLargest([25, 143, 89, 13, 105]));
