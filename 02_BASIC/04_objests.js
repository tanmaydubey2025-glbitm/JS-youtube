const tinder_User = new Object() // object by singleton

// adding values
tinder_User.id = "abc123"
tinder_User.name = "tanmay"
tinder_User.age = 19
tinder_User.isLoggesIn = true

// console.log(tinder_User);

const regularUser = {
    email: "some@gmail",
    fullname : {
        userfullname :{
            fisrtname : "tanmay",
            lastname: "dubey"
        }
    }
}

// console.log(regularUser.fullname.userfullname.fisrtname);


const obj1 = { 1:"a", 2:"b", }
const obj2 = { 3:"a", 4:"b", }
 
//const obj3 = Object.assign({}, obj1,obj2) // object.assign(target, source);
//console.log(obj3);

// by spread operator
const obj3 = {...obj1,...obj2}
// console.log(obj3);


// object inside array
const user =[
    {
        emailid: "1bc"
    },
    {
        id: "1bc"
    },
    {
        id: "1bc"
    },
]

user[1].emailid // []- for array and .email to access object value

// console.log(tinder_User);
// console.log(Object.keys(tinder_User)); // output of keys in array , important 
// console.log(Object.values(tinder_User)); // output of values in array , important 
// console.log(Object.entries(tinder_User)); // output is provides as. [ [ 'id', 'abc123' ],[ 'name', 'tanmay' ],[ 'age', 19 ],[ 'isLoggesIn', true ]]

// console.log(tinder_User.hasOwnProperty("isLoggesIn")); // asling if key exist or not


//de-structuring
const course = {
    course: "js hindi",
    fee: "999",
    courseInstr: "hitesh",
}

course.courseInstr //1st way

const {courseInstr: teach} = course // 2nd way - by de-structure
// console.log(teach);


//api basic // what is jason ^|_|^

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
