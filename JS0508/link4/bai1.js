function cal(n) {
    let number = 0;
    for(let i = 0; i <= n;i ++){
        number += i;
    }
    console.log(number);

    let result = number - 1 + n;
    console.log(result);
}

cal(4);

