

// Create a array

const numbers = [5,43,54,23,4,766,87,34,2];


let val;

val = numbers;

// Get the array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers)

// Get a single value
val = numbers[1];

// Change array index value
// val = numbers[4] = 5;

// Find the index of value

// If array match is return the index number if not -1

// val = numbers.indexOf(57);


// Mutating array

// Add on the end
// numbers.push(1000);

// Add on the front
// numbers.unshift(200);

// Take off from end
// numbers.pop();
// numbers.pop();
// numbers.pop();

// Take off from front
// numbers.shift();

const fruits = ["Apple", "Orange", "Kiwi"];


// Splice

// To remove
// fruits.splice(1,1);

// To Add
fruits.splice(1,0, "Lemon");

console.log(fruits);