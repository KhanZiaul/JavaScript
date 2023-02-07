// factorial in recursion

function factorial(i){
    if(i===1){
        return 1;
    }

    return i*factorial(i-1);
}

let result = factorial(5);

console.log(result);