function sort(word) {
    
    let split = word.split("");
    let sort = split.sort();
    let result = sort.join("");
    console.log(result);
}

sort("hello");