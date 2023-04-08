// function* work() {
//   yield "Running";

//   yield "Bathing";

//   yield "Sleeping";
// }

// const generatorFn = work();

// console.log(generatorFn.next());
// console.log(generatorFn.next());
// console.log(generatorFn.next());
// console.log(generatorFn.next());

function* generateId() {
  let id = 0;

  while (true) {
    yield id;
    id++;
  }
}

const idGenerator = generateId();
console.log(idGenerator.next());
console.log(idGenerator.next());
console.log(idGenerator.return());
console.log(idGenerator.next());

