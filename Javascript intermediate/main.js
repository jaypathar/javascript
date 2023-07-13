// importing variable from message.
import { message, user, Book } from "./message.js";

// there can only be one default as(alias) display().
import { default as display } from "./message.js";

// printing message in DOM.
document.body.innerHTML = message;

// printing message on console.
console.log(message);

// imported and called function user().
user("Sam", 26);

// imported class book and creating object.
let book1 = new Book("Harry Potter", "J.K.Rowling", "Fantasy");

// accessing a function getData() in class book.
book1.getData();

// importing default function as display().
display();
