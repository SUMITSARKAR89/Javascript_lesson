//ex 1
//onclick methods
document.getElementById("my-h2").addEventListener("click", function (){
    alert("you click the button");
});

//ex 2
// mouseover mouseout

const myMouseover = document.querySelector(".h2");
    myMouseover.addEventListener("mouseover", function (){
        myMouseover.classList.add("my-style");
    });

    myMouseover.addEventListener("mouseout", function() {
        myMouseover.classList.remove("my-style");
    });
    

    //ex 3
// button

document.querySelector(".btn").addEventListener("click", function(){

    let text = this.innerHTML;
    document.querySelector(".head").innerHTML = text + "hello... you click the button";
})

// Ex 4 
// button group 

const len = document.querySelectorAll(".btn-group").length
for(let i=0; i<len; i++){
    document.querySelectorAll(".btn-group")[i].addEventListener("click", function(){

        let btnText = this.innerHTML;
        document.getElementById("call").innerHTML =  "you click " + btnText;
        
    })
    // for change the font color
    function btnGroup(){
        document.getElementById("call").style.color = "red";
        document.getElementById("call").style.textTransform = "uppercase";
    }

};


// Ex 5
// Ex 6
// from event listener 

function fromFunction(){
    let a = document.forms["myFrom"]["name"].value;
    if(a === ""){
        alert("Please fill the name")
        return false;
    }

   
};
function myInput(){
    let uperInput = document.getElementById("inputId");
    uperInput.value = uperInput.value.toUpperCase();
};

function changeInput(){
    let change = document.getElementById("inputId2");
    change.value = change.value.toUpperCase();
};

// Ex 7
// mouse over on button

let obj = document.getElementById("button");
function mouseOv(){
    
    obj.innerHTML = "mouse over on "
    obj.style.backgroundColor = "red"
}
function mouseOt(){
    obj.innerHTML = "mouse over out"
     obj.style.backgroundColor = "green"
};

let obj2 = document.getElementById("button2")
function mouseDw(){
    obj2.innerHTML = "release me"
     obj2.style.backgroundColor = "red"
}
function mouseUp(){
    obj2.innerHTML = "your release me"
     obj2.style.backgroundColor = "black"
}

// Ex 8
// try addeventlistener 

const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", clickFunction);
addBtn.addEventListener("mouseover", mouseoverFunction);
addBtn.addEventListener("mouseout", mouseoutFunction);

function clickFunction(){
    document.getElementById("demo").innerHTML += "clicked <br>"
};
function mouseoverFunction(){
    document.getElementById("demo").innerHTML += "mouseover <br>"
};
function mouseoutFunction(){
    document.getElementById("demo").innerHTML += "mouseout <br>"
}

// Ex 9
// remove event listener 

document.getElementById("myDiv").addEventListener("mousemove", mouseFunction);
function mouseFunction (){
    document.getElementById("removeDemo").innerHTML = Math.random();
};
function removeMouse(){
    document.getElementById("myDiv").removeEventListener("mousemove", mouseFunction)
}








