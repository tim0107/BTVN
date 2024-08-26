function c(...result) {
    let tong = 0;
    for( let i = 0;i < result.length; i++){
       tong += result[i];

    }
    return tong;


}


let a = [2,3,4,5,6,7,8,9];

console.log(c(...a));