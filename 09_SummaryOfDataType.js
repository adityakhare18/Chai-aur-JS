// two types of datatype

// 1. Primitive Data Type
// 2. Reference Data Type

// basically both are diffrenciated as how they are stored in memory and accessed

// Primitive Data Type (call by value)
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// Reference Data Type (call by reference)
// 1. Array
// 2. Object
// 3. Functions


// JS is a dynamically typed language, which means that you don't have to specify the data type of the variable when you declare it. The data type of the variable is determined at the time of assignment of the value to the variable.    

const aa = function() {
    console.log("Hello");
}
console.log(aa);    //[Function: aa]
console.log(typeof aa);   //function

