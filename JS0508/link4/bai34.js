function Even(n) {
    let number = n.toString().split("");  
    let numArray = number.map(Number);    

    
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 !== 0) {  
            return false;
        }
    }
    return true;  
}


let n = 263;
let isTrue = Even(n);  

if(isTrue){
    console.log("Đúng")
}else {
    console.log("sai")

}
