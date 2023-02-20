// factorial of a number

function factorial(givenNumber){

    let factorial = 1;
    for(let i =1; i <= givenNumber; i++){

        factorial = factorial* i;
    }

    return factorial;
}

let factorialIs = factorial(5);

console.log(factorialIs);