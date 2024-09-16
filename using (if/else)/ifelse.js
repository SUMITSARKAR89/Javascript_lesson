//  1. check even or odd number 

        let checkEvenOdd = parseFloat(prompt("enter number for checking Even or ODD: "));
        if (checkEvenOdd %2 === 0){
            console.log("This is Even number");
        }else{ 
            console.log("This is odd number");
        }

        // -----------------ternary operator ----------------

        let checkEvenOdd = parseFloat(prompt("enter a number"));
       let result = (checkEvenOdd %2 === 0) ? "this is even number" : "this is odd number"; 
       console.log(result);
