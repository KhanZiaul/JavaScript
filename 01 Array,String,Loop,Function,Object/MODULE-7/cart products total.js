// Calculate the total cost of the products in a shopping cart

const cartProducts = [

    {nameProduct : 'sohes' , price : 100, quantity : 2},
    {nameProduct : 'bags' , price : 300, quantity : 4},
    {nameProduct : 'pens' , price : 50, quantity : 3},
];

function cart(products){

   let sum = 0;

    for(let i = 0; i < products.length ; i++){

        let total = products[i].price * products[i].quantity ; 

        sum = sum + total;
    }

    return sum;
}

let totalCost = cart(cartProducts);

console.log(totalCost);