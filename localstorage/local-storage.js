// setItem (key, value )
// console.log(localStorage) 
console.clear()

// =================================================== 

// EXAMPLE = 1 (STORE)
// setItem (key,value)

localStorage.setItem ("UserName", "sumit sarkar");
localStorage.setItem ("Password", "124345678");


// ====================================================== 

// EXAMPLE = 2 (READ)
// getItem(key )

const userName = localStorage.getItem("UserName");
const userPassword = localStorage.getItem("Password");
console.log(userName, userPassword)


// ========================================================

//EXAMPLE = 3 (UPDATE)
// example 2 + update 
localStorage.setItem ("UserName", " Tanveer isalm pavel");
localStorage.setItem ("Password", "124345678");

// ====================================================== 

// EXAMPLE = 4 (READ)
// removeItem(key )

localStorage.removeItem ("UserName");
localStorage.removeItem ("Password");

// ====================================================== 

// EXAMPLE = 5 ()

// array to stringify 
const countries = ['bangladesh', 'india', 'pakistan', 'nepal'];
localStorage.setItem("countries", JSON.stringify(countries));

// stringify to array 

const coutryList = JSON.parse(localStorage.getItem('countries'));
console.log(coutryList)


// ============================================================ 
// ============================================================ 

// Example one 
sessionStorage.setItem ("UserName", "sumit sarkar");

// Example two 
const result = sessionStorage.getItem("UserName");
console.log(result);

// Example three 
sessionStorage.removeItem('UserName');

// Example four 
const userInfo = {id: "101", name: 'sumit', country: "bangladesh"};
sessionStorage.setItem("userInfo",JSON.stringify(userInfo))

const userProfile = JSON.parse(sessionStorage.getItem('userInfo'));
console.log(userProfile);

// ============================================================ 
// ============================================================ 
document.cookie = "username = sumit sarkar", "expired = Fri, 8 Nov 2024 16:39:00 GMT"