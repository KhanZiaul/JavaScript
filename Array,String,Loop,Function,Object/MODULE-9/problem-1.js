// Understand recursion

function sum(i){

    if(i===10){
        return 10;
    }
    return i+sum(i+1);
}

let result = sum(1);

console.log(result);