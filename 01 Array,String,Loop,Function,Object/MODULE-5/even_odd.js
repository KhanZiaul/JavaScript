//even odd

function evenOdd(givenValue){

    if (givenValue % 2 === 0){
        return true;
    }
    
    else{
        return false;
    }
}
let isEven =  evenOdd(2);

console.log(isEven);