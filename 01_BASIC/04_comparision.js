// ** avoid this type of conversion **//

console.log(null > 0); //false
console.log(null == 0);// false
console.log(null >= 0);// true

// reason == and comparison operator such as (>, < , >= etc)
// work differently , comparsion operators convert 
// null to zero thus "null >= 0 is true" and "null == 0 is false"

// === (strict check)

console.log("2" == 2); // true 
console.log("2" === 2); // false cause strict check also check daata type
