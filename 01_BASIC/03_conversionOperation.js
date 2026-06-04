let score = "33abc"

// console.log(typeof score);

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);

// console.log(valueInNumber); // output => NaN-not a number

// "33" after conversion 33
// "33abc" => NaN
// true =>1 ; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

//1 => true ; 0 => false
// "" => false
// "tanmay" => true



// *************************************************** OPERATIONS *****************************************************************************//

let str1 = "tanmay" 
let str2 = "dubey"

let str3 = str1 + str2
console.log(str3);
 

// prefix operator 
let x = 3
const y = ++x
console.log(x,y);


// and postfix fix operators

let a = 3
const b = a++
console.log(a,b);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion