function bai16(s) {
    let maxStr = "";

    for (let j = 0; j < s.length; j++) {
        let currentStr = s[j];
        for (let i = j + 1; i < s.length; i++) {
            if (currentStr.includes(s[i])) {
                break;
            } else {
                currentStr += s[i];
            }
        }

        if (currentStr.length > maxStr.length) {
            maxStr = currentStr;
        }
    }

    return maxStr;
}

console.log(bai16("abcjaklm"));  
