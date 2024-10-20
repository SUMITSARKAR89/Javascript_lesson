//Example 1
//Array.find method  (ES6)
let numbers = [5,35,55,25,14,28];

let firstResult = numbers.find(a => a%2===0); //array.find 
console.log(firstResult);

// =========================== OR,
// without (a => a%2===0)

/*let numbers = [5,35,55,25,14,28];
const evenNumber = (value) =>{ //this elements taken instead of (a => a%2===0)
    if(value%2===0)
    return value;
}
let firstResult = numbers.find(evenNumber);
console.log(firstResult) */

// ===================================================================
//Example 2
//Array.findIndex method

// let numbers = [5,35,55,25,14,28];
let findIndexResult = numbers.findIndex(a => a%2===0);
console.log(findIndexResult);

//============================= OR,
// without (a => a%2===0)

// let numbers = [5,35,55,25,14,28];

//  const evenNumber2 = (value, index, array) =>{ //this elements taken instead of (a => a%2===0)
//     if(value%2===0)
//         return value;
//  }
//  let findIndexResult = numbers.findIndex(evenNumber2);
//  console.log(findIndexResult)



// =========================================================
const studentInfo = [
    {
        name: 'sumit',
        id: 246,
        gpa:2.95
    },
    {
        name: 'asfaq',
        id: 248,
        gpa: 3.0
    },
    {
        name: 'pavel',
        id: 335,
        gpa:3.50

    },
    {
        name: 'dipu',
        id: 305,
        gpa:4.50
    }
];

console.log(studentInfo.find(a => a.gpa>4));
console.log(studentInfo.find(a => a.gpa>3));
console.log(studentInfo.find(a => a.gpa>2));

