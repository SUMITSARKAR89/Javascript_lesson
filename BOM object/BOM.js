/*assign
location
children 
text content */

// EX:1
// href 
console.log("href =  " + location.href );
// protocol 
console.log("protocol =  " + location.protocol );
// hostname 
console.log("hostname =  " + location.hostname );
// port 
console.log( "port =  " + location.port );
// pathname 
console.log( "pathname =  " + location.pathname );

// ==========================================================
// EX:2
const locationDiv = document.querySelector(".location-div");

let p1 = locationDiv.children[0];
p1.textContent = location.href;
p1.style.color = "green"

let p2 = locationDiv.children[1];
p2.textContent = location.protocol;

let p3 = locationDiv.children[2];
p3.textContent = location.hostname;

let p4 = locationDiv.children[3];
p4.textContent = location.port;

let p5 = locationDiv.children[4];
p4.textContent = location.pathname;

const visitBtn = document.getElementById("visit");
visitBtn.addEventListener("click", ()=>{
    location.assign("https://www.youtube.com/watch?v=36YnV9STBqc")
})

// ==============================================
// Ex:3 
// alert("welcome to BOM methods");
// ===============================================

// Ex:4 
function confirmFound (){
 let value = confirm("Do you want to delete");
 
  if(value === true){
    document.write("you delete items");

  }else{
    document.write("item is not delete")
  }
}
confirmFound()

// EX:5

/* 
textNode 
createTextNode
appenChild
*/
function promptFound(){
    let text;

    let value = prompt("Enter Your Name ");
    let result =  value.toUpperCase();
    if (result === null || result === " "){
        text = "No name found";

    }else{
        text = "Welcome " + result;
        
    }

    let h1 = document.getElementById("h1");
    h1.style.color ="red";

    let textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}
promptFound();


// Ex:6
function confirm2(){

}