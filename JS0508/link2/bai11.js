function camelCase(word) {
    let split = word.split(" ");
    let map = split.map(r => r.charAt(0).toUpperCase() + r.slice(1).toLowerCase());
    let fix = map.join("");
    fix = fix.charAt(0).toLowerCase() + fix.slice(1);
    console.log(fix);
}

camelCase("hello world of programming");
