var job = 'teacher';
switch (job) {
    case 'teacher': console.log('Is a teacher'); break;
    case 'driver' : console.log('Is a driver'); break;
    default: console.log('Is smth else'); //break not necc in the last clause
}


//matches true with case expressions
var age = 16
switch (true) {
    case age < 13:
        console.log("Kid");
        break;
    case age >= 13 && age < 20:
        console.log("Adolescent");
        break;
    case age >= 20 && age < 30:
        console.log("Young man");
        break;
    default: console.log("Man");
}