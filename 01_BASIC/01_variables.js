const accountId = 12344
let accountemail = "tanmay.com"
var accountPassword = "12345"
accountcity = "Jaipur"
let accountState
// accountId = 2 //not allowed

accountemail = "tanmay.@web"
accountPassword = "212121"
accountcity = "bombay"


console.log(accountId);

/*
prefer not to use var 
because of issue in block scope  and functional scope
*/

console.table([ accountId, accountPassword,accountemail,accountcity,accountState])
