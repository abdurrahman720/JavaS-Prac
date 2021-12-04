var word="jantu"
var reverseword="";
for(var i=word.length-1;i>=0;i--){
    var letter=word[i];
    reverseword=reverseword+letter;
}
console.log(reverseword)

//making it func:
function revWord(word){
    var reverseword="";
for(var i=word.length-1;i>=0;i--){
    var letter=word[i];
    reverseword=reverseword+letter;
}
return reverseword;
}

console.log(revWord("Sadiya"))


//polydrom

function revWordP(word){
    var reverseword="";
for(var i=word.length-1;i>=0;i--){
    var letter=word[i];
    reverseword=reverseword+letter;
}
if(reverseword===word){
    console.log("It's a polydrom word")
}
return reverseword;
}
console.log(revWordP("madam"))


//this time we need to work with sentence and to count each word, we need to split these word using split func
function revSentence(sentence) {
    var reverseSen="";
    var words=sentence.split(" ");

    for(var i=words.length-1; i>=0;i--) {
        var word = words[i];
        reverseSen=reverseSen+" "+word;
} 
return reverseSen;
}
console.log(revSentence("I am a good boy"))

//reversing letters in the words of a sentence
function revWordinSen(wordssentence) {
    var reverseWordsinSen=""; //so we need to store every reversed word there
    var finalSen=" "; //now every reversed word need to be connected in this final varibale
    var words=wordssentence.split(" "); //we are separating the words from the sentence

    for(var i=0; i<words.length; i++) { //this time we're starting from the beginning 
        var word = words[i]; //we just got a word;it's time to reverse It
        reverseWordsinSen=revWord(word); //we can reverse the word by using revWord func that was created a while ago
        finalSen=finalSen+" "+reverseWordsinSen; //we got the reverse word and we need to connect it to the final
} 
return finalSen;
}
console.log(revWordinSen("I am a good boy"))