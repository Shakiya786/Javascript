// if 
const  isUserloggedIn = true
const temperature = 40

// if (temperature < 50){
//     console.log("less than 50");

// }
// console.log("execute");

// < , > ,<= , >= , == ,!= , ===
// === triple equal check equality as well as the data type 

// const score = 150

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

const balance = 1000

//if(balance > 500) console.log("test"); // implicit scope

// if(balance > 500) {
//     console.log("less than");

// } else if(balance < 800){
//      console.log("less than 800");

// }else if (balance < 900){
//     console.log("less than 900");
// }else {
// console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
    
}
 
if (loggedInFromGoogle || loggedInFromEmail){
     console.log("User logged in");
}