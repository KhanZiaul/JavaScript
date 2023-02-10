const ul = document.getElementById('items-header');

const items = document.getElementsByClassName('item');

// console.log(items);

// for(const item of items){

//     item.addEventListener('click',function(event){

//         // console.log(item.innerText);

//         // console.log(event.target.innerText);

//        // console.log(event.target.parentNode);

//        event.target.remove();
//     });
// }

ul.addEventListener('click',function(minus){

    minus.target.parentNode.removeChild(minus.target);
});

document.getElementById('button').addEventListener('click',function(){
    const li = document.createElement('li');
    
    li.innerText = 'new item';

    const ul = document.getElementById('items-header');

    ul.appendChild(li);

});