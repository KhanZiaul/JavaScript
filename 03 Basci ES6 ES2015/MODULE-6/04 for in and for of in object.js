// for in loop and for of loop in object

const bottle = {

    color:'yellow',

    price: 50,

    capacity : 1
}

// using for of loop -----

// const keys = Object.keys(bottle);

// //console.log(keys);

// for(const key of keys){

//     console.log(key,bottle[key]);
// }

// for in loop ---

for(const key in bottle){

    console.log(key,bottle[key])
}