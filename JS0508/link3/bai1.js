function strRepeat(word) {

    for(let i = 0;i < word.length;i++){
        let index = word.indexOf(word[i]); 
        let lastIndex = word.lastIndexOf(word[i]) 
        //console.log(index,lastIndex);

        if( index === lastIndex){
            return i;           
        }
    }
    return -1;

}

console.log(strRepeat("nnamee"));
console.log(strRepeat("aabb"));