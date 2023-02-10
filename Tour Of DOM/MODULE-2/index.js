// EVENT HANDELER

// option-2 :

function makeRed(){

    document.body.style.backgroundColor = 'red';
}

// option-3 :

// const makeBlueButton = document.getElementById('makeBlue');

// makeBlueButton.onclick = makeBlue;

// function makeBlue(){

//     document.body.style.backgroundColor = 'blue';
// }

// Another way of option-3 :

const makeBlueButton = document.getElementById('makePurple');

makeBlueButton.onclick = function makePurple(){

    document.body.style.backgroundColor = 'purple';
}