// fibonacci series


let fibonacci = [0 ,1];

for(let i = 2; i < 20 ; i++){

    fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
}

console.log(fibonacci);