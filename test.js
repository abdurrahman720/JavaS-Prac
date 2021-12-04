const prompt = require('prompt-sync')();
var msg =prompt("say something:   ");
console.log(msg);

let arr =[1,2,3,4,5];
for (let index in arr) {  //for in works with the index in the array
    console.log(index);
}
for (let element of arr) {   //for of works with the elements in the array
    console.log(element);
}