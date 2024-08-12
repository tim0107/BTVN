function bai19(n){
    let number = 0;
    for(let i = 0;i < n;i++){
        number = Math.sqrt(2 + number);
    }
    console.log(number);
}
bai19(5);