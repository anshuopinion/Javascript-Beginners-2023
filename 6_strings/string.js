// const name = "Anshu";
// const channel = "Do Some Coding";

// const channel = " Do some coding ";

// const message = 'Don't do this';
// method 1
// const message = "Don't do this";
// method 2
// const message = 'Don\'t do this\'';
// for creating new line
// const message = "This is best course on entire youtube. \nI am providing ";
// for creating spacing
// const message = "This is best course on entire youtube. \t \t\tI am providing ";

// template literals

// const name = "Anshu Raj";

// const message = "Hello Anshu how are you ";

// const greetings = (name) => {
//   //   console.log("Hello Anshu how are you?");
//   console.log("Hello " + name + " how are you?");
//   console.log(`Hello ${name} how are you? fskjdflkdsjfk`);
// };

// greetings("Anshu");

// // Change String to Upper Case

// channel.toUpperCase(); //  -> "DO SOME CODING"
// console.log(channel.toUpperCase());

// Change String to Lower Case

// channel.toLowerCase(); //  -> "do some coding"

// Trim Text from String
// const greeting = "   Hello world!   ";
// console.log(greeting.trimStart());

// console.log(greeting);
// // Expected output: "   Hello world!   ";

// console.log(greeting.trim());
// // Expected output: "Hello world!";

// Get length of string

// channel.length; //  -> 14
// console.log(channel.length);

// Get character at index

// channel.charAt(0); //  -> "D"
// console.log(channel.charAt(8));

// Get character code at index

// channel.charCodeAt(0); //  -> 68
// console.log(channel.charCodeAt(1));

// Replace Coding with Learning

// channel.replace("Coding", "Learning"); //  -> "Do Some Learning"

// console.log(channel.replace("o", "e"));

// Split string into array

// channel.split(" "); //  -> ["Do", "Some", "Coding"]

// console.log(channel.split(" ")[1]);
// console.log(channel.split("o"));

// // Continate string "Do Some Coding" with " is fun"

// channel.concat(" is fun"); //  -> "Do Some Coding is fun"

// // Get Sub String from index 3 to 7

// channel.substring(3, 7); //  -> "Some"

// console.log(channel.substring(8));

//  Check channel start with "Do"

// channel.startsWith("Do"); //  -> true

// // Check channel end with "ing"

// channel.endsWith("ing"); //  -> true

// // Check channel includes "Some"

// channel.includes("Some"); //  -> true

// // Get index of "Some"

// channel.indexOf("Some"); //  -> 3

// Get last index of "o"

// channel.lastIndexOf("o"); //  -> 11

// let channel = "Do Some Coding";
// // Search string
// const paragraph =
//   "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

// // Any character that is not a word character or whitespace
// const regex = /\bDog\b/gi;

// paragraph.search(regex); //  -> 40

// // Match o in string

// channel.match(/o/g); //  -> ["o", "o"]
