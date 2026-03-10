//const tinderUser = new Object() // singleton object
 const tinderUser = {} // non-singelton object
 
 tinderUser.id = "15i98"
 tinderUser.name = "sweety"
 tinderUser.isLoggedIn = false
 
//console.log(tinderUser);

const regularUser = {
    email:"98sdmail.com",
    fullname: {
        userfullname:{
            firstname:"sara",
            lastname: "khan"
        }
    }
}

//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname);
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const Users = [
    {
        id: 1,
        email: "anbmail.com"
    },
    {
         id: 1,
        email: "anbmail.com"
    },

]

Users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Object de-structure

const course = {
    coursename: " javaScript course",
    price:"1000",
    courseInstructor: "hitesh sir"
}

//course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);
console.log(instructor);

// API 
// in JSON keys and values both are string

/*{
    "name": "hitesh sir",
    "coursename": "javascript course",
    "price": "free"
}*/

[
{},
{},
{}
]