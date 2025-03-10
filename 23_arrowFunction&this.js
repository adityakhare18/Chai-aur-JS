//this keyword tells about current context

//console.log(this); // {}

const user = {
    username: "Adi",
    age:22,
    welcomeMsg:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()//value change ho jayegi user obj me


// console.log(this); //yaha pe  {} empty obj dega kyuki node me this khuch nhi context de rha 
// pr yahi jb broweer me log(this) kroge to window obj milega kyuki broweer me window global obj hoota h aur this ussi to refer krta h


// function chai() {
//     // console.log(this); //ab bahut khuch milega
//     let username = "adi"
//     console.log(this.username); //undefine kyuki function me ye kaam nhi kr rha
    
// }

// chai()



// const chai = () =>{
//     let username = "adi"
//     console.log(this.username); //undefine
//     console.log(this); //{}
// }

// chai()

//const addTwo = (n1,n2) => n1 + n2 //impllicit return if it has one line only

// console.log(addTwo(1,2));



// agr curly braces hai to return likhna padega nhi to jaruri nhi h fir cahe brakets hi kyu na ho()

const addTwo = (n1,n2) => (n1 + n2)
console.log(addTwo(1,2));