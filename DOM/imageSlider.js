
// 1. example 1
// image 

let imageFolder = document.getElementById("myimg");

function pic1(){
    imageFolder.src = "img/sumit.jpg";
};
function pic2(){
    imageFolder.src = "img/hritik.jpg";
}






// 2. example 2
// image slider

let photos = ["img/IMG_1 (1).jpg", "img/hritik.jpg", "img/sumit.jpg"];
let imageSlider = document.querySelector(".slide-img");

let a = 0;
function next(){
    a++;
    if(a >= photos.length){
        a = 0;
        imageSlider.src = photos[a];

    }else{
        imageSlider.src = photos[a];
    }
};
 function prev(){
    a--;
    if( a < 0){
        
        a= photos.length-1;
        imageSlider.src = photos[a];
        
    }else{
        imageSlider.src = photos[a];
    }

 }
