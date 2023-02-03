// tallest and smallest person by function in array

// tallesr person in array ----------------->

// function height(value){

//     let max = value[0];
    
//     for (let i = 1 ; i < value.length ; i++){

//         if (max < value[i]) {

//             max = value[i];
//         }
//     }
    
//     return max;
// }


// let tallestPerson = height([120 , 250 , 199 , 190 , 107]);

// console.log(tallestPerson);


// smallest person in array-------------------->

function height(value){

    let min = value[0];
    
    for (let i = 1 ; i < value.length ; i++){

        if (min > value[i]) {

            min = value[i];
        }
    }
    
    return min;
}


let smallestPerson = height([120 , 50 , 150 , 190 , 107]);

console.log(smallestPerson);
