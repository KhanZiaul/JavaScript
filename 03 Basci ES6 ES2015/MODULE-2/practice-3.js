// array reduce method

// const numbers = [ 1, 9, 17, 22 ];

// const reduceing = numbers.reduce((previousValue,currentValue) => {

//     return previousValue+currentValue;
// },0);

// console.log(reduceing);

// By for loop

const numbers = [ 1, 9, 17, 22 ];

function reduceing(number){

    let sum =0;

    for(let i = 0; i < number.length ; i++){

        sum = sum + number[i];
    }

    return sum;
}

const reduceingNumberIs = reduceing(numbers)

console.log(reduceingNumberIs);