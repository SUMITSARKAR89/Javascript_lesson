//Synchronous programme

const taskOne = () => {
    console.log("task one")
}
const taskTwo = () => {
    console.log("task two")
}

//asynchronous start here
//the programme will running continue in the last 

/*const dataloading = () =>{
    console.log("taskThree. asynchronous")
}
const taskThree = () => {
    setTimeout(dataloading, 2000)
}*/
// OR,

const taskThree = () =>{
    setTimeout( () =>{
        console.log("task3. data loading")
    }, 2000)
}

// asynchronous ends here



const taskFour = () => {
    console.log("task four")
}
const taskFive = () => {
    console.log("task five")
}


taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();

