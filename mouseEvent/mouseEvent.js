
// Ex:1
const mouseEvent = document.getElementById("mouseEvent");
console.clear()
// click
mouseEvent.addEventListener("click", ()=>{
    console.log("you click mouse event div ")
})

//dblclick
mouseEvent.addEventListener("dblclick", ()=>{
    console.log("you double click this Div");
})

//mouse down
mouseEvent.addEventListener("mousedown", ()=>{
    console.log("mouse down is occure")
});

//mouse up
mouseEvent.addEventListener("mouseup", ()=>{
    console.log("mouse up is occured")
});

//mouse move(client, offset)
mouseEvent.addEventListener("mousemove", (e)=>{
     console.log("mouse move is occured")
    //console.log("classX = " + e.clientX + "; classY = " + e.clientY );
    //  console.log("offsetX = " + e.offsetX + "; offsetY = " + e.offsetY )

});

//mouse over
mouseEvent.addEventListener("mouseover", ()=>{
    console.log("mouse over is occured")
});





//Ex:2
const mouseEvent2 = document.getElementById("mouseEvent2");
const pId = document.getElementById("p");

//mouse enter
mouseEvent2.addEventListener("mouseenter", ()=>{
    mouseEvent2.style.backgroundColor = "red";
    pId.style.textTransform = "upperCase";

    
});

//mouse leave
mouseEvent2.addEventListener("mouseleave", ()=>{
    mouseEvent2.style.backgroundColor = "green";
    pId.style.textTransform = "lowerCase";
});


//Ex:03
const mouseEvent3 = document.getElementById("mouseEvent3");

mouseEvent3.addEventListener("click", function(e){
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.innerHTML);
    // console.log(e.target.innerText);
});
const buttons = document.querySelectorAll(".btn");
console.log(buttons);
Array.from(buttons).map((button) =>{
    button.addEventListener("click", function(e){
        console.log(e.target.innerHTML);
    })
})