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

console.log("result:",result);