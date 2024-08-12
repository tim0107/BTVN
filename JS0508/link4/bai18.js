function Uoc(n){
    let uocArray = [];
    let resultArray = [];
    for(let i = 1; i < n;i++){
        if(n % i === 0){
            uocArray.push(i);
        }
    }

    for(let i = 1; i < uocArray.length;i++){
        if( uocArray[i] % 2 !== 0){
            resultArray.push(uocArray[i])
        }
    }
    console.log(resultArray[resultArray.length - 1]);
}


Uoc(500);