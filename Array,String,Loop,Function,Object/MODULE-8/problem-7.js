// is best friend ? problem.

let friendOne =
{
    name:'abul',

    friend:'kabul'
};

let friendTwo =
{
    name: 'kabul',

    friend:'abul'
};

function isBestFriend(friendOne , friendTwo){

    if(friendOne.name === friendTwo.friend && friendOne.friend === friendTwo.name){

        return true;
    }

    else{
        return false;
    }
}


let trueOrFalse = isBestFriend(friendOne,friendTwo);

console.log(trueOrFalse);