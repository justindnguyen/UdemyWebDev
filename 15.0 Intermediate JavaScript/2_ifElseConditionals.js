function bmiCalculator (weight, height) {
    var interpretation = weight / (Math.pow(height, 2));
    
    if (interpretation < 18.5) {
        return "Your BMI is " + interpretation + ", so you are underweight.";
    }
    
    if (interpretation >= 18.5 && interpretation <= 24.9) {
        return "Your BMI is " + interpretation + ", so you have a normal weight.";
    }
    
    if (interpretation > 24.9) {
        return "Your BMI is " + interpretation + ", so you are overweight.";
    }
    
    return interpretation;
}