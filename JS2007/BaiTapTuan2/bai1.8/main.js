let year = 2017;

function amLich(a) {
    let result = (a - 4) % 12;
    switch (result) {
        case 0:
            return "Tý";
        case 1:
            return "Sửu";
        case 2:
            return "Dần";
        case 3:
            return "Mão";
        case 4:
            return "Thìn";
        case 5:
            return "Tỵ";
        case 6:
            return "Ngọ";
        case 7:
            return "Mùi";
        case 8:
            return "Thân";
        case 9:
            return "Dậu";
        case 10:
            return "Tuất";
        case 11:
            return "Hợi";
    }
}

function thienCan(b) {
    let thienCanResult = (b + 6) % 10;
    switch (thienCanResult) {
        case 0:
            return "Giáp";
        case 1:
            return "Ất";
        case 2:
            return "Bính";
        case 3:
            return "Đinh";
        case 4:
            return "Mậu";
        case 5:
            return "Kỷ";
        case 6:
            return "Canh";
        case 7:
            return "Tân";
        case 8:
            return "Nhâm";
        case 9:
            return "Quý";
    }
}

let amLichResult = amLich(year);
let thienCanResult = thienCan(year);

console.log("Năm âm lịch là: " + thienCanResult + " " + amLichResult);
