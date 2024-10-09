/*alert("hello");
alert(d)
alert("good bye")*/


// EX:1
/*try{
    alert("hello")
    alert(d)
}catch{
    alert("good bye")

}*/

// Ex:2
/*try{
    alert("This is first text");
    alert(k);
}
catch(a){
    console.log(a)
    console.log(a.name)
    console.log(a.message)
    // alert("this is third taxt")
}*/

// Ex:3
/*try{
    alert("this is first text");
    alert(dd)
}catch(a){
    console.log(a.name)
    console.log("a");

}finally{
    alert("this is final text")
}*/

// Ex:4
document.querySelector("#check").addEventListener("click",function(){
   
    var num = document.querySelector("#inputField").value;
    
    try{
        if(num < 5)
        {
            throw "input is too low"
        } else if(num > 10)
        {
            throw "input is too high"
        }

    }catch(err){
        console.log(err);
    }

})