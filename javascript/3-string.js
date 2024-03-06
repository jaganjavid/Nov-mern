

const firstName = "Jagan";
const lastName = "Javid";
const age = 26;

let val;

val = firstName;

// Concatenation
val = firstName + " " + lastName;

// Append
val = "John";
// val = val + " Doe";
val += " Doe";

// Length
val = firstName.length;

// Change case
val = firstName.toLowerCase();
val = firstName.toUpperCase();

// Get the index of string
val = firstName[0];
val = firstName[1];
val = firstName[6];

// CharAT
val = firstName.charAt(3);

// Get the last Index
val = firstName.charAt(firstName.length - 1);

// Slice
const fruit = "Apple";
val = fruit.slice(0,3);


console.log(val);