// #JS and Classes

// js me classes nhi hoti/

// js is a prototype based language

// OOP is a programing paradism

// object - collection of properties nd methods
//  -- toLowerCase()

// -consructor function
// -prototypes
// -classes
// -instances (new, this)


// 4 pillors (inheritance, polmorphism, encapsulation, abstractoion(fetch))

//Object litrals (litrally object)

const user = {
    userName : "Aditya",
    loginCount : "12"
}
//console.log(user);


//constructor function
//const promsiseOne = new Promise() //new is constructor function

function User(username, loginCount) {
    this.username = username
    this.loginCount = loginCount

    // return this; //jaruri nhi h krne ke liye implicit hota h
}

const user1 = new User("adi",12);
const user2 = new User("hero",12); //ab value ovveride ho gyi user1 ki agr new na likhe to
console.log(user1);

console.log(user1.constructor); //khud ka ref dega

// jaise hi new keyword use krennge ek empty imstance create hota h (obj) fir constructor fun call hota h fir jo instance bna h usme sb create ho jayega