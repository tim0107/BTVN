let n1 = 6;
let n2 = 7;
let n3 = 5;

function p(a, b, c) {
    let chuvi = a + b + c;
    return chuvi;
}
function s(a , b , c) {

    let s = ( a + b + c) / 2;
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    return area;
}

function cosA(a,b,c) {
    return (b * b + c * c - a * a) / (2 * b * c);
}

function tanA(cos) {
    return Math.sqrt((1 / (cos * cos)) - 1);
}

function arctan(tan){
    return Math.atan(tan) * ( 180/Math.PI);
}

function allAngles(a,b,c) {
    let cosA1 = cosA(a, b, c);
    let cosB1 = cosA(b, a, c);
    let cosC1 = cosA(c, a, b);

    let tanA1 = tanA(cosA1);
    let tanB1 = tanA(cosB1);
    let tanC1 = tanA(cosC1);

    let gocA = arctan(tanA1);
    let gocB = arctan(tanB1);
    let gocC = arctan(tanC1);

    return { gocA, gocB, gocC };
}

if ((n1 + n2) > n3 && (n1 + n3) > n2 && (n2 + n3) > n1) {
    if (n1 === n2 && n2 === n3) {
        console.log("Tam giac deu");
        console.log("Chu vi " + p(n1, n2, n3));
        console.log("Dien tich " + s(n1, n2, n3));
        let goc = allAngles(n1,n2,n3);
        console.log("Cac goc A,B,C la: ", goc);

    }
    else if (
        (n1 * n1 + n2 * n2 === n3 * n3) ||
        (n2 * n2 + n3 * n3 === n1 * n1) ||
        (n1 * n1 + n3 * n3 === n2 * n2)
    ) {
        console.log('Tam giac vuong');
        console.log("Chu vi " + p(n1, n2, n3));
        console.log("Dien tich " + s(n1, n2, n3));
        let goc = allAngles(n1,n2,n3);
        console.log("Cac goc A,B,C la: ", goc);
    }
    else if (
        (n1 * n1 + n2 * n2 > n3 * n3) ||
        (n2 * n2 + n3 * n3 > n1 * n1) ||
        (n1 * n1 + n3 * n3 > n2 * n2)
    ) {
        console.log(" tam giac nhon")
        console.log("Chu vi " + p(n1, n2, n3));
        console.log("Dien tich " + s(n1, n2, n3));
        let goc = allAngles(n1,n2,n3);
        console.log("Cac goc A,B,C la: ", goc);

    }
    else if (n1 === n2 || n2 === n3 || n3 === n1) {
        console.log("Tam giac can");
        console.log("Chu vi " + p(n1, n2, n3));
        console.log("Dien tich " + s(n1, n2, n3));
        let goc = allAngles(n1,n2,n3);
        console.log("Cac goc A,B,C la: ", goc);
    }
    else {
        console.log("Tam giac thuong");
        console.log("Chu vi " + p(n1, n2, n3));
        console.log("Dien tich " + s(n1, n2, n3));
        let goc = allAngles(n1,n2,n3);
        console.log("Cac goc A,B,C la: ", goc);
    }
} else {
    console.log("Khong phai la tam giac");
}


 