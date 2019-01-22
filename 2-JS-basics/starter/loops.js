/*****************************
* Loops and iteration
*/


for(var i = 1; i <= 5; i++){
    console.log(i);
}

var john = ['John', 'Smith', 1909, 'designer', false];
for(var i = 0; i < john.length; i++){
    console.log(john[i]);
}


//While, continue, break
var i = 0;
while(i < john.length) {
    //Recall the typeof operator
    if(typeof john[i] !== 'string') 
        continue;
    console.log(john[i]);
    i++;
}