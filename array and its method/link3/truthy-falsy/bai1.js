function isTruthy(a) {
    if (a){
        console.log(`${a} khong la truthy`)

    } else {
        console.log(`${a} khong phai la truthy`)
    }
}

console.log(isTruthy("string"));