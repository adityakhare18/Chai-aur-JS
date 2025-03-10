//Immediately Invoked Function Expressions IIFE OR self-executing anonymous function.

//An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined

// standard IIFE
/*
(function () {
    // statements…
  })();
  
  // arrow function variant
  (() => {
    // statements…
  })();
  
  // async IIFE
  (async () => {
    // statements…
  })();
*/


// usecase
// avoiding global scope pollution:IIFEs create a new scope, preventing variables and functions declared within them from polluting the global scope



// NOTE - Semicloun lagna jaruri hai last wale () ke baad



// ((name)=>{
//     console.log(`Hello ${name}`);
// })("adi");