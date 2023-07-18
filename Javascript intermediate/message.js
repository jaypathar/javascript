// declaring a variable for export.
let message = "This is a variable in message.js";

// declaring a function for export.
function user(name, age) {
  console.log(`My name is  ${name}  and I am ${age} old.`);
}

// declaring a class.
class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }

  getData() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Genre: ${this.genre}`);
  }
}

// exporting a default function.
export default function () {
  console.log("This is a default function.");
}

// exporting variable, function, class.
export { message, user, Book };
