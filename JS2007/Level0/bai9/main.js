a = "k";

function uppperCase(a) {
    if( a === a.toUpperCase()){
        console.log(" In hoa")
    } else if ( a === a.toLowerCase()) {
        console.log("In thuong")
    }
    return a;
}

let result = uppperCase(a);

console.log(result);