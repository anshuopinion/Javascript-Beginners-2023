// array memory leak

const array = [];
for (let i = 1; i > 0; i++) {
  array.push(i);
}
