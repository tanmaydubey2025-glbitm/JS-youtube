const name = "tanmay"
const age = 20

console.log(`Hello my name is ${name} and my age is ${age}`);  //`` by opt+₹

// ${} is used to inject values 

const gameName = new String('tanmay-dubey')

 console.log(gameName[0]);
// console.log(gameName.__proto__); // it is used to access protype


console.log(gameName.length); // provide string length
console.log(gameName.toUpperCase()); // convert all to uppercase
console.log(gameName.charAt(2)); //provide index char
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-11, 7) //start from end
console.log(anotherString);

const trimString = "     tanmay dubey.      "
console.log(trimString)
console.log(trimString.trim());

const url = "https.//tanmay/com/hjgfud%4567shgckad"

console.log(url.replace('%4567','-'));

console.log(url.includes('tanmay')); // check if string include the word or not

console.log(gameName.split('-')); // The split() method of String values takes a pattern and divides this string into an ordered list of substrings by 
//               //  split(separator, limit)                  //  searching for the pattern, puts these substrings into an array, and returns the array.


console.log(gameName.split('', 3));



 
