const array = [
    { name: 'name1', age: 12 },
    { name: 'name2', age: 20 },
    { name: 'name3', age: 15 },
    { name: 'name4', age: 10 },
    { name: 'name5', age: 27 }
];


let result = array.reduce(function(acc, cur){
    acc.push(cur.name);
    return acc;
},[])

console.log(result);