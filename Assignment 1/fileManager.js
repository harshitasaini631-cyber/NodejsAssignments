const fs = require("fs");


// read operation

// fs.readFile("./text.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log("Something went wrong");
//     } else{
//         console.log(data);
        
//     }
// });

// //write operation
// fs.writeFile("./text.txt","New written file",(err)=>{
//     if(err){
//         console.log("something went wrong");
//     } else{
//         console.log("File written successfully");
//     }
// });


//update file
// fs.appendFile("./text.txt","\nThis is updated file",(err)=>{
//     if(err){
//         console.log("Something went wrong");
//     } else{
//         console.log("File updated successfully");
//     }
// });

// //rename operation
// fs.rename("./text.txt","./text2.txt",(err)=>{
//     if(err){
//         console.log("Something went wrong");
//     } else{
//         console.log("File renamed successfully");
//     }
// });

//delete operation
fs.unlink("./text2.txt",(err)=>{
    if(err){
        console.log("Something went wrong");
    } else{
        console.log("File deleted successfully");
    }
});