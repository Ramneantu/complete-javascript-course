var markMass = prompt("What does Mark weigh?");
var johnMass = prompt("What does John weigh?");
var markHeight = prompt("How high is Mark?");
var johnHeight = prompt("How high is John?");

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI, johnBMI)

var bol = markBMI > johnBMI;
console.log("Mark's BMI > John's BMI? " + bol)