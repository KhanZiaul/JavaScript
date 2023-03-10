// JavaScript Object Notation

// first example

// const information = {

//     name :'khan zia',

//     age : 27,

//     job : 'web developer'
// }

// const stringified = JSON.stringify(information);

// console.log(information);

// console.log(stringified);

// second example

const shop = {

    shopName : 'Hudai',

    street : 'Kochu Khet Ar Mukhe',

    products : ['Benchon', 'GoldLeaf','Darbi'],

    informationOwner : {

        name : 'Gorib Ali',

        phone : 090000000,

        region: 'isalam',

        country : 'Uganda'
    },

    isOpen : true,

    isNew : false

}

console.log(shop);

const shopJSON = JSON.stringify(shop);

console.log(shopJSON);

const shopJSONObj = JSON.parse(shopJSON);

console.log(shopJSONObj);