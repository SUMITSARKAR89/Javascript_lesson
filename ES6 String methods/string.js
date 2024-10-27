// Example 1 
// startswith

let exampleOne = "this is starts with methods";
console.log(exampleOne.startsWith("starts")); //Return false
console.log(exampleOne.startsWith("this", 10)); //Return false

console.log(exampleOne.startsWith("this")); // Return true
console.log(exampleOne.startsWith("this", 0)); //Return true



//Example 2
//endsWith

let exampleTwo = "this is ends with methods";
console.log(exampleTwo.endsWith("ends")); //Return false
console.log(exampleTwo.endsWith("methods",16 )); //Return false
console.log(exampleTwo.endsWith("methods")); //Return true


// Example 3
//includes

let exampleThree = "this is include methods";
console.log(exampleThree.includes("is")); //Return true
console.log(exampleThree.includes("Is")); //Return false



