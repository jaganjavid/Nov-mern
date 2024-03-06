
const name = "Javid";
const age = 26;
const job = "Web Developer";
const city = "Chennai";
let val;


// Without template strings

// val = "My name is " + name + " " + "im" + " " + age + " " + "My job is" + " " + job + " " + "from " + city;

// With template strings

val = `My name is ${name} im ${age} my job is ${job} from ${city}`;


console.log(val);