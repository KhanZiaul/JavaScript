// make average of array

function mak_avg(array){

    let sum=0;

    for(let i=0 ; i<array.length;i++){
     
        sum = sum + array[i];
    }
 
    let avg = (sum / array.length);

    return avg;

}

let arrayAverageIs = mak_avg([10,20,30,40]);

console.log(arrayAverageIs);