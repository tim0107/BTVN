function phone(number) {
    let slice = number.slice(0, 3);
    let slice2 = number.slice(3, 6);
    let slice3 = number.slice(6, 10);

    console.log(slice + "-" + slice2 + "-" + slice3);
    
} 
phone("1234567890");