
let myDate = new Date()
// console.log(myDate.toString());
// console.log(" ");
// console.log(myDate.toTimeString());
// console.log(" ");
// console.log(myDate.toDateString());
// console.log(" ");
// console.log(myDate.toUTCString());
// console.log(" ");
// console.log(myDate.toLocaleString());

// date is an object 

//let myCreatedDate = new Date(2030, 6, 27) // month 0 se start
let myCreatedDate = new Date(2030, 6, 27 , 5 , 3 ) 
//console.log(myCreatedDate.toLocaleString());   

// if we want to conmpare time

let TimeStamp = Date.now()
console.log(TimeStamp);
console.log(myCreatedDate.getTime());// provide time in milisec thus eay to compare

if (TimeStamp < myCreatedDate.getTime()) {
    console.log(true);
    
}else{
    console.log(false);
    
}


//if we want to convert milisec into sec
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getMonth() + 1);
