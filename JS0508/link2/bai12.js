function swap(word) {
    let split = word.split("");
    for(i = 0;i < split.length - 1; i += 2) {
        split[1] += split[i];
    }
}


swap("abc"); // not done