//hour to minutes

function hourTm(hour){

    let hourTmIs= hour*60;

    return (hourTmIs);
}

let hourTmIs = hourTm(1);

console.log(hourTmIs,' minutes');


//hour to seconds

function hourTs(hour){

    let hourTsIs= hour*60*60;

    return (hourTsIs);
}

let hourTsIs = hourTs(1);

console.log(hourTsIs,' seconds');