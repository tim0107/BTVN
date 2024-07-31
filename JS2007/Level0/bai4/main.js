let heigh = 1.6;
let weight = 50;

function bmi(heigh,weight) {
    let result = weight / ( heigh * heigh );
    return result;
}

let bmii = bmi(heigh, weight);
console.log("BMI:" + bmii + "m^2");
