// JavaScript map in object and array

// map in array

const names = ['zia','megha','rumman'];

const lengthOfString = names.map( x => x.length);

console.log(lengthOfString);

// map in object

const products = [
    {id:1, name:'laptop',price:45000},

    {id:2, name:'mobile',price:80000}
];

const productIs = products.map(product => console.log(product.name));