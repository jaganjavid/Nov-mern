

const person = {
    // Properties
    firstName:"Jagan",
    lastName:"Javid",
    age:26,
    email:"jagan@gmail.com",
    haskids:true,
    hobbies:["music", "sports"],
    address:{
        city:"Chennai",
        state:"TN"
    },
    // Method
    getFullName: function(){
        return person.firstName + " " + person.lastName
    }
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.email);
console.log(person.haskids);
console.log(person.hobbies[1]);
console.log(person.address.state);
console.log(person.getFullName());