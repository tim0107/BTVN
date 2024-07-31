let day1 = 5;
let day2 = 10;
let cao = 10;

function area(day1,day2 ,cao) {
    let r = (( day1 + day2 ) * cao) / 2;
    return r;
}

let result = area(day1, day2, cao);
console.log(result + "m^2");