function count(s) {
    let count = 0;
    let s1 = s.lastIndexOf("n");
    let s2 = s.indexOf("n");
    if(s1 === s2){
        console.log("1")
    } else {
        for( let i = 0; i < s.length; i++){
            if(s[i] === 'n'){
                count++;
            }
        }
        console.log(count);
    }
    
}

count("innin");






