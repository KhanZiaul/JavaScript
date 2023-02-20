// public bus fare

function publicBusFare(public){
if(typeof public !== 'number' || public < 50){

    console.log("provide valid participants");
}

else if(public >= 50 && public % 50 === 0){

    console.log('Need No Extra amount');
}

else if(public >= 50 && public % 50 % 11 === 0){

    console.log('Need No Extra amount');
}

else if (public >= 50 && public % 50 % 11 !== 0 ){

    let amount = public % 50 % 11 * 250 ;

    console.log(amount , 'taka');
}

else if (public >= 11 && public < 50 && 11 % public === 0 ){

    console.log('Need No Extra amount');
}

else if (public >= 11 && public < 50 && 11 % public !== 0 ){

    let amount = public % 11 * 250 ;

    console.log(amount , 'taka');
}

}

publicBusFare(365);