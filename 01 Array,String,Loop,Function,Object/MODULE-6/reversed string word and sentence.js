// reverse string words and sentence


//reverse sentence

// function sentence(value){

//     let reversed = '(done).';
//     for(let i= value.length -1; i >= 0 ; i--){

//         reversed = reversed + value[i];

//     }

//     return reversed;
// }

// let reverseSentence = sentence('This is reverse sentence');

// console.log(reverseSentence);

//reverse sentence

function sentence(value){

    let words = value.split(' ');

    let reversed = [];
    for(let i= words.length -1; i >= 0 ; i--){

      reversed.push(words[i]);
    }

    return reversed;
}

let reverseWords = sentence('This is reverse sentence');

console.log(reverseWords);