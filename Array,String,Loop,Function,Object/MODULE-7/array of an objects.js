// Find the cheapest phone from an array of phone objects

const phones = [
    {phoneName : 'Nokia', storage : '30gb' , price : 30000 , color : 'silver'},
    {phoneName : 'iphone', storage : '60gb' , price : 100000 , color : 'silver'},
    {phoneName : 'walton', storage : '10gb' , price : 10000 , color : 'silver'},
    {phoneName : 'Unknown', storage : '1000gb' , price : 1000000 , color : 'silver'},
];

function phonesCollections(phone){

    let cheapestPhone = phone[0];

    for(let i = 1 ; i <phone.length ; i++){

        if(cheapestPhone.price > phone[i].price){

            cheapestPhone = phone[i];
        }
    }

    return cheapestPhone;
}

let cheapestPhone = phonesCollections(phones);

console.log(cheapestPhone);