/*var boktrita = "Agami Eid er por andolon hobe.";
var count = 0;
for (var i=0;i<boktrita.length;i++){
    if (boktrita[i]==" "){
        count++;
    }
}
count++;
console.log(count);*/

function wordCount(boktrita){
    var count=0;
    for (var i=0;i<boktrita.length;i++){
            if (boktrita[i]==" "){
                count++
            }
    }
    count++;
    return count;
}

function SenCount(boktrita){
    var count=0;
    for (var i=0;i<boktrita.length;i++){
            if (boktrita[i]=="."){
                count++
            }
    }
    
    return count;
}
function senTcount(boktrita){
    var count=0;
    for(var i=0;i<boktrita.length;i++){
        if(boktrita[i]=="."||boktrita[i]=="?"||boktrita[i]=="!"){
            count++
        }
    }
    return count;
}

var Vowels=["a","e","i","o","u","A","E","I","O","U"];

function Vowel(boktrita){
    var count=0;
    for(var i=0;i<boktrita.length;i++){
        for(var j=0;j<Vowels.length;j++){
            if(boktrita[i]==Vowels[j])
            {
                count++
            }    
        }               
    }
    return count;
}

var Vowels=["a","e","i","o","u","A","E","I","O","U"]

var vashon = "Kabya ekjon dustu bita."
console.log(wordCount(vashon))

var para="I am Abdur Rahman!I read in CSE in NIT.Where do your read?"
console.log(Vowel(para));

