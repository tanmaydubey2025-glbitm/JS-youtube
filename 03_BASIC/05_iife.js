// Immediately Invoked Function Expressions (IIFE)

//iife is used for immediate execution AND to project thge function from global scope polluttion

(function chai(){
    // named iife 
    console.log(`DB CONNECTED`); 
})(); // ;(terminator) is must required in iife

// ()(); => iife syntax 

( (name) => {
     // arrow fun is unnamed iife 
    console.log(`BD CONNECTED ${name}`);
} )("tanmay");