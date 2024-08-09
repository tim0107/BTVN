function cal(n) {
    let number = 0;
    for(let i = 1; i <= n;i ++){
        number += (1 / (2 * i));
    }
    console.log(number);
}

cal(4);