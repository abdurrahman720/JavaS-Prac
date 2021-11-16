const prompt = require('prompt-sync')();

function MMtoM (mm){
    result= mm/1000;
    return result;
}
function MMtoCM (mm){
    resultc= mm/10;
    return resultc;
}

var Melemeter = prompt("input the mm: ");

var Fol = MMtoM(Melemeter);
var Folc = MMtoCM(Melemeter);

var choice = prompt("choose your prefrred unit- 1 for M and 2 for Cm and 3 for both: ");
if (choice==1){
    console.log("The calculated Meter is :",Fol);
}
if (choice==2){
    console.log("The calculated Centimeter is :",Folc);
}
if (choice==3){
    console.log("The calculated Centimeter is :",Folc,"The calculated Meter is :",Fol);
  }
else{
    console.log("You have entred wrong keyword! Please select between 1 to 3");
}
