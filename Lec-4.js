const accountId = 123445533; //cannot be changed
let accountEmail = "anonymous@gmail.com"
var accountPassword = "password123"
accountCity = "Ayodhya";

let name; //chalega value undefine hai bydefault

console.log(accountId, accountEmail, accountPassword, accountCity);

// accountId = 2 //not allowed
accountEmail = "h@gamil.com"
accountPassword = "aa"
accountCity = "Delhi";

console.log("Account Id: ", accountId);
console.log("Account Email: ", accountEmail);
console.log("Account Password: ", accountPassword)

console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
prefer not to use var becouse it is not block scoped and can be redeclared
use let, for block scoped variables
*/