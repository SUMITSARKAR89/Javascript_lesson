const taskOne = () =>{
    return new Promise ((resolve, reject) =>{
        resolve ("task one is complete")
    })
}

const taskTwo = () =>{
    return new Promise ((resolve, reject) => {
        resolve ("task two is complete")
    })
}

const taskThree = () => {
    return new Promise ((resolve, reject) =>{
        resolve ("task three is complete")
    })
}

const taskFour =() => {
    return new Promise ((resolve, reject) =>{
        reject ("task four is is not complete, rejected")
    })
}

const taskFive = () => {
    return new Promise ((resolve, reject) =>{
        resolve ("task five is complete")
    })
}

const allTaskResult = async () =>{

    try{
        const t1 = await taskOne();
        console.log(t1);
        const t2 = await taskTwo ();
        console.log(t2);
        const t3 = await taskThree ();
        console.log(t3);
        const t4 = await taskFour ();
        console.log(t4);
        const t5 = await taskFive ();
        console.log(t5);
    }catch(e){
        console.log(e)
    }
}
allTaskResult();