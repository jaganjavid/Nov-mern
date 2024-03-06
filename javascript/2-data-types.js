
// Primitive types and Reference Types

// can only hold a single value

// String
const name = "Jagan";

// Number 
const age = 26;

// Boolean
const hasKids = true;

// Null
const fireGun = null; 

// Undefined
let undef;



// console.log(undef);
// console.log(typeof undef);

// Reference Types

// can hold a multiple value

const myArr = ["jagan", "javid", 26, true, null, undefined, [1,2,3], {a:"a"}];

console.log(myArr);
console.log(typeof myArr);

// Object 

// Key:value or Name:value pairs

const person = {
    // Property
    firstName: "Jagan",
    lastName:"Javid",
    age:26,
    hasKids: true,
    // Method
    getFullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(person);
console.log(person.getFullName());
console.log(typeof person);


