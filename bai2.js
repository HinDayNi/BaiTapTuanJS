var Mark = {heigh: 1.69, mass: 78};
var John = {heigh: 1.95, mass: 92};

var BMI = function(heigh, mass) {
    return mass / (heigh * heigh);
}

var markBMI1 = BMI(Mark.heigh, Mark.mass);
var johnBMI1 = BMI(John.heigh, John.mass);

if (markBMI1 > johnBMI1) {
    console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})!`);
} else {
    console.log(`John's BMI (${johnBMI1}) is higher than Mark's (${markBMI1})!`);
}

// Data 2
Mark = {heigh: 1.88, mass: 95};
John = {heigh: 1.76, mass: 85};

var markBMI2 = BMI(Mark.heigh, Mark.mass);
var johnBMI2 = BMI(John.heigh, John.mass);

if (markBMI2 > johnBMI2) {
    console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})!`);
} else {
    console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`);
}