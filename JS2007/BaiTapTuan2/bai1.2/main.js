let text;
// let input = parseInt(prompt("Chon mot thang:")); 
let input = 6;

if (input === 4 || input === 6 || input === 9 || input === 11) {
    text = "Co 30 ngay"; 
} else if (input === 1 || input === 3 || input === 5 || input === 7 || input === 8 || input === 10 || input === 12) {
    text = "Co 31 ngay"; 
} else if (input === 2) {
    text = "Co 28 ngay";
} else {
    text = "Thang khong hop le";
}
console.log(text);
