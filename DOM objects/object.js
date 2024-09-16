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


//   ex:2
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

