// Variables in the JS

var companyName = "Saasaro"; // used in the past currently it is not used in production because it have some problem
let myAge = 25; // we used this instead of var in the production and it blocked scoped variable  { value can be change after declariation }
const myName = "Deepak"; //it does not change the value if we assign the value

// Data types

//premitive Data type
let age = 25; // Number
let Name = "Deepak"; // string
let isCompleted = false; // boolean
let x = null; // null
let y; // undefined
let sym = Symbol("unique"); // symbol
let bigNumber = 1234567898765432; // Bigint

// Non-premitive Data type

// Object
let object = {
  myAge: 25,
  name: "Deepak",
};

//Array

let rendomNum = [1, 2, 3, 5, 87, 23];

//function

function car() {
  console.log("I buy a new Car.");
}



// Condition Statement in js

if (age>18) {
    console.log('He is a adult');
} else {
    console.log('Not a Adult');
}