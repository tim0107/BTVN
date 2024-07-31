let n1 = 6;
let n2 = 7;
let n3 = 5;

if ((n1 + n2) > n3 && (n1 + n3) > n2 && (n2 + n3) > n1) {
    if (n1 === n2 && n2 === n3) {
        console.log("Tam giac deu");
    } 
    else if (
        (n1 * n1 + n2 * n2 === n3 * n3) ||
        (n2 * n2 + n3 * n3 === n1 * n1) ||
        (n1 * n1 + n3 * n3 === n2 * n2)
    ) {
        console.log('Tam giac vuong'); 
    } 
    else if (
        ( n1 * n1 + n2 * n2 > n3 * n3) ||
        ( n2 * n2 + n3 * n3 > n1 * n1) ||
        ( n1 * n1 + n3 * n3 > n2 * n2)
    ) {
        console.log( " tam giac nhon")
    }
    else if (n1 === n2 || n2 === n3 || n3 === n1) {
        console.log("Tam giac can");
    }
    else {
        console.log("Tam giac thuong"); 
    }
} else {
    console.log("Khong phai la tam giac");
}


