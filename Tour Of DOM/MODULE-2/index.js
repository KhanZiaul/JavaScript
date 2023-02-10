// EVENT HANDELER

//option-1 : directly set on the html element--------------->

/* <h2 onclick="console.log('eh')">JavaScript Events</h2>
    
<button style="display: block; margin-bottom: 10px;" title="click me" onclick="console.log('oh shit! you clicked me') ">Click Me</button> */

// option-2 : add onclick function on the html element-------------->

function makeRed(){

    document.body.style.backgroundColor = 'red';
}

// option-3 :

// first way of option -3 : 

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

// option-4 : addEventListener --------------->

document.getElementById('makePink').addEventListener('click',function(){

    document.body.style.backgroundColor = 'pink';
});

// More events --------------------------------->

document.getElementById('button').addEventListener('mousemove',function(){

    console.log('Mouse Moved');
});

document.getElementById('button').addEventListener('mouseenter',function(){

    console.log('Mouse Entered');
});