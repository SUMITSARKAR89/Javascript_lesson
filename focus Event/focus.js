// Ex:1

const inputFocus = document.querySelector("#name");
// inputFocus.addEventListener("focus", ()=>{
//     inputFocus.style.backgroundColor = "red"
// });
inputFocus.addEventListener("focusin", ()=>{
    console.log("focus in occured")
});
inputFocus.addEventListener("focusout", ()=>{
    console.log("focusout in occured")
});

inputFocus.addEventListener("blur", (e)=>{
    // console.log(e.target.value);
    inputFocus.value = e.target.value.toUpperCase();
    
})