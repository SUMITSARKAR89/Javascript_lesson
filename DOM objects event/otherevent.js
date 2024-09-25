window.addEventListener("load", ()=>{
    console.log("load");
});
window.addEventListener("unload", ()=>{
    console.log("unload");
});

window.addEventListener("scroll", ()=>{
    console.log("scroll");
});





// window.addEventListener("resize", ()=>{
//     console.log("resize");
// });

window.addEventListener("resize", ()=>{
    let width = window.outerWidth;
    let height = window.outerHeight;
    console.log(`height: ${height}, width: ${width}`);
});

const details = document.querySelector("details");
// details.addEventListener("toggle", ()=>{
//     console.log("toggle")
// })

details.addEventListener("toggle", (e)=>{

    let t = e.target.open;
    if (t=== true){
        console.log("open");
    }else{
        console.log("closed")
    }
});