function cal(n) {
    let number = 0;
    for(let i = 1; i <= n;i ++){
        number += (i / (i + 1));
    }
    console.log(number);
}

cal(4);