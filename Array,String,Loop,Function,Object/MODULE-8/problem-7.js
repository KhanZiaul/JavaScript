// is best friend ? problem.

function isBestFriend(friendOne , friendTwo){

    if(friendOne.name === friendTwo.friend){

        return true;
    }

    else{
        return false;
    }
}

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

let trueOrFalse = isBestFriend(friendOne,friendTwo);

console.log(trueOrFalse);