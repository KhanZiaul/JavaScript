// find the matching product by searching 


let ids = [

    {id: 1, name : 'khan zia' , home : 'Barishal'},

    {id: 2, name : 'abdullah' , home : 'Dhaka'},

    {id: 3, name : 'iqbal' , home : 'Barishal'},

    {id: 4, name : 'mohi' , home : 'DHAKA'},

    {id: 5, name : 'sebu' , home : 'BArishal'},

    {id: 6, name : 'tarek' , home : 'Barishal'},

    {id: 7, name : 'barek' , home : 'DhakA'}
];

// use for of for show ids---------->

// for(let id of ids){

//     console.log(id);
// }

function matchHome(details, search){


    // for(let id of details){
    //     if(id.home === 'Barishal'){
    //         console.log(id);
    //     }
    // }

    let matched = [];

    for(let id of details){

        if(id.home.toLowerCase().includes(search.toLowerCase())){

            matched.push(id);
        }
    }

    return matched;
}

let matchHomeIs = matchHome(ids, 'Barishal');

console.log(matchHomeIs);