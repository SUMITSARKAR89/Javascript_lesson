// Var use 
x= 20;
console.log(x); /*or= console.log(`value x = ${x}`)*/
var  x;
 


// Let use 

y= 30 ;
console.log(y); /*or= console.log(`value y = ${y}`) */
let y;

// Const use

z= 40;
console.log(z); /*or= console.log(`value x = &{z}`) */
const z;
// ============================================================ 
// speard perameter 
function message(text = "This is Not speard perameter"){
    console.log(`value is text = ${text}`)
}
message();
message("hello this is spread perameter");
message("hello this is a third perameter");

// ============================================================ 
// Rest peramiter 
function sum(x,y, ...z){
    console.log(`x = ${x}, y = ${y}, z = ${z}`)

   }
   sum(10,20,30,40,50,60,70);

   // ============================================================ 
// Spreard operator 
function addNumber(x, y, z){
    return x + y + z;
   }
   let numbers = [10,20,30,40,50,60];
   console.log(...numbers); /*print for numbers */
   console.log(addNumber(...numbers)) /*print for sum of total number */
// 
// speard operator 
let a = ["jan", "feb", "mar"];
let b = ["apr", "may", "jun"];
let c = ["jul", "aug", "sep"];
let d = ["oct", "nov", "dec"];
const years = [...a, ...b, ...c, ...d];
console.log(`Total month = ${years}`)


   // ============================================================ 

 // object leteral 
        // run an object with function  

        function userInfo(name, age, address){
            return{
                name, age, address
            }
        }
        // console.log("sumit sarkar", 32, "sutrapur");
       

     // run an object with function  (consize methods)

     let text = {
        info(){
            return `this is object leteral`
        }
     }
     console.log(text.info());

// ============================================================ 
      // by using for of loop ES6
      const aName = ["sumit", "bappy", "pavel", "rana"];
      for(let abc of aName){
          // console.log(abc);
      }
     
      // by using for in loop Es6 

      let nameInfo = {
          name: "sumit sarkar",
          Id : "CMBD-246/06",
          phonenumber : 1914738110
      }
      for(let result in nameInfo){
          console.log(result) //this is for the value
          console.log(nameInfo[result]) // this is for result of value
          console.log(`${result} : ${nameInfo[result]}`)//this is for whole value and result
      }
// =======================================================
  /*this is for loop*/
  let countNumber = [10,20,30,40,50];
  for(let y = 0; y<countNumber.length; y++){
   console.log(countNumber[y]);
  }

/*This is foreach function*/
let countNumber2 = [10,20,30,40,50];
countNumber2.forEach((y)=>{
   console.log(y)

})

/*This is for square number print*/
let numbers = [2,3,4,5,6];
let sqNumber = [];
numbers.forEach((y)=>{
sqNumber.push(y*y);

})
console.log(sqNumber);

/*This is for adding number  print*/

let addNumbers = [10,20,30,40,50];
addNumbers.forEach((x,index,arr)=>{
arr[index] = x+5;
})
console.log(addNumbers);