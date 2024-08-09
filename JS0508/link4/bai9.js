function cal(n) {
    let number = 1;
    for(let i = 1; i <= n;i++){
        number *= i ;
    }
    console.log(number);
}

cal(4);