
//1 check even or odd number (switch)
// using if else methods control system

let checkEvenOdd = parseFloat(prompt("enter number for checking Even or ODD: "));
    if (checkEvenOdd %2 === 0){
        console.log("This is Even number");
    }else{ 
        console.log("This is odd number");
    }

 // using switch methods control system

/*let checkEvenOdd = parseFloat(prompt("enter number for checking Even or ODD: "));

switch(true){
 case (checkEvenOdd %2 === 0):
     console.log('this is even');
break;
           
default:
    console.log('this is Odd');
}*/

 //  2. check positive negetive or Zero
 
 // using if else methods control system
        let checkpnz = parseFloat(prompt('enter number for checking Positive Or Nagetive:'));

        if(checkpnz < 0){
            console.log("negetive");
        }else if(checkpnz > 0){
            console.log("positive");
        }else{
            console.log("zero");
        }

// using switch methods control system
        /*let checkpnz = parseFloat(prompt('enter number for checking Positive Or Nagetive:'));
        switch(true){
            case (checkpnz < 0):
                console.log("negetive");
                break;
            case(checkpnz > 0):
                console.log("positive");
                break;
            default:
                console.log("zero"); 
        }*/


// 3 check grade calculation
  //  using if else methods control system

        let checkGrade = parseFloat(prompt('enter number for calculation Grade :'));

        if(checkGrade < 0 || checkGrade > 100){
            console.log("invalid Grade");
        }else if(checkGrade >=80){
            console.log("A+");
        }else if(checkGrade >=70){
            console.log("A");
        }else if(checkGrade >=60){
            console.log("A");
        }else if(checkGrade >=50){
            console.log("B");
        }else if(checkGrade >=40){
            console.log("c");
        }else if(checkGrade >=33){
            console.log("D");
        }else{
            console.log("FAIL");
        }

        //  using Switch methods control system
        /*let checkGrade = parseFloat(prompt('enter number for calculation Grade :'));
        switch(true){
            case(checkGrade < 0 || checkGrade > 100):
            console.log("Invalid ");
            break;
            case(checkGrade >=80):
            console.log("A+");
            break;
            case(checkGrade >=70):
            console.log("A");
            break;
            case(checkGrade >=60):
            console.log("A-");
            break;
            case(checkGrade >=50):
            console.log("B");
            break;
            case(checkGrade >=40):
            console.log("C");
            break;
            case(checkGrade >=50):
            console.log("D");
            break;
            default:
                console.log("FAIL");
        }*/

// 4 check Age Calculation 

 //  using if else methods control system
        let checkAge = parseFloat(prompt('enter Your Age number :'));
        if(checkAge <0){
            console.log("invalid age");
        }
        else if(checkAge >= 0 && checkAge <12 ){
            console.log("Child");
        }else if(checkAge >=13  && checkAge <20 ){
            console.log("Teenager");
        }else if(checkAge >= 20 && checkAge <30 ){
            console.log("younger");
        }else if(checkAge >= 30 && checkAge <50 ){
            console.log("Adult");
        }else if(checkAge >= 50 && checkAge <70){
            console.log("middle Age");
        }else if(checkAge >= 70 && checkAge <90){
            console.log("old");
        }else{
            console.log("older");
        }

         //  using Switch methods control system
         /*let checkAge = parseFloat(prompt('enter Your Age number :'));
         let age;
         
         switch(true){
            case (checkAge <0):
                age = "invalid";
            break;
            case (checkAge >= 0 && checkAge <12 ):
                age = "child";
            break;
            case (checkAge >= 13 && checkAge <20 ):
                age = "Teens";
            break;
            case (checkAge >= 20 && checkAge <30 ):
                age = "younger";
            break;
            case (checkAge >= 30 && checkAge <50 ):
                age = "Adult";
            break;
            case (checkAge >= 50 && checkAge <70 ):
                age = "middle age";
            break;
            case (checkAge >= 70 && checkAge <90 ):
                age = "old";
            break;
            default:
                age = "older";
         }
            console.log(age);*/