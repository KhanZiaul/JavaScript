// array find method

// array filter method

const ages = [10,40,55,20,77];

const older = ages.find((age) => age > 25);

console.log(older);

const products = [
    {id:1, name:'laptop',price:45000},

    {id:2, name:'mobile',price:80000},

    {id:3, name:'tab',price:8000}
];

const highPrice = products.find((product)=>{

    return product.price > 10000;
});

console.log(highPrice);