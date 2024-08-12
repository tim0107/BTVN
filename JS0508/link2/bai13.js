function doiXung(s) {
    s = s.toLowerCase(); 
    for (let i = 0; i < s.length; i++) {  
        if (s[i] !== s[s.length - i - 1]) {
            return false;
        }
    }
    return true;
}


if(doiXung("Racecar")){
    console.log("Đối xứng");
} else {
    console.log("Không Đối xứng");
}
