let a = 1;
let b = -5;
let c = 6;

let result = b * b - 4 * a * c;

if (result > 0) {
    let x1 = (-b + Math.sqrt(result)) / (2 * a);
    let x2 = (-b - Math.sqrt(result)) / (2 * a);
    console.log("x1: " + x1);
    console.log("x2: " + x2);
} else if (result === 0) {
    let x = -b / (2 * a);
    console.log("x: " + x);
} else {
    console.log("Khong co nghiem");
}
