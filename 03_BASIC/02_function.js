// 1. object in function
// rest operator (...val_1)
function calCartPrice(val1, val2, ...num1){ // first value in val1 2nd in val2 and rest of them form array
    return num1
}

// console.log(calCartPrice(200,300,400.2000));

const user = {
    username: "tanmay",
    price: 200
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

// handleObject({
//     username: "sam",
//     price: 500
//  }) // passing object directly




// 2. array in function
const newArray = [200,300,400,500]

function returnSecondvalue(getArray){
    return getArray[1]
}

// console.log(returnSecondvalue(newArray));

// console.log(returnSecondvalue([200,600,1000])); //passing direct value 

