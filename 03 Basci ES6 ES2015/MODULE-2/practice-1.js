// By array method

// const oddNumbers = [ 1, 3, 5, 7, 9 ];

// const evenNumbers = oddNumbers.map((number)=>{

//     return number+1;
// });

// console.log(evenNumbers);

// By loop

const oddNumbers = [ 1, 3, 5, 7, 9 ];

const evenNumbers = [];

for(let i =0 ; i < oddNumbers.length ; i++){

    evenNumbers.push(oddNumbers[i] + 1);
}

console.log(evenNumbers);