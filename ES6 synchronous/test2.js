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
/*promiseOne.then((result) =>{
    console.log(result)
}).catch((err) =>{
    console.log(err)
})*/

/*MORE EASY*/
// Example = 2
const promiseTwo = new Promise((resolve, reject) =>{
    resolve("promise 2 is created")
});
// promiseTwo.then((result) =>console.log(result))

// IF TO FIND ALL PROMISE TOGETHER 
  //Promise.all([promiseOne, promiseTwo]).then(([res1, res2]) => console.log(res2))