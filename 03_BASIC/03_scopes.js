
// { } => scope 
let a = 300

if(true){
    let a = 10
    const b = 20
    // console.log("in local scope: ", a);
    
}
 
// console.log("in global scope: ",a);
 // value inside { } come under local scope and outside is called global scope


function one(){
    const userName = "tanmay"

    function two(){
        const website = "youtube"
        // console.log(userName);
    }


    two()
    
}

one()


if (true) {
    const username = "tanmay "
    if(true){
        website = "youtube"
        // console.log(username + website);
        
    }
    // console.log(website); //Error 
    
}

// console.log(username); //error


// ++++++++++++++++++++++ intersting ++++++++++++++++++++++++


console.log(addone(6));

function addone(num){
    return num + 1
}



// function as expression

console.log(addTwo(5)); // provide error

const addTwo = function(num){
    return num + 2
}



