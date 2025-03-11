//for each loop

//const coding = ["js","node.js","express.js","mongoDB","java"];
// it returns undefined by default and takes function as a paramet
//const val = coding.forEach((item)=>{
    // console.log(item);
    //return item //undefine
//})

// console.log(val); //always undefine




// const myNums = [1,2,3,4,5,6,7,8,9,10];

// filter 
// it always return new array based on condition, filter takes callback function

// const ans = myNums.filter((n)=>{
//     return n == 4
// })
// console.log(ans);


//map:return new array after modifying array

// const newNum = myNums.map((n)=>n+10);
// .map().map() OR filter().map() yye bhi kr skte h
// console.log(newNum);


//reduce
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

//sbse pehli baar jb looop chalega tb accu me initial val chali jayegi uske baad jobhi sum hoga vo initial me jayega fir vo acc me
// aur aise hme ek val milega pure array se

const num = [1,2,3]
const myTotal = num.reduce(function (acc,currVal) {
    return acc + currVal
},0)
console.log(myTotal);
