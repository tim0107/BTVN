function cal(n) {
    let number = 0;
    for(let i = 1; i <= n;i ++){
        number += (1 / (i * (i - 1))); // sai 
    }
    console.log(number);
}

cal(4);