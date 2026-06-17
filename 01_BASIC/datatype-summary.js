// # PRIMITIVE TYPE

// 7 TYPES of primitive
// : String, Number, Boolean, null, undefined, Symbol,  BigInt

//**JavaScript is a dynamically typed language
// because we need not tpo define its data type
// its type is done while runtime rather than while compilation   */

const id = Symbol("234")
const anotherid = Symbol("234")

console.log(id == anotherid); // false => reason symbol provide diff unique value



// # REFRENCE TYPE(non primitive)

//Array, Objects, Functions

//objet ex
let user = {
    email: "dfsgfsdg",
    phoneNumber: "254313134141",
    moneyInAccount: 43432343423423
}



console.log(typeof null);

//********************************************************** */


// type of memory

// STACT AND HEAP MMEMORY
// primitive type uses stack , relative use heap memory

//stack examople
let myYoutubename = "tanmay dubey"
let anotherName = myYoutubename
anotherName = " jkrajgehfhz"

// stack memory pass a copy instead of real value

let userOne = {
    email:  "user.com",
    phoneNumber: "2313134141",
    moneyInAccount: 43432423423
}

let userTwo = userOne

userTwo.email = "tanmay.dubey@gmail"

console.log(userOne.email);

// heap memory passes refrence instead of a copy
// thus any change will aslo reflect in real value
