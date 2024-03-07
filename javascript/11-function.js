// Two Phases

// 1 - Creation phase
// 2 - Excution

// Function statement

greet("Arun", "Kumar");

function greet(firstName = "John",lastName = "Doe"){

    // if(typeof firstName === "undefined"){
    //     firstName = "John";
    // }

    // if(typeof lastName === "undefined"){
    //     lastName = "Doe";
    // }

   console.log(`Hello ${firstName} ${lastName}`)
}

greet();
// greet("Arun");

// Function expression


var add = function(x,y){
  console.log(x+y);
}

add(5,5);





