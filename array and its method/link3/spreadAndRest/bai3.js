function array(x){
    let split = x.split("");
   
    const result = split.reduce((pre, curr) => {
        if(!pre[curr]) {
            pre[curr] = 1;
        } else {
            pre[curr] += 1;
        }
        return pre;
    },{})
    return result;
}

c = "sdfsadfds";

console.log(array(c));