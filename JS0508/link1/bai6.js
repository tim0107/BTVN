let n = 6;
let result = 0;
let sum = [];

for( let i = 1; i < n; i++ ){
    if( n % i === 0) {
        sum.push(i);
       //console.log(sum)

    }
}

for(let i = 0; i < sum.length; i++ ){
    result += sum[i]

}
console.log(`${result}`)

if( n === result) {
    console.log("Số hoàn hảo")
} else {
    console.log("Không hoàn hảo")
}




