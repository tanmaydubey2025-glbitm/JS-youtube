// when we pass number its called parameter and when we call it fun its input is called argument;

// function sum(number1, number2){
//     console.log(number1 + number2);
    
// }

// sum(3,4)
// sum(3,'a')
// sum(3,null)s


function sum(number1, number2){

    return number1 + number2
}

const memo = sum(4,4)
// console.log("result: ",memo);

function loginUser(username){
    if (username === undefined) {
        console.log("please enter a user name");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUser("tanmay"));
console.log(loginUser());
