//const score = 20;

//const balance = new Number(1000);
//console.log(balance);


// properties of number
//console.log(Number.MAX_VALUE);
//console.log(Number.MIN_VALUE);
//console.log(Number.POSITIVE_INFINITY);
//console.log(Number.NEGATIVE_INFINITY);
//console.log(Number.NaN);


// console.log(typeof balance.toString());
// console.log(typeof balance.valueOf());


//console.log(balance.toFixed(2)); //point ke baad 2 digit


// const n = 23.8765;
//console.log(n.toPrecision(1)); //2 digit (isme braket me 1-21 tk ke nuber hi likh skte h) ye return string


//const n = 123456789
//console.log(n.toLocaleString()); //comma lga dega number me 1,23,45,6789 ye return string me dega US standard by default
//console.log(n.toLocaleString('de-DE')); //comma lga dega number me 1.234.567.890 ye return string me dega German standard
//console.log(n.toLocaleString('en-IN')); //comma lga dega number me 1,23,45,6789 ye return string me dega Indian standard
//console.log(n.toLocaleString('en-US')); //comma lga dega number me 1,234,567,890 ye return string me dega US standard


// ++++++++++++++++++++++++ Maths +++++++++++++++++++++++++

//console.log(Math);
//console.log(Math.abs(-7.8)); //7.8
//console.log(Math.ceil(7.8)); //8
//console.log(Math.floor(7.8)); //7
//console.log(Math.round(7.8)); //8
//console.log(Math.round(7.3)); //7
//console.log(Math.min(7, 8, 9, 10)); //7

console.log(Math.random()); //0 to 1 koi bhi
console.log(Math.random() * 100); //0 to 100 koi bhi
console.log(Math.random()*10 + 1); //1 to 10 koi bhi


// by default 0 to 1 koi bhi random number generate krta h
// agar 0 to 100 chahiye to *100 krna padega
// agar 1 to 100 chahiye to *100 + 1 krna padega

// but agr hame khud ke min aur max ke bich me cahiye tb 
const min = 10;
const max = 20;

console.log(Math.random() * (max - min + 1) + min); //10 to 20 koi bhi random number generate kr dega