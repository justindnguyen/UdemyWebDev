function bmiCalculator(weight, height) {
    // weight / Math.pow(height, 2)
    return weight / (height * height);
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);

var bmiRound = Math.round(bmi);
console.log(bmiRound);