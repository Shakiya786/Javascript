const user = {
    username: "soni",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
       // console.log(this); // access current context
    }
}

 //user.welcomeMessage()
 //user.username = "sam"
 //user.welcomeMessage()

  //console.log(this); // in browser it will give window object but in node environmet it will give empty object.

 /* function code(){
    let username="soni"
    console.log(this.username)
    //console.log(this)
  }

  code()*/  

  /*const code = function(){
    let username="soni"
    console.log(this.username)

}*/

// Arrow function
/*const code = () => {
    let username="soni"
    //console.log(this.username)
    console.log(this)
      
}
code()*/

/*const addTwo = (num1,num2) =>{
    return num1+num2
}
console.log(addTwo(3,5))*/

const addTwo = (num1,num2) => (num1+num2)

console.log(addTwo(3,5))