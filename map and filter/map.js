let countNumber = [10,20,30,40,50];
let squareNumber = [];
countNumber.forEach((y)=>{
    squareNumber.push(y*y);
})
console.log(squareNumber);

// ========================= 

let sqNumber = countNumber.map((y)=>{
    return y*y;
})
console.log(sqNumber)
// =============================================== 
let filterNumber = [20,25,80,2,9,105,55,5];
let filterResult = filterNumber.filter((y)=>{
    return y>10;
})
console.log(filterResult);
let filterResult2 = filterNumber.filter((x)=>{
    return x<10;
})
console.log(filterResult2);

// =========================================================== 
Ex:3
// find a quantity of fruits by using map 
const fruits = new Map([
    ["orange", 6000],
    ["mango", 5000],
    ["apple", 4500],
    ["banana", 6500]
]);

let fruitsQty = fruits.get(prompt("Search........."));
console.log(typeof fruits);
console.log(fruits instanceof Map);
console.log(fruits.size); //fruits.clear(), fruits.delete(), fruits.has()
console.log(`Total Quantity ${fruitsQty}`);

// ====================================================== 
const fruits = new Map([
    ['apple', 200],
    ['mango', 50],
    ['orange', 350]
   ]);


   let text = "";
//    fruits.forEach(function(num, value){
//     text += value + "= " + num + " " ;
//    })
for(let x of fruits.entries()){
    text += x;
}
   console.log(text )
