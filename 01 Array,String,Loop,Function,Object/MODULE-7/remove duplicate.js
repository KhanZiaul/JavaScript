// Remove duplicate from array



function removeDuplicate(value){

   let uniqueNumber = [];

    for(let i=0 ; i < value.length ; i++){
    
        if(uniqueNumber.includes(value[i]) === false){

            uniqueNumber.push(value[i]);
        }
}
return uniqueNumber;

}

let removeDuplicateIs = removeDuplicate([10,20,30,40,50,60,70,10,40,50,60,60]);

 console.log(removeDuplicateIs)