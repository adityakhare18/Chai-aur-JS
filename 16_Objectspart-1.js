// object ko banane ka tarika 
// 1. Object literal
// 2. Object constructor (sigleton object)


// singleton object - ek hi object banega Object.create() se

// 1. Object literal
const mySym = Symbol("key1")
const jsUser = {
    name: 'JS', //isme key ka datatype string hota hai
    [mySym]: 25, //isme key ka datatype symbol hota hai
    age: 25,
    isMarried: false,
}

// console.log(jsUser.name);
// console.log(jsUser["name"]); //aise bhi access kr skte h dhyan rahe key ko double quotes me likhna hoga kyuki vo string hoti h aur dot nhi use hota

//console.log(jsUser[mySym]); //symbol key ko access


jsUser.name = "Aditya";
//Object.freeze(jsUser); //iske baad koi bhi change nhi ho skta
// pr agr change krne ki koshish krenge to vo change nhi hoga but error nhi dega

jsUser.greetings = function(){
    console.log(`This function is inside object whose name is ${this.name}`);
}
console.log(jsUser.greetings); // [Function: (anonymous)]
console.log(jsUser.greetings()); //function call krne pr undefined aayega kyuki function me return nhi kiya h aur sth me agr koi console hua to vo

//this refer to current object , kahli this likhenge to refernece dega [object object] kyuki this window object ko refer krta h