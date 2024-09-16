for(let i =0; i<3; i++){
    document.querySelectorAll(".mybutton")[i].addEventListener("click", function (){
        let text = this.innerHTML;
        console.log(text);

        // function call
        audioPlay(text);
        

    });
}

// keyboard use
document.addEventListener("keypress",function(event){
let text = event.key;
audioPlay(text);
});


function audioPlay(text){
    switch (text) {
        case "1":
            var audio = new Audio ("sound/audio1.mp3.mp3");
            audio.play();
            break;

        case "2":
            var audio = new Audio ("sound/audio2.mp3.mp3");
            audio.play();
            break;
        case "3":
            var audio = new Audio ("sound/audio3.mp3.mp3");
            audio.play();
            break;
    }
}

