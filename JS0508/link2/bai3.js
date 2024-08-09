function name(ten) {
    let s = ten.split(" ");

    let result = s.map(r => r.charAt(0).toUpperCase() + r.slice(1).toLowerCase());
    console.log(result.join(" "));
}

name("xuan truong");