// console.log(window)
//Example 1
/*fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((response) => response.json())
.then((json) => console.log(json))
.catch((err) => console.log(err)) //to catch error*/

//Example 2
/*fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      id: 1,
      title: 'sumit',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));*/

    // =======================================================================
//Example 3

//make request call
const makeRequest = async (a, config) =>{
    const response = await fetch(a, config); //const response = await fecth(""https://jsonplaceholder.typicode.com/posts"")
    
    // to check Error 
    if (!response.ok){
      const text = `Error: ${response.status}`;
      throw new Error(text)
    }
    //end

    const dataReult = await response.json();
    return dataReult;

}
// ========================Example 3================================
//GET data
const getData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((response)=> console.log(response))
    .catch((err) => console.log(err))
}
getData();

// =============================Example 4===============================
//Send data (POST)

const sendData = () =>{
  makeRequest("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: JSON.stringify({
      id: 101,
      title: 'sumit sarkar',
      body: 'sutrapur',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  .then((response)=> console.log(response))
  .catch((err) => console.log(err))
}
sendData();

//==============================Example 5==============================
//update data (PUT)

const updateData = () =>{
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'PUT',
    body: JSON.stringify({
      id: 101,
      title: 'bappy sarkar',
      body: 'sutrapur',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  .then((response)=> console.log(response))
  .catch((err) => console.log(err))

updateData();


//==============================Example 6==============================
// (PATCH)

const updateData = () =>{
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'PATCH',
    body: JSON.stringify({
     
      title: 'List of names',
      
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })

  .then((response)=> console.log(response))
  .catch((err) => console.log(err))
}
updateData();


//==============================Example 6==============================
// Delete data (DELETE)
const deleteData = () =>{
  makeRequest("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'DELETE',
   
  })

  .then((response)=> console.log(response))
  .catch((err) => console.log(err))
}
deleteData();

    