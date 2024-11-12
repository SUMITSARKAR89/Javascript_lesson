const selectFontSize = document.getElementById("selectFontSize");
const selectBgColor = document.getElementById("selectBgColor");
const resetBtn = document.getElementById("resetBtn");
const main = document.getElementById("main");
const text = document.querySelector("p");



//changeFontSize
// const changeFontSize = (event) =>{
//     main.style.fontSize = event.target.value;
// }
// const changeBgColor = (event) =>{
//     main.style.backgroundColor = event.target.value;
// }

const clearStorage = () =>{
    localStorage.removeItem("bgColor");
    localStorage.removeItem("fontSize");
}

// to set localStorage 
const changeFontSize = (event) =>{
    const newFontSize = event.target.value;
    main.style.fontSize = newFontSize; //main.style.fontSize = event.target.value;
    localStorage.setItem("fontSize", newFontSize)
};
const changeBgColor = (event) =>{
    const newBgColor = event.target.value;
    main.style.backgroundColor = newBgColor; //main.style.backgroundColor = event.target.value;
    localStorage.setItem("bgColor", newBgColor);
}


//add event listener
selectFontSize.addEventListener("change", changeFontSize);
selectBgColor.addEventListener("change", changeBgColor);
resetBtn.addEventListener("click", clearStorage);
