/*********************************
* Functions
*/

function calculate(birthYear) {
    return 2018 - birthYear;
}

var age = calculate(1990);
console.log(age);

//Void
function yearsUntilRetirement(birthYear, firstName) {
    var age = calculate(birthYear);
    var retire = 65 - age;
    console.log(firstName + ' retires in ' + retire + ' years.');
}

yearsUntilRetirement(1990, 'John');

