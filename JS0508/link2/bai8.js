function change(a, b, c) {
    let split = a.split(" ");
    let index = split.findIndex(word => word === b);

    if (index !== -1) {
        split[index] = c;
    }

    let result = split.join(" ");
    
    console.log(result); 
}

change("hello world", "world", "universe");