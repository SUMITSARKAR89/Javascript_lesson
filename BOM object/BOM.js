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
 alert("welcome to BOM methods");
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
// ===============================================

// EX:5

/* 
textNode 
createTextNode
appenChild
*/
function promptFound(){
    let text;

    let value = prompt("Enter Your Name ");
    // let result =  value.toUpperCase();
    if (result === null || result === " "){
        text = "No name found";

    }else{
        text = "Welcome " + result;
        
    }

    let h1 = document.getElementById("h1");
    // h1.style.color ="red";

    let textNode = document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}
promptFound();

// ===============================================

// Ex:6
function confirm2(){

  let con;
  if (confirm("press one button")){
    con = "you pressed 'OK'";
  }else{
    con = "you pressed cancel";
  }
  document.getElementById("confirm").innerHTML = con;
}

// ===============================================
// Ex:7

const saveBtn = document.querySelector(".save-btn");
const saveText = document.querySelector(".save-text");

saveBtn.addEventListener("click", functionSave);

function functionSave(){
    saveText.textContent = "user registration successfully";

    setTimeout(()=>{
        saveText.textContent = ""
    }, 2000);
}

// ===============================================
// Ex:8
const saveBtn2 = document.querySelector(".save-btn2");
const saveText2 = document.querySelector(".save-text2");
saveText2.style.color = "white";

saveBtn2.addEventListener("click", functionInterval);
function functionInterval(){
    let count = 1;
    saveText2.textContent = count;
    setInterval(()=>{
        count++;
        saveText2.textContent = count;

    }, 1000);
}
// ===============================================

// Ex:9
const start = document.querySelector(".start");
const startText = document.querySelector(".start-text");
const stop = document.querySelector(".stop")



start.addEventListener("click", funtionStart);

function funtionStart(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // for formet start 
    minutes = formetTime(minutes);
    seconds = formetTime(seconds);
    // for formet end

    const time = hours + ":" + minutes + ":" + seconds; 
    startText.textContent = time;

    setInterval(funtionStart, 1000);
}

// for formet 
function formetTime(value){
    if(value < 10){
        value = "0" + value;
    }
    return value;


}

// Ex:10 
const startBtn = document.querySelector(".start");
const startText = document.querySelector(".start-text");

startBtn.addEventListener("click", startTime);

function startTime(){
    let hours =  new Date().getHours();
    let minutes =  new Date().getMinutes();
    let seconds =  new Date().getSeconds();

    // formet hours 
    minutes = fometTime(minutes);
    seconds = fometTime(seconds);
   // formet hours 
    

    
    if(hours>12){
        let newHours = hours-12;
        let periods = "PM"
    }else{
        newHours = hours;
        periods = "AM"
    }

    // formet hours 
    newHours = fometTime(newHours)
    // formet hours 

    const time = "Todays time: " + newHours + ":" + minutes + ":" + seconds + ":" + periods;
    startText.textContent = time;

    setInterval(startTime, 1000)
}

function fometTime (value){
    if(value<10){
        value = "0" + value
    }
    return value;
}




