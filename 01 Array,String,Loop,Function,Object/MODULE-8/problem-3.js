// count number greater than 5 in an array

function numbers(value){

    let count = 0;

    for(let i = 0; i < value.length ; i++){

        if(value[i] > 5){

            count++;
        }
    }

    return count;
}

let countedNumberIs = numbers([1,2,4,10,6,44,22,3]);

console.log(countedNumberIs);