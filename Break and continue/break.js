// Ex:1-----------------------------------
for(let i = 0; i<= 100; i++){
    if(i === 10){break;}
    console.log(i);
   }
// Ex:2-----------------------------------
for(let a = 0; a <1; a++){
    for(let b =0; b <1; b++){
        if(a === 1 && b === 1){
            break;
        }
        console.log(`a = ${a}, b = ${b}`);
    }
}
// Ex:3-----------------------------------

for(let i = 0; i<=10; i++){
    if(i %2 == 0){
        continue;
    }
    console.log(i);
}


for(i = 0; i<=10; i++){
if(i % 2 != 0){
    continue;
}
console.log(i);
}



// Ex:4-----------------------------------

let a = [1,2,4,8,9,11];
 for(let i of a){
     if( i === 8){
         break;
     }
     console.log(i);
 }

// Ex:5-----------------------------------

let v = {
    a:1,
    b:2,
    c:3,
}
for(let i in v){
    if( i === "c"){
        break;
    }
    console.log(i);
}

        
    
// Ex:5-----------------------------------
let str = "javascript";
        for(let a = 0; a<str.length; a++){
            if( str[a] === "s"){
                break;
            }
            console.log(str[a]);
        }