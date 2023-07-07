// Importing the  fs(file system) module
const fs = require("fs");

// Writing a file 'read.txt' and  passing a callback.
fs.writeFile("read.txt", "Today is a good day!", (error) => {});

// Appending data to existing file and agin passing callback.
fs.appendFile("read.txt", "\nMy channel", () => {
  console.log("It is appended successfully");
});

// Reading the file and calling back,passing error and data (buffer) as parameter.
fs.readFile("read.txt", "UTF-8", (error, data) => {
  console.log(data);
});
