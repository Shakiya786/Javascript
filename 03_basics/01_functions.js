// functions

function addTwoNumbers(number1,number2){
    console.log(number1 + number2);
}

//addTwoNumbers(5,6)
//addTwoNumbers(5,"6")  // treated as string 
//addTwoNumbers(5,null)

function addTwoNumbers(number1,number2){
    //let result = number1+number2
   // return result
   return number1 + number2
}
const result = addTwoNumbers(5,6)

//console.log("result:",result);

function loginUserMsg(username = "Sam"){
    if(username===undefined){ // equivalent to if(!username)
           console.log("please enter a username");
           return
    }
    return`${username} just logged in`
}

//console.log (loginUserMsg("hero"))
//console.log(loginUserMsg())

function calculateCarPrice(val1, val2, ...num1){ // ... it is rest operator or spread operator depending on its uses
    return num1
}

//console.log(calculateCarPrice(200 ,400 , 650 ,1000))

const user = {
     username:"hero",
     price:200
}

function handleObject(object){
    console.log(`Username is ${object.username} and price is ${object.price}`);
}
handleObject(user)


