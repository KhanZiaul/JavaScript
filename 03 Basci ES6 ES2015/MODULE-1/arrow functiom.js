// arrow function in JavaScript

// ( in one line no need write return and curly brakets-{} )

// more than one parameters --------------------------

// const sum = (a,b,c,d) => a+b+c+d;

// const result = sum(1,2,3,4);

// console.log(result);

// with one parameter --------------------------

// const multiply = (a) => a*a;

// const result = multiply(10);

// console.log(result);

// with no parameter ------------------------

const pi = () => 3.1416;

const result = pi();

console.log(result);

// ( multiline need write return and curly brakets-{} )

const finalCalculations = (a,b) => {

    const multiply = a *b;

    const divided = multiply / 10;

    const sum = multiply + divided ;

    return sum;
}

const finalResult = finalCalculations(10,20);

console.log(finalResult);