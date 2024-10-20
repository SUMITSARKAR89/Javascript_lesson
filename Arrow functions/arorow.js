
//traditional function must be needed curly braces
// DEMO ONE 
// Ex:1
function display1(){
    console.log("I am display one")
}
display1();

// Ex:2
function massage1(){
    return "I am Massage One"
}
console.log(massage1());

// Ex:3
function add1(num1, num2){
    return num1+num2;
}
console.log(add1(10, 20));

// ================================================== 
//Arrow Function dont need any curley braces
// Ex:1
const display2 =() =>
    console.log("I am display Two");
display2();
 
// Ex:2
const massage2 = () => "I am massage Two"
console.log(massage2());   

//  Ex:3 
const add2 = (num1, num2) => num1*num2;
console.log(add2(10, 20))


// =============================================== 

let studentInfo = [
    {
        id:101,
        name: "sumit sarkar",
        department: "BBA",
        cgpa : 3.95
    },
    {
        id:105,
        name: "Asfaq alam",
        department: "CSE",
        cgpa : 2.45
    },
    {
        id:120,
        name: "Dipu modak",
        department: "LLB",
        cgpa : 2.95
    },
    {
        id:204,
        name: "Tanveer Islam",
        department: "CSE",
        cgpa : 3.50
    }
]

// console.log(studentInfo);//print array

//1. Traditional function
function studentResult(){
 return studentInfo.filter(function(a){

    return a.cgpa > 3
 }).map(function(y){
    return y.name;
 });
}
console.log( studentResult()); //print by using traditonal function

// 2. Arrow Function,

const studentResult2 = ()=>{
return studentInfo.filter((x) => x.cgpa > 3).map((y) => y.name)
}
console.log(studentResult2()); //print by using arrow function

