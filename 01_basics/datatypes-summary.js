//  Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score =100
const scoreValue= 100.3

const isLoggedIn=false
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
const bigNumber = 123788990n


// Reference (Non primitive)

// Array, Objects, Functions

const subject= ["science", "maths", "english"];
let myObj = {
    name : " soni ",
    age : 23,
}

const myFunction= function(){
    console.log("Hello world");

}

console.log(typeof subject);