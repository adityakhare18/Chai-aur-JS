const tinderUser = new Object();
tinderUser.id = "123a"
tinderUser.name = "John";
tinderUser.age = 25;
//console.log(tinderUser); // { name: 'John', age: 25 }

const regularUser = {
    email:"abc@gmail.com",
    fullName: {
        firstName : "Aditya",
        lastName : "Khare"
    }
}
// console.log(regularUser); 
// console.log(regularUser.fullName.firstName); // Aditya

//option chaining
// console.log(regularUser.fullName?.firstName); // Aditya
// isme agar koi bhi property nahi hogi to undefined return karega


const obj1 = {1:"a", 2:"b", 3:"c"};
const obj2 = {4:"d", 5:"e", 6:"f"};
// const obj3 = Object.assign(obj1, obj2); // obj1 me obj2 ke properties add ho jayenge 
// upar isme jo sbse pehel obj h vo target obj h usme sb ho rha
// console.log(obj1); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }
//iise bachne ke liye sbse pehele {} empty object pass karna hoga
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' } 


const obj3 = {...obj1, ...obj2};
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }