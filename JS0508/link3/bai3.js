function calNumber(word) {
    let array = [];
    let resultArray = 0;
    for( let i = 0; i < word.length; i++){
        if(!isNaN(word[i])){
            array.push(+word[i])
           // console.log(word[i]);
        }
    }
    //console.log(array)
    for ( let i = 0; i < array.length;i++){
        resultArray += array[i];
    }
    console.log(resultArray)

}

calNumber("124fsa777f")