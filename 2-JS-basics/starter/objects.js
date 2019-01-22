/********************************
* Objects and properties
*/

var john = {
    first: 'John',
    last: 'Smith',
    year: 1990,
    family: ['Jane', 'Mark', 'Bob'],
    married: false,
    //Does not have access to member vars without this keyword!!!
    getAge: function(currentYear) {
        return currentYear - this.year;
    },
    setAge: function(currentYear) {
        //Creates a new field and sets it
        this.age = currentYear - this.year;
    }
};

console.log(john.last);
console.log(john['last']);
var x = 'year';
console.log(john[x]);

john.job = 'designer';
john['married'] = true;
console.log(john);
console.log(john.getAge(2000));

var jane = new Object();
jane.name = 'Jane';
jane.dead = false;
console.log(jane);

