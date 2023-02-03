// leap year in array

function findLeapYear(years){

    let leapYearIs = [];
    for(let i=0; i <years.length ; i++){
        if(years[i] % 4 === 0 && years[i] % 100 !== 0 || years[i] % 400 === 0){
          leapYearIs.push(years[i]);
        }
    }

    return leapYearIs;
}

let leapYears = findLeapYear([2023,2024,2025,2028,2030]); 

console.log('Leap year is', leapYears);