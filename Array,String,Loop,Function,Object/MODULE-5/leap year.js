// leap year

function leapYear(year){
 
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0 ){
        console.log('This is leap year');
    }
    else{
        console.log('This is not leap year');
    }
}

leapYear(100);