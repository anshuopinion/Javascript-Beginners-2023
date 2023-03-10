// console.log(window.alert("I am window"));
// console.log(alert("I am window"));

// setTimeout

// const message = () => {
//   console.log("Mujhe kuch der bad run karo");
// };
// const timeout = setTimeout(message, 2000);

// clearTimeout(timeout);

// const interval = setInterval(message, 500);

// setTimeout(() => {
//   clearInterval(interval);
// }, 5000);

// Dialog

// alert("This is message")
// const inputValue = prompt("Enter any input");
// console.log(inputValue);
// const isConfirm = confirm("are you a developer ?");
// console.log(isConfirm);

// console.log(location.href);
// console.log(location.hostname);
// console.log(location.port);

// Console log methods

// const users = {
//   name: "Anshu Raj",
//   channel: "Do Some coding",
//   work: "Developer",
// };
// const colors = ["orange", "green", "red"];

// console.table(colors);

console.time("Function Timing");

function timeRun() {

    
  //   new Array(5000).forEach((_, i) => {
  //     console.log(i);
  //   });

  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
 

  
}
timeRun();

console.timeEnd("Function Timing");
