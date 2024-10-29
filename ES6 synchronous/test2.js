// promises
// EXAMPLE = 3
// how to create promise 
// pending, reslove, reject -to create
const promiseOne = new Promise((resolve, reject) =>{
    let createPromise = true;
    if(createPromise){
        console.log("promise 1 is created")
    }else{
        console.log("promise is not created, rejected")
    }
});

// console.log(promiseOne);
// then, catch -to print result
promiseOne.then((result) =>{
    console.log(result)
}).catch((err) =>{
    console.log(err)
})

/*MORE EASY*/
// Example = 2
const promiseTwo = new Promise((resolve, reject) =>{
    resolve("promise 2 is created")
});
 promiseTwo.then((result) =>console.log(result))

// IF TO FIND ALL PROMISE TOGETHER 
  //Promise.all([promiseOne, promiseTwo]).then(([res1, res2]) => console.log(res2))

// =================================================================
//to calculate promise RACE()
const sectionOne = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve ("complete promise one")
    }, 2000)
});
const sectionTwo = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve ("complete promise two")
    }, 4000)
});
const sectionThree = new Promise ((resolve, reject) =>{
    setTimeout (()=>{
        resolve ("complete promise three")
    }, 1000)
})

Promise.race([sectionOne, sectionTwo, sectionThree]).then((result) => console.log(result));

// =========================================================
// calculate promise chaining()

const taskOne = () =>{
    return new Promise ((resolve, reject) =>{
        resolve ("task one is complete")
    })
}

const taskTwo = () =>{
    return new Promise ((resolve, reject) =>{
        resolve ("tack two is complete")
    })
}


 const taskThree = () =>{
    return new Promise ((resolve, reject) =>{
       setTimeout(()=>{
        resolve ('task three is complete')
       }, 3000)
    })
}

/*If added any reject */
/*const taskThree = () =>{
    return new Promise ((resolve, reject) =>{
        reject ("task three is rejected")
    })
}*/

const taskFour = () =>{
    return new Promise ((resolve, reject) =>{
        resolve ("task four is complete")
    })
}

const taskFive = () =>{
    return new Promise ((resolve, reject) =>{
        resolve ("task five is complete")
    })
}

taskOne()
.then((result) => console.log(result))
.then(taskTwo)
.then((result) => console.log(result))
.then(taskThree)
.then((result) => console.log(result))
.then(taskFour)
.then((result) => console.log(result))
.then(taskFive)
.then((result) => console.log(result))
//If call rejected
.catch((result) => console.log(result))

