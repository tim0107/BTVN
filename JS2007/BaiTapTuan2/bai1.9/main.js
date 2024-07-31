function readNumber(a) {
    if (a < 0 || a >= 1000) {
        console.log("Khong hop le")
    }

    const donVi = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    const Chuc = ["mươi", "mốt", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];

    let tram = Math.floor(a / 100);
    let chuc = Math.floor((a % 100) / 10);
    let donvi = a % 10;

    let result = "";

    if (tram > 0) {
        result += donVi[tram] + " trăm";
        if (chuc === 0 && donvi !== 0) {
            result += "lẻ";
        }
    }

    if (chuc > 0) {
        if (chuc === 1) {
            result +=  " mười";
        } else {
            result += " " + donVi[chuc] + " mươi";
        }
   
    }

    if (donvi > 0) {
        if (chuc === 1) {
            result += " " + donVi[donvi];
        } else if (chuc > 1 && donvi === 1) {
            result += " " + Chuc[1];
        } else if (donvi === 5 && chuc !== 0) {
            result += " " + Chuc[5];
        }
        else {
            result += " " + donVi[donvi];
        }
    }

    return result;


}

let number = 85;
console.log(readNumber(number));