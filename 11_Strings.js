//string with double or single quote notations and it is immutable (no change)

const name = "Adi";
const repoCount = 26;

//console.log(name + repoCount);

// modern ways me String litrals use hota h
//console.log(`My name is ${name} and I have ${repoCount} repos`);

const gameName = new String("PUBG");
//console.log(gameName); // [String: 'PUBG']

// string ko access krne ke liye s[0] use like array andalso by s.charAt()
//console.log(gameName[0]); // P
//console.log(gameName[5]); //undeifned


//console.log(gameName.__proto__); // {} actualy me empty nhi h 

//iss prototype me kuch methods hote h jaise ki
//console.log(gameName.toUpperCase()); // PUBG
//console.log(gameName.toLowerCase()); // pubg
//console.log(gameName.length); // 4
//console.log(gameName.indexOf('U')); // 1
//console.log(gameName.indexOf('Z')); // -1
//console.log(gameName.charAt(2)); // B
//console.log(gameName.includes('U')); // true
//console.log(gameName.includes('Z')); // false
//console.log(gameName.substring(0,2)); // PU
//console.log(gameName.slice(0,2)); // PU
//console.log(gameName.slice(0,4)); // PUBG
//console.log(gameName.slice(0,5)); // PUBG
//console.log(gameName.slice(-4,0)); // empty