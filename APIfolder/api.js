 /* EXAMPLE =1 
 To find a properties */

const getData = () =>{
    const xhr = new XMLHttpRequest (); // console.log(xhr);
    

/*To open responses */
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    /*To load/process responses */
    xhr.onload = () =>{
        let data = xhr.response;  //  console.log(data);
        console.log(JSON.parse(data));/*to convert javascript */

    }

    xhr.onerror = () =>{
        console.log('response an Error !') /*To find an error */
    }
/*To send responsez */
    xhr.send();

}

getData();

// ===================================================================================
/*EXAMPLE = 2
TO REQUEST MULTIPLE API */
const sendRequest = (method, url) =>{
    const xhr = new XMLHttpRequest();

    // xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.open(method, url);
    xhr.onload = () =>{
        let data = xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.onerror = () =>{
        console.log("Error detected")
    }
    xhr.send()

}

const getData = ()=>{
   sendRequest( "GET","https://jsonplaceholder.typicode.com/posts")
}

getData()