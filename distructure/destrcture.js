// Example 1
//Array destructure
let numbers = [10,20,30,40,50];

let [num1, num2, ...z] = numbers;// array destucting

console.log(num1);
console.log(num2);
console.log(z);

// ===================================
//Example 2
//Swap desturcture
let a = "sumit";
let b = "bappy";

[a,b]=[b,a]; // swap destucting

console.log(a);
console.log(b);
console.log(a, b)
// ===================================
//Example 3
//Object desturcture
const studentInfo = {
    id:101,
    name:'sumit sarkar',
    gpa: 3.95
};

const {name, gpa} = studentInfo; // object destructing

console.log(name);//destructed result
console.log(gpa);

console.log(studentInfo.id);//not destucted result
// ===================================
//Example 4
//Nested object destructure
const userInfo = {
    id:2205,
    userName: 'sumit sarkar bappy',
    department: 'BBA',
    gpa:3.95,
    language:{
        native:'Bangla',
        begginer: 'English'
    }
};

const {userName, department, language} = userInfo;//destucting

console.log(userName);
console.log(department);
console.log(language.begginer);
console.log(userInfo.id); // not destucted
// ===================================
//Example 5
//Function perameter Destructure

const newUserInfo = (user) =>{
    console.log(`${user.batch}, ${user.passingYear}`)
   }

    
    //input user 
    const user = {
        firstName: 'sumit sarkar',
        batch: 246 + "/" + 6,
        passingYear:2016
    }

   newUserInfo(user);

  
// ===================================