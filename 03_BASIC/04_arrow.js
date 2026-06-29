
const user = {
    username: "atul",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);  // this talk about current context {-}
        
    }


}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // provide empty{}


 function chaipeloo(){
    let userName = "tanmay"
    // console.log(this.userName); // o/p => undefined
 }

 chaipeloo()

// ++++++++++++++++++++++arrow function++++++++++++++

const chai = () => {
    let userName = "tanmay"
    // console.log(this); // o/p => {}
 }

chai()

// explicit return
// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// implicit return of arrow function
// const addTwo = (num1,num2) => (num1 + num2)

const addTwo = () => ({userName: "tanmay"})

console.log(addTwo());
