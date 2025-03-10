//nested scope

// in nested function child function can access all resourses of parent function

// function one(){
//     const username = "Adi"

//     function two(){
//         const website = "adi.khare.com"
//         console.log(username);
//     }
//     // console.log(website); //error website no defined becouse of scopee
//     two()
// }

// one()





// if (true) {
//     const username = "Adi"
//     if (username === "Adi") {
//         const website = "adi.kh"
//         console.log(username + " " + website);
//     }
//     console.log(website);
// } 
// console.log(username);


// ++++++++++++++++ intresting ++++++++++

addOne(5) //like this
function addOne(n) { // ye funct hoisted hoga yani isko definiton se pehle hi call kr skte h
    return n+1
}

//addOne(5)


//addTwo(5) //reference error
const addTwo = function(n){//it will not be hoisted will give referncee error if we do 
    return n+2
}

// addTwo(5)