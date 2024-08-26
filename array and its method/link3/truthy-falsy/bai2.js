function isFalsy(a) {
    if (!a){
        console.log(`${a} khong la falsy`)

    } else {
        console.log(`${a} khong phai la falsy`)
    }
}

console.log(isFalsy("string"));