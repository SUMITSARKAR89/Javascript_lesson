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
     console.log(text.info())
