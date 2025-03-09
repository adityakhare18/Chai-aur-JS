const a1 = [1,2,3,4,5];
const a2 = ["Adi","memna","Payaliyaa","Bn"];

// a1.push(a2)
// console.log(a1); //array ke ander array aa jeyga

// a1.concat(a2) // new array return krta h usme nhi concate krta
// console.log(a1.concat(a2));

// const a3 = [...a1, ...a2] //spread operator
// console.log(a3);


// const arr = [1,2,3,4,[9,8,7],[5,6,[4,9,8,7]]];
// console.log(arr.flat(Infinity)); //flat() - flat the array infinity mtlb cahe jitni dept hai sbko flat krdo uski jagah number de skte h 2 - 2 depth tk flat kr do

console.log(Array.from("Aditya")); //Array.from() - string ko array me convert krta h ['a','d','i','t','y','a']


// object se arr banane ke liye bataan padega ki key se arr banaye ya value se

Array.of(a1,a2,a3) //Array.of() - multiple likh skte h se array banane ke liye

// Array.from() sirf ek likhte h Array.of() me multiple