const listPersons = [
    { name: "Hoàng Duy Khánh", age: 18, gender: "nam" },
    { name: "Lê Văn Nam", age: 60, gender: "nam" },
    { name: "Trần Chiến Công", age: 8, gender: "nam" },
    { name: "Bùi Việt Hoàng", age: 22, gender: "nam" },
    { name: "Phạm Minh Chiến", age: 16, gender: "nam" },
    { name: "Ngô Thị Thanh Tình", age: 45, gender: "nữ" },
    { name: "Nguyễn Mai Hường", age: 8, gender: "nữ" },
    { name: "Nguyễn Mai Phương", age: 14, gender: "nữ" },
    { name: "Lê Văn Hà", age: 55, gender: "nam" },
]
let array = [];
for( let i = 0; i < listPersons.length;i++){
    array.push(listPersons[i].age);
}

let treCon = 0;
let thanhNien = 0;
let nguoiGia = 0;

for(let i = 0; i < array.length; i++){
    if(array[i] >= 50){
        nguoiGia += 1;
        //console.log(`${listPersons[i].name} đang ở tuổi già`);
    } else if ( array[i] >= 18){
        thanhNien += 1;
    } else {
        treCon += 1;
    }
};

console.log(`Nguười già: ${nguoiGia}`);
console.log(`Thanh niên: ${thanhNien}`);
console.log(`Trẻ con: ${treCon}`);




