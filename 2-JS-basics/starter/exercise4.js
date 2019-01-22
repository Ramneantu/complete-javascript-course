//No real class
var john = {
    fullName:  'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}
var mark = {
    fullName:  'Mark Smith',
    mass: 62,
    height: 1.65,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

john.calcBMI();
mark.calcBMI();
console.log(john, mark);