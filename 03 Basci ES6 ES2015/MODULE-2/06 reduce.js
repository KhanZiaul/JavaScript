// array reduce method

const numbers = [10,20,30,40];

const total = numbers.reduce((previous,current) => {

    return previous+current;
},0);

console.log(total);