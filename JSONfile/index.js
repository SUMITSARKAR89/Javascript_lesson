// // 	//Access
//   const data = require("./data2.json");
//   console.log(data.students[0]);
//   console.log(data.students[0].languages[1]);

//     //Modify
//     data.students[0].name = "bappy";
//     console.log(data.students[0].name);


//     //Delete
//     delete data.students[0].name;
//     console.log(data);


   //conversion
   const data2 = {name: "anis", age : 30};

//    console.log(JSON.stringify(data2)); /*client to server */
    console.log(JSON.parse('{"name" : "belal" }')); /*server to client */


// // ======================================================
// // USE LOOP 
// for(x in data){
//     console.log(x);
//     console.log(data[x]);
// }
