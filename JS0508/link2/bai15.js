function ascii(word) {
    let array = [];
    let result = [];
    for (let i = 0; i < word.length; i++) {
        array.push(word.charCodeAt(i));
    }

    for (let i = 0; i < array.length; i++) {
        result.push(array[i] + 3);
    }

    let newWord = String.fromCharCode(...result);
    console.log(newWord);
    return newWord;
}

let r = ascii("name");


function changeBack(r) {
    let array = [];
    let result = [];
    for (let i = 0; i < r.length; i++) {
        array.push(r.charCodeAt(i));
    }

    for (let i = 0; i < array.length; i++) {
        result.push(array[i] - 3);
    }

    let newWord = String.fromCharCode(...result);
    console.log(newWord);


}

changeBack(r);