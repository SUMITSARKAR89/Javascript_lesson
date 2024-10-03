// 1. example 1
// add button

function mybutton(){

    alert("this is example one");
}

document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});


// 2. example 2
// add inner element 

let pera = document.querySelector("#pera");
function button1(){
    
    pera.innerHTML = "you click button one";
    pera.style.backgroundColor = "green";

};
function button2(){
    pera.innerHTML = "you click button two";
    pera.style.backgroundColor = "red";
}



// 3. example 3 
// inner html element

let link1 = document.getElementsByTagName("a")[0];
link1.innerHTML = "visited link1";
link1.style.color = "red";
link1.style.fontSize = "1rem";
link1.href = "https://www.facebook.com";

let link2 = document.getElementsByTagName("a")[1];
link2.innerHTML = "visited link 2";
link2.style.color = "green";




// 5. example 5
// create remove adding attached 

let heading1 = document.createElement("h1"); //create elements.
let newText = document.createTextNode("this is new heading"); //add text
heading1.appendChild(newText); //attached both.

let mydiv = document.querySelector(".my-div");
 mydiv.appendChild(heading1);
 mydiv.style.textTransform = "capitalize";*/

//   for remove (remove text)
    var doc2 = document.getElementsByTagName("h1")[1];
    newone.removeChild(doc2);*/

// 3 example 3
// add style and remove style

function addStyle(){
    let addStyle = document.getElementById("peraId");
    addStyle.classList.add("peraId");
}
function removeStyle(){
    let removeStyle = document.getElementById("peraId");
    removeStyle.classList.remove("peraId");
}


