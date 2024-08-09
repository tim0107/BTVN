function cal(n) {
    let number = 0;
    for(let i = 0; i <= n;i ++){
        number += (1 / (2 * i + 1));
    }
    console.log(number);
}

cal(4);