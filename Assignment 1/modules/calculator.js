const Process = require("process");

const ops = Process.argv[2];
const a = +process.argv[3];
const b = +process.argv[4];

function add(x,y){
    console.log(x+y);
}
function sub(x,y){
    console.log(x-y);
}
function divide(x,y){
    if(y==0){
        console.log("Error.Cannot divide by zero");
    } else{
         console.log(x/y);
    }
    
}
function product(x,y){
    console.log(x*y);
}
function power(x,y){
    console.log(x**y);
}
function remainder(x,y){
    console.log(x%y);
}
function percentage(x,y){
    console.log((x/y)*100);
}


if (ops=="add") {
    add(a, b);
} else if (ops=="sub") {
    sub(a, b);
} else if (ops=="divide") {
    divide(a, b);
} else if (ops=="product") {
    product(a, b);
} else if(ops == "power"){
    power(a,b)
} else if(ops == "remainder"){
    remainder(a,b)
} else if(ops == "percentage"){
    percentage(a,b)
} else{
    console.log("Invalid operation")
}