// Ex:1

 const textArea = document.querySelector("textarea");

textArea.addEventListener("keyup", (e)=>{
    // console.log("keyup");
    // console.log(e.code);
    console.log(e.key);
    // console.log(e.keyCode);
});

textArea.addEventListener("keydown", (e)=>{
    if(e.repeat){
        alert("do not repeat")
    }

});

textArea.addEventListener("keypress", (e)=>{
    console.log(e.code);
})

