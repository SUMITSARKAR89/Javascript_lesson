const videoPlay = document.querySelector("video");
// console.log(videoPlay);

videoPlay.addEventListener("canplay",  ()=> {
console.log("canplay");

});

videoPlay.addEventListener("play", ()=> {
    console.log("play")
});

videoPlay.addEventListener("playing", ()=>{
    console.log("playing")
});

videoPlay.addEventListener("pause", ()=>{
    console.log("pause")
});

videoPlay.addEventListener("volumechange", ()=>{
    console.log("volumechange")
});

videoPlay.addEventListener("ended",()=>{
    console.log("thanks foe watching")
});