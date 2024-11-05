console.clear();
// console.log(window);

// Example = 1 

axios.get('https://jsonplaceholder.typicode.com/posts')
.then((res) => console.log(res.data))
.catch((err) => console.log(err)) //find error

// ==============================================
// Example = 2
axios.post('https://jsonplaceholder.typicode.com/posts' , {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    
  })
.then((res) => console.log(res.data))
.catch((err) => console.log(err))
// ====================================================
// Example = 3
axios.put('https://jsonplaceholder.typicode.com/posts/1' , {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'sumit',
      body: 'bar',
      userId: 1,
    }),
    
  })
.then((res) => console.log(res.data))
.catch((err) => console.log(err))

// ========================================================

Exapmle = 4

axios.patch('https://jsonplaceholder.typicode.com/posts/1' , {
    method: 'PATCH',
    body: JSON.stringify({
      id: 1,
      title: 'BAPPY',
      body: 'bar',
      userId: 1,
    }),
    
  })
.then((res) => console.log(res.data))
.catch((err) => console.log(err))

// =================================================
// Example =5 

axios.delete('https://jsonplaceholder.typicode.com/posts/1')
.then((res) => console.log(res.data))
.catch((err) => console.log(err)) //find error
