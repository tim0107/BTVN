let a1 = 3;
let a2 = 1;
let b1 = 7;
let b2 = 9;

if (a1 <= a2 && a2 <= b1) {
    let giao = (a1 + b1) - (a2 + a1);
    let hop = ( a1 + b1) + ( a2 + b2) - giao;
    console.log(" Giao :" + giao + "Hợp :" + hop);
} else if ( (a1 + b1) <= (a2 +b2) ) {
    let giao = ( a2 + b2) - (( a1 - a2) + (b2 - b1));
    let hop = b2 - b1;
    console.log(" Giao :" + giao + "Hợp :" + hop);
} else if (a2 <= a1 && a1 <= b2) {
    let giao = (a2 - b2) - (a1 - a2);
    let hop = ( b1 - a1) + ( b2 - a2) - giao;
    console.log(" Giao :" + giao + "Hợp :" + hop);
} else if ((a2 + b2) <= (a1 + b1)) {
    let giao = ( a1 + b1) - (( a2 - a1) + (b1 - b2));
    let hop = b1 - a1;
    console.log(" Giao :" + giao + "Hợp :" + hop);

} else {
    console.log("Không có giao và hợp")
}

