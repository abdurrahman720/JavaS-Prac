//we have an array with so many duplicate elements and we need to sort them into a new array having a single element
//calling a function 

function remvDup(arr){
    var selected=[]; //this varibale will be used as the new array having single element of the duplicates
    for(var i=0;i<arr.length;i++){ //we need to check every element of the parent array and put it to a temp varibale to check further
        var name= arr[i];
        if(selected.indexOf(name)==-1){ //now we are checking if the new stored element is already in selected array or not
            selected.push(name);
        }
    }
    return selected
}

var numbers=[50,60,50,45,45,45,10,30,70];
console.log(remvDup(numbers));

//this time,we're working with string and that's why no blank array should be declared and we'll use + operator instead of push
function remvLett(sen){
    var crcter=[];
    for(var i=0;i<sen.length;i++){
        var tempL=sen[i];
        if(crcter.indexOf(tempL)==-1){
           crcter=crcter+tempL;
        }
    }
    
    return crcter;
}
var love="I love yooouu"
console.log(remvLett(love));

//Ignore the element(s) which are double in the array
// we can use lastIndexOf func; it will check the elements from the backward and if there are two of any element there will be 2 index number
 function ignDup(arr){
     var selected=[];
     for(var i=0;i<arr.length;i++){
         var tempA=arr[i];
         if(arr.indexOf(tempA)==arr.lastIndexOf(tempA)){ //lastIndexOf will have the same number if there s=is just only 1 element. It just start checking from the backward
             selected.push(tempA)
         }
     }
     return selected;
 }

 var number=[50,60,50,45,45,45,10,30,70];
 console.log(ignDup(number))

//Remv the even numbers and keep the odd numbers by one 
function kickEven(arr){
    var uniqNum=[];
    var finalNum=[];
    for(var i=0;i<arr.length;i++){
        var tempN=arr[i]
        if(uniqNum.indexOf(tempN)==-1){
            uniqNum.push(tempN)
        }
    }
    for(var i=0;i<uniqNum.length;i++){
        var fTempN=uniqNum[i];
        if(fTempN%2!=0){   //if not even then only push;otherwise don't
            finalNum.push(fTempN)
        }
    }
    return finalNum
}
var Num=[1,2,2,3,3,4,5,5,5,6]
console.log(kickEven(Num))


//remv the element that are even in Count and keep single element that are odd in Count
function remvEven(arr){
    var uniqNum=[];
    var NumCount={}; //we need to count how many times the elements are in counted
    var output=[];
    for(var i=0;i<arr.length;i++){
        var tempN=arr[i]
        if(uniqNum.indexOf(tempN)==-1){
            uniqNum.push(tempN)
            NumCount[tempN]=1; //since it's the new element and has not been counted before
        }
        else{
            NumCount[tempN]=NumCount[tempN]+1; //else: this is a repeated element and we have found it again; so count should be +1 again
        }
    }
    for(var i=0;i<uniqNum.length;i++){
        var tempF=uniqNum[i]
        if(NumCount[tempF]%2!=0){ //we have the count no. by each element in dictionary; we need to check if it is even;
            output.push(tempF)
        }
    }
    return output;
}
console.log(remvEven(Num));