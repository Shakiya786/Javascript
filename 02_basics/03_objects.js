//singleton
//object.create

//object literals

const mySym = Symbol("key1")
const jsUser = {
      name:" Salman",
      "full name" : "Salman khan",
     [mySym]:"mykey1",
      age: 20,
      location: "kolkata",
      email:"abc@.com",
      isLoggedIn: false,
      lastLoginDays: ["Monday","Saturday"]
}

//console.log(jsUser.email)
//console.log(jsUser["email"])
//console.log(jsUser["full name"])
//console.log( jsUser[mySym])

jsUser.email = "dab@mail.com"
//Object.freeze(jsUser)
jsUser.email = "oksn@mail.com"
//console.log(jsUser)

jsUser.greeting = function(){
      console.log("Hello js User");
}

console.log(jsUser.greeting);

jsUser.greeting2 = function(){
      console.log(`Hello js User,${this.name}`);
}
console.log(jsUser.greeting2());