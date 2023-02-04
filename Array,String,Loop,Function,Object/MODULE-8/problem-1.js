// summation from 1 to n numbers

function summation(n){

    let sum = 0;

    for(let i = 1; i <= n ; i++){

        sum = sum + i;
    }

    return sum;
}

let summationIs = summation(10);

console.log(summationIs);