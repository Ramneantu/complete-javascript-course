///////////////////////////////////////
// Lecture: Hoisting

/*

calculateAge(1990);

function calculateAge(year) {
    console.log(2018 - year);
}

//retirement(1978) does not work, not yet defined
var retirement = function(year) {
    console.log(65 - (2018 - year))
}

*/














///////////////////////////////////////
// Lecture: Scoping


// First scoping example

// A function within a another func has access to all the vars of the parent function
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain

/*

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}

*/


///////////////////////////////////////
// Lecture: The this keyword

console.log(this);

function calculate(year) {
    console.log(2016 - year);
    console.log(this);
}

var john = {
    name: 'John',
    yoB: 1990,
    calcAge: function() {
        console.log(this);
        function inner() {
            //this refers to window here
            console.log(this);
        }
        inner();
    }
}

john.calcAge();

var mike = {
    name: 'Mike',
    yoB: 1984
}

mike.calcAge = john.calcAge;
// 'This' only gets assigned at method call, otw it would always refer to john 
mike.calcAge();








