// const accountId = 123445533; //cannot be changed
// let accountEmail = "anonymous@gmail.com"
// var accountPassword = "password123"
// accountCity = "Ayodhya";

// let name; //chalega value undefine hai bydefault

// console.log(accountId, accountEmail, accountPassword, accountCity);

// // accountId = 2 //not allowed
// accountEmail = "h@gamil.com"
// accountPassword = "aa"
// accountCity = "Delhi";

// console.log("Account Id: ", accountId);
// console.log("Account Email: ", accountEmail);
// console.log("Account Password: ", accountPassword)

// console.table([accountId, accountEmail, accountPassword, accountCity]);

/*
prefer not to use var becouse it is not block scoped and can be redeclared
use let, for block scoped variables
*/

/*
Scope: var is function-scoped, meaning it is accessible throughout the function where it is declared.
Hoisting: Variables declared with var are hoisted to the top of their scope but initialized as undefined.
Reassignment & Redeclaration: You can reassign and redeclare a var variable in the same scope.

console.log(x); // undefined (hoisting)
var x = 10; // Declaration & Initialization
var x = 20; // Redeclaration allowed
*/ 

/*
Scope: let is block-scoped ({}), meaning it is only accessible within the block where it is declared.
Hoisting: let is hoisted but not initialized, so accessing it before declaration throws a ReferenceError.
Reassignment & Redeclaration: You can reassign but cannot redeclare a let variable in the same scope.

console.log(y); // ReferenceError (not initialized)
let y = 10; 
y = 20; // Allowed
let y = 30; // SyntaxError (cannot redeclare)
*/

/*
Scope: const is block-scoped like let.
Hoisting: const is also hoisted but not initialized, so accessing it before declaration throws a ReferenceError.
Reassignment & Redeclaration: You cannot reassign or redeclare a const variable.
Must be initialized: const requires a value at the time of declaration.

const z = 10;
z = 20; // TypeError (cannot reassign)
const z = 30; // SyntaxError (cannot redeclare)

*/



