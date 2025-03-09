// console.log(Date()); day month dd yyyy hh:mm:ss GMT+0530 (India Standard Time)


//let mydate = new Date(); //presnt date and time dega
//console.log(mydate); // 2021-07-13T06:00:00.000Z

//console.log(mydate.toString()); 
//console.log(mydate.toDateString());// Tue Jul 13 2021
//console.log(mydate.toLocaleString()); // 7/13/2021, 11:30:00 AM (MM/DD/YYYY, HH:MM:SS AM/PM)
//console.log(typeof mydate); // object


// let newDate = new Date(2024,3,5)
// console.log(newDate); // 2024-04-04T18:30:00.000Z

// console.log(newDate.toLocaleString());

// JS me month 0 se start hua


//let myDate = new Date("2024-01-15"); //isme 1 se suru hota h month
//console.log(myDate.toLocaleString()); // 2024-01-14T18:30:00.000Z

// let time = Date.now() // current time in milliseconds from 1 jan 1970

// console.log(time); // 1626171600000
// console.log(time/1000); // current time in secound


let myDate = new Date();
myDate.toLocaleString('default', { 
    month: 'long' ,
    weekday: 'long',
    day: 'numeric',
    year: 'numeric',
}); 
// khud ke hisab se date format bana sakte h
console.log(myDate.toLocaleString());
