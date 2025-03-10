// jb na pta ho ki kitne parameter ayenge
// function calculateCartPrice(n1){
//     return n1;
// }

// console.log(calculateCartPrice(2));

//to overcome this problem we use rest operator which is ... followed by var name


// function calculateCartPrice(...n1){
//     return n1;
// }

// console.log(calculateCartPrice(200,400,500));
// ab isme n1 ek array jaise bn gya hai isme vo sare argument aa jayenge jo call krte tym diye h

//another varint of rest operator

// function calculateCartPrice(v1,v2,...n1){
//     return n1;
// }

//console.log(calculateCartPrice(200,400,500,5000)); 
// ab isme n1 me kya value ayehg (500,5000) ayegi kyuki v1 le gya 200 v2 le gya 400 to baki sb n1 me

//console.log(calculateCartPrice(200,400)); // [] empty \


// object ke sth toda khela ho jaye
const user = {
    username: "Adi",
    price: 2000
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);   
}

// handleObject(user)

// handleObject({
//     username: "Aditya",
//     price: 199
// })

