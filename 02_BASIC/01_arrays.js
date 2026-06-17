const myarr = [1,2,3,4,5]
//console.log(myarr[3]);

myarr.push(6)
myarr.push(10) // add elem at last
myarr.pop()//remove last arr value

myarr.unshift(9) // add value on index 0
myarr.shift() // remove first element 

console.log(myarr.includes(4));
console.log(myarr.indexOf(4));

console.log(myarr);
console.log(typeof myarr);

const newArr = myarr.join()
console.log(typeof newArr);

// slice , splice

const sliceCons = [0,1,2,3,4,5,6,7,8,9]
console.log("A - ",sliceCons);
const temp1 = sliceCons.slice(1,5) // print from indext 1 till index 4
console.log(temp1);


// splice() is a JavaScript array method used to add, remove, or replace 
// elements in an array. It modifies the original array.

const spliceCons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("B - ", spliceCons);
const temp2 = spliceCons.splice(1,5)
console.log(temp2);
console.log("c - ", spliceCons);

