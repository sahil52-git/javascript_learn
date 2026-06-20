//String concatenation example
const name = "Sahil Shrestha name variable"
const repoCount = 8

// console.log(name + repoCount + " newValue");

console.log(`My name is ${name} and my repoCount is ${repoCount}`);


const gameName = new String ('Sahil Shrestha')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase);

console.log(gameName.lastIndexOf);


console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,5);  //for accessing the string name value
console.log(newString);     //method calling


const anotherString = gameName.slice(-3, 5) //using of slice method for negative values(-)
console.log(anotherString);

const newStringOne = "  Sahil   "
console.log(newStringOne);
console.log(newStringOne.trim());


console.log(gameName.split('-'));


console.log(name.split('-'));








