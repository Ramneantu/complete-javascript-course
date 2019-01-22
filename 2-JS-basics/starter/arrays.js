/****************************
* Arrays
*/


// Zero based
var names = ['John', 'Mark', 'Bill'];
var years = new Array(1990, 1945, 2000);

console.log(names[0]);
console.log(names);
console.log(names.length);

names[1] = 'Ben';
// No out of bounds in JS
names[5] = 'Mary';
names[names.length] = 'Last';
console.log(names);


//Array methods
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);

john.shift();
console.log(john);

console.log(john.indexOf(23));
var isDesigner = john.indexOf('designer') === -1 ? 'not a designer' : 'a designer';
console.log("John is " + isDesigner);
