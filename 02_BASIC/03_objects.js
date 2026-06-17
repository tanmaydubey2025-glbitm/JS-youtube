// singleton -  construction_method se banta hai
//object.create => iise construction_method bolte hai 


// not singleton:-
// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Tanmay",
    "full Name": "TANMAY DUBEY",
    [mySym]: "myKey1",// using symbol as key we need [] brakets, it refers the symbol
    age: 19,
    location: "nodia",
    email: "tanmay@gmail",
    isLoggedIn: false,
    LastLogin: ["MONDAY"]
}// this is an object

// console.log(JsUser.email); // noob cases - not indepth access
// console.log(JsUser["email"]); // pro cases - indepth access
// console.log(JsUser["full Name"]);

// console.log(JsUser[mySym]);

JsUser.email = "Tanmay.dubey.gltitm" // change iin email

// Object.freeze(JsUser) // it freezes and doesnt not allow changes

// for ex:-
JsUser.location = "PUNAJAB"
// console.log(JsUser["location"]); // doest not propogate in o/p due to freeeze

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello tanmay");
}

JsUser.greetingTwo = function(){
    console.log(`hello js user ,${this.name}`); // `` => option + ₹    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
