/********************
* Function expressions and statements
*/

//function declaration
//function whatDoYouDo(job, name) {}


//function expression
var whatDoYouDo = function(job, name) {
    switch(job) {
        case 'teacher': return name + ' teaches';
        default: return name + ' is unemployed';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'John'));


/*
The only difference is that you can call declared functions before their declaration, 
as they are hoised to the top of the script (like Java, unlike C++)
*/