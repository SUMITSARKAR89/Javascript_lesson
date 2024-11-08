/* 1 */const slideShowElements = document.querySelectorAll(".slideshow-element"); /*1. take slideshow-element */


/* 6 */let countElements = 1;

/*2. for run */
setInterval(() =>{
/* 6 */ countElements ++;    

    let currentElement = document.querySelector(".current"); /* 3. take */
    currentElement.classList.remove("current"); /* 4.  remove  */
    // currentElement.nextElementSibling.classList.add("current"); /*5. show next */

    /* 6 */if(countElements > slideShowElements.length){
        slideShowElements[0].classList.add("current");
        countElements = 1;
    }else{
        currentElement.nextElementSibling.classList.add("current"); /*5. show next */

    }


}, 3000);

// step 1 : take a slideshow elements 
// step 2 : create a set interval 
// step 3 : select current class under the set interval
            //step 4 - create remove classlist 
            //step 5 - create next classlist
// step 6 : create count time 
            // - create if else loop 
            // -  length  
            // -  insert STEP 5 on it  



/*const slideShowElements = document.querySelectorAll(".slideshow-element");

let countElements = 1;
setInterval(() => {

    countElements ++;
    let currentElement = document.querySelector(".current");

    currentElement.classList.remove("current");
    if(countElements > slideShowElements.length){
        slideShowElements[0].classList.add("current");
        countElements = 1;
    }else{
        currentElement.nextElementSibling.classList.add("current");

    }
}, 2000);*/