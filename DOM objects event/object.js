/* <input>
    text, number, password, email, date, color, radio, search. time. week, month, url, checkbox, file
  <input/> */
  /*<select/> */
  /*<textarea/> */

//   const inputName = document.getElementById("name");
  const inputName = document.querySelector("input[name=name]")
  inputName.addEventListener("change", changeFunction);

  function changeFunction(a){
    console.log(a); /* find the event */
    console.log(a.type); /* types of event */
    console.log(a.target); /* to select event */
    console.log(a.target.className); /* to select input Class*/
    console.log(a.target.id); /* to select input Id*/
    console.log(a.target.value); /* to print input value*/
  };


//   Ex:2
const programms = document.querySelectorAll("input[name=program]");
// console.log(programms);
// add multiple elements 
Array.from(programms).map((program) =>{
    program.addEventListener("change", checkedFunction);

})
function checkedFunction(e){
    if(e.target.checked){
        console.log(e.target.value);
    }else{
        console.log("unchecked")
    }
}

// Ex:3

const inputDeparment = document.getElementById("department");
// console.log(inputDeparment);

inputDeparment.addEventListener("change", changeSelect);
function changeSelect(m){
 console.log(m.target.value);
}


// Ex:4
const inputMassage = document.querySelector("#textMessage");
// console.log(inputMassage)

inputMassage.addEventListener("change", textareaFunction);
function textareaFunction(e){
    console.log(e);
    console.log(e.target.value);
}

// Ex:5

const form = document.querySelector("form");
const name = form.querySelector(".input-form #name");
const email = form.querySelector(".input-form #email");
const password = form.querySelector(".input-form #password");
//  console.log(name, email, password)

form.addEventListener("submit", submitHandelar);

function submitHandelar(e){
    e.preventDefault();
    // console.log("submit");
    // console.log(name.value);
    // console.log(email.value);
    // console.log(password.value);

    const userInfo = {
        name: name.value,
        email: email.value,
        password: password.value
        
    }
    console.log(userInfo); //print value   

    //clear value
    name.value = "",
    email.value = "",
    password.value = ""
}

