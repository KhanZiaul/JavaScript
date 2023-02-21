const maxNumber = (arrayOne,arrayTwo) => {

    let combineArray = [];

    for(let i = 0 ; i < arrayOne.length ; i++){

        combineArray.push(arrayOne[i])
    }

    for(let i = 0 ; i < arrayTwo.length ; i++){

        combineArray.push(arrayTwo[i])
    }

    // first way to slove---------

    //  let maxIs = combineArray[0];
    
    // for(let i = 1 ; i < combineArray.length ; i++){

    //     if( maxIs < combineArray[i]){

    //         maxIs = combineArray[i];
    //     }
    // }

    // second way ------------------

    let maxIs = Math.max(...combineArray);

     return maxIs;
}

const maxNumberIs = maxNumber([10,20,49,330,95,4], [1,120,30,2,77]);

console.log('Max is :', maxNumberIs);






//

//  let maxIs = combineArray[8];

//     // console.log(maxIs)

    
     
//     // return max;
// }