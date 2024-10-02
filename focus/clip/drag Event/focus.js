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


// // ================================clipboard event=========================

// // Ex:1 
const clipInput = document.querySelector("#name");
const p = document.querySelector("p");

        clipInput.addEventListener("copy", () =>{
            p.innerText = "you copy the text"
        })

        clipInput.addEventListener("cut", () =>{
            alert("you cut the text");
        })

        clipInput.addEventListener("paste", ()=>{
            console.log("you pasted the text")
        })


// ================================drag event=========================

const main = document.getElementById("main");
const pera = document.getElementById("pera");

pera.addEventListener("dragstart", (e)=>{
    e.dataTransfer.setData("text", e.target.id);
});

main.addEventListener("dragover", (e)=>{
    e.preventDefault();
});

main.addEventListener("drop", (e)=>{
    let id = e.dataTransfer.getData("text");
    main.appendChild(document.getElementById(id));
    e.preventDefault()
})