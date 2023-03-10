// Syncronous Programming

// console.log("Get");
// console.log("Set");
// console.log("Ready");
// console.log("Go");

// Asyncronous Programming

// console.log("Get");
// setTimeout(() => {
//   console.log("Set");
// }, 2000);
// console.log("Ready");
// console.log("Go");

// callbacks

// function logGet() {
//   console.log("Get");
// }

// logGet();

// function logSet(callback) {
//   setTimeout(() => {
//     console.log("Set");
//     callback();
//   }, 2000);
// }

// logSet(logReadyAndGo);

// function logReadyAndGo() {
//   console.log("Ready");
//   console.log("Go");
// }

// function fetchData(callback) {
//   setTimeout(() => {
//     const data = [1, 2, 3, 4, 5];
//     callback(data);
//   }, 2000);
// }

// function processData(data) {
//   console.log(data.map((item) => item * 2));
// }

// fetchData(processData); // Pass processData function as a callback

// Callback hell

// getData((error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     processData(data, (error, processData) => {
//       if (error) {
//         console.log(error);
//       } else {
//         saveData(processData, (error) => {
//           if (error) {
//             console.log(error);
//           } else {
//             console.log("Data saved successfully");
//           }
//         });
//       }
//     });
//   }
// });

// const channelName = new Promise((resolve, reject) => {

//   return resolve("Do Some Coding");
// });

// channelName.then((channel) => {
//   console.log(channel);
// });

// async function channelName() {
//   return "Do Some Coding";
// }

// channelName.then((channel) => {
//   console.log(channel);
// });

// Promises

// Pending -> Starting Stage
// Fulfilled -> When Promise Resolved
// Rejected  -> When Promise is Rejected

// const channel = new Promise((resolve, reject) => {
//   const isError = true;

//   if (isError) {
//     reject("Something went wrong");
//   } else {
//     resolve("Anshu Opinion");
//   }
// });

// // how to handle resolve and reject

// channel
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// how to uses promises

// function logGet() {
//   console.log("Get");
// }

// logGet();

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Set");
//     resolve();
//   }, 2000);
// });

// promise
//   .then(() => {
//     logReadyAndGo();
//   })
//   .catch(() => {
//     console.log("this is error");
//   });

// function logReadyAndGo() {
//   console.log("Ready");
//   console.log("Go");
// }

// Multiple Promises + Chaining

// const fetchData = new Promise((resolve, reject) => {
// //   resolve([1, 2, 3, 4]);
//   reject(new Error("i am error"));
// });

// fetchData
//   .then((data) => {
//     console.log("then1", data);

//     return data.map((value) => value * 2);
//   })
//   .then((data) => {
//     console.log("then2", data);
//     return data.map((value) => value - 1);
//   })
//   .then((data) => {
//     console.log("then3", data);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("I will trigger always");
//   });

// const p1 = Promise.reject("I will always trigger catch block");
// const p2 = Promise.reject("I will always trigger then block ");
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("promise 3 success");
//   }, 4000);
// });
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("promise 4 success");
//   }, 2000);
// });

// Promise.all

// const promises = Promise.all([p1, p2, p3]);

// promises
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// Promise allSettled

// const promises = Promise.allSettled([p1, p2, p3]);
// promises.then((data) => {
//   console.log(data);
// });

// Promise Race

// const promise = Promise.race([p3, p4]);
// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

// Promise Any

// const promises = Promise.any([p1, p2, p3, p4]);

// promises
//   .then((data) => {
//     console.log("then block");
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

//////////////////////////////////
// Async & Await

// const channelName = new Promise((resolve, reject) => {
//   const isError = true;

//   if (isError) {
//     reject("Something went wrong");
//   } else {
//     resolve("Anshu Opinion");
//   }
// });

// channelName
//   .then((channel) => {
//     console.log("old promise");

//     console.log(channel);
//   })
//   .catch((error) => {
//     console.log("old promise error");

//     console.log(error);
//   });

// const channelNameAsync = async () => {
//   throw "error case";
// };
// async function channelNameAsync() {
//   return "Do Some Coding";
// }

// channelNameAsync()
//   .then((channel) => {
//     console.log("async");

//     console.log(channel);
//   })
//   .catch((error) => {
//     console.log("async error");

//     console.log(error);
//   });

// Await

// const fetchData = new Promise((resolve, reject) => {
//   const error = true;

//   if (error) {
//     reject("Some Error");
//   }

//   setTimeout(() => {
//     const data = [1, 2, 3, 4, 5];
//     resolve(data);
//   }, 2000);
// });

// fetchData
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Await Example

const fetchDataAsync = async () => {
  const error = true;

  if (error) {
    throw new SyntaxError("Hello this is error");
  }
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5]);
    }, 2000);
  });
};

async function processData() {
  try {
    const data = await fetchDataAsync();

    try {
      const data = await fetchDataAsync();
      console.log(data);
    } catch (error) {
      console.error(error.name);
    }

    console.log(data);
  } catch (error) {
    console.error(error.name); // "Error"
    console.error(error.message); // "Cannot divide by zero"
    console.error(error.stack); // stack trace of the error
  } finally {
    console.log(" i will trigger every time");
  }
}

processData();
