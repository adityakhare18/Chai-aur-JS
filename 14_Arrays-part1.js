// array me jb copy operations hota h tb to shalow copy krta h

const arr = [1, 2, 3, 4, 5];
// const a1 = ["asd","dftyhbn"];
// const a2 = new Array(1,2,3,4,5,6,7,8,9,9)
console.log("Original array" , arr);
// console.log(arr[0]);

//methods in array

//1. push() - add element at the end of the array
arr.push(6);
console.log("After push",arr);

//2. pop() - remove element from the end of the array
arr.pop();
console.log("After pop",arr);

//3. unshift() - add element at the start of the array
arr.unshift(0);
console.log("After unshift ",arr);

//4. shift() - remove element from the start of the array
arr.shift();
console.log("After shift ",arr);

//5. splice() - add or remove element from the array
//splice(start, deleteCount, item1, item2, item3, ...)
//start - index at which to start changing the array
//deleteCount - number of elements to be removed
//item1, item2, item3 - elements to be added
arr.splice(2, 1, 10, 11);
console.log("After splice ",arr);

//6. slice() - returns a shallow copy of a portion of an array into a new array object
//slice(start, end)
//start - index at which to start extraction
//end - index at which to end extraction
const arr1 = arr.slice(2, 4);
console.log("After slice ",arr1);

//7. concat() - merge two or more arrays
const arr2 = [6, 7, 8, 9];
const arr3 = arr.concat(arr2);
console.log("After concat ",arr3);

//8. reverse() - reverse the array
arr3.reverse();
console.log("After reverse ",arr3);

// 9. sort() - sort the array
arr3.sort();
console.log("After sort ",arr3);

// 10. indexOf() - returns the first index at which a given element can be found in the array
console.log("Index of 3 ",arr3.indexOf(3));

// 11. lastIndexOf() - returns the last index at which a given element can be found in the array
console.log("Last index of 3 ",arr3.lastIndexOf(3));

// 12. includes() - determines whether an array includes a certain element, returning true or false as appropriate
console.log("Includes 3 ",arr3.includes(3));


// 13. join() - joins all elements of an array into a string
console.log("Join ",arr3.join(" "));

