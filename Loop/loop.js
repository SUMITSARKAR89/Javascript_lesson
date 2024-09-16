//  Ex:1---------------------------------------
console.clear();
 for(let i = 1; i<=10; i++){
    console.log(" " + i);
};
         

for(let m = 10; m>=1; m--){
    console.log(" " + m);
}

// Ex:2--------------------------------------------
let a = parseFloat(prompt("Enter start number"));
let b = parseFloat(prompt("Enter last number"));
let sum = 0;
for(let x = a; x<= b; x++){
    sum = sum + x;}
document.write(sum);


/*let sum = 0;
for(let i = 0; i<= 15; i++){
    sum += i;
}
console.log(sum);*/

// Ex:3-----------------------------------------------
// even number 
for(let i = 0; i <=20; i++){
    if(i % 2 === 0){
    console.log("Even number is " + i);
    }
}

// odd number 

for(let i = 0; i<= 20; i++){
    if(i % 2 !==0){
    console.log("odd number is " + i);
    }
}

// Ex:4------------------------------------------------------
let car = ["BMW", "volvo", "oudi", "toyota"];
for (let i = 0; i < car.length; i++) {
   console.log(car[i]);
   //  console.log(car[2]);
}

// EX:5--------------------------------------------------------

let number = [1,2,3,4,5];
for(let i = number.length - 1; i >= 0; i--){
    console.log(number[i]);
}

// EX:6--------------------------------------------------------

// maximum value 
const number = [11,2,8, 5,10];
let max = number[0];
for(let i = 0; i< number.length; i++){
if(number[i] > max){
    max = number[i];
}
}
console.log(max);

// minimum value 
        let min = number[0];
for(let i = 0; i< number.length; i++){
    if(number[i] < min){
         min = number[i];
    }
}
console.log(min);

// EX:7----------------------------------------------------------
let num = 3;
for(let i = 0; i<= 10; i++){
            console.log(`${num} to ${i} = ${num * i}`)
};
let num2 = 6;
    let i = 0;
for(; i<=10; i++){
    console.log(`${num2} to ${i} = ${num2 * i}`);
}
        