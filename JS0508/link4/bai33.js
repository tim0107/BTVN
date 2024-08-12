function Odd(n) {
    let number = n.toString().split("");  
    let numArray = number.map(Number);    

    
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 === 0) {  
            return false;
        }
    }
    return true;  
}


let n = 7;
let isTrue = Odd(n);  

if(isTrue){
    console.log("Đúng")
}else {
    console.log("sai")

}