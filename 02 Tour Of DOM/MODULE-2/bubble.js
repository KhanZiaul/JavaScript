// Bubble Propagation---------------------------->

// const itemTwo = document.getElementById('item-2');

// itemTwo.addEventListener('click',function(){

//     console.log('clicked item-2');
// });

// document.getElementById('ul').addEventListener('click',function(){

//     console.log('ul clicked')
// });

// document.getElementById('body').addEventListener('click',function(){

//     console.log('body clicked')
// });

// Stop Bubble Propagation------------------------>

// const itemTwo = document.getElementById('item-2');

// itemTwo.addEventListener('click',function(event){

//     console.log('clicked item-2');

//     event.stopPropagation();
// });

// document.getElementById('ul').addEventListener('click',function(){

//     console.log('ul clicked')
// });

// document.getElementById('body').addEventListener('click',function(){

//     console.log('body clicked')
// });

// Stop Bubble immediate Propagation------------------------>

const itemTwo = document.getElementById('item-2');

itemTwo.addEventListener('click',function(event){

    console.log('clicked item-2');

    // event.stopPropagation();

    event.stopImmediatePropagation();
});
itemTwo.addEventListener('click',function(event){

    console.log('clicked item-2 two');
});
itemTwo.addEventListener('click',function(event){

    console.log('clicked item-2 three');
});

document.getElementById('ul').addEventListener('click',function(){

    console.log('ul clicked')
});

document.getElementById('body').addEventListener('click',function(){

    console.log('body clicked')
});