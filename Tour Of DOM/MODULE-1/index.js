
// DOM - Document Object Model ><><><><><><><><><><><><><><><><><><><


// introduction : 1 [getElementsByTagName] --------------------------------------------------------------------->


// const liElements = document.getElementsByTagName('li');

// // console.log(liElements);

// for(const li of liElements){

//     console.log(li.innerText);
// }


// introduction : 2 [getElementById] and [getElementsByClassName] ------------------------------------------------------------------>

// const fruits = document.getElementById('fruits');

// // console.log(fruits);

// console.log(fruits.innerText);

// const fruit = document.getElementsByClassName('fruit');

// for(const lists of fruit){

//     console.log(lists.innerText);
// }

// introduction : 3 [querySelector] and [querySelectorAll]- ------------------------------------------------------------->

// const habit = document.querySelectorAll('.habit');

// console.log(habit);

// for(const habits of habit){
    
//     console.log(habits.innerText);
// }

// const habits = document.querySelector('.habit');

// console.log(habits);

// const hobby = document.querySelector('#habits');

// console.log(hobby);


// introduction : 4 [style] , [getAttribute] , [setAttribute] , [innerText] , [innerHTML] ------------------------------------>

// const colors = document.getElementById('style-me');

// colors.style.color = 'red';

// const co = document.getElementById('inner-html');

// console.log(co.classList);

// console.log(co.getAttribute('class'));

// co.setAttribute('class','class-3');

// console.log(co.getAttribute('class'));

// co.classList.add('new-class');

// console.log(co.classList);

// co.classList.remove('new-class');

// console.log(co.classList);

//--------------------------------------------------------------

// const sections = document.querySelectorAll('section');


// for(const section of sections){

//     section.style.border = '2px solid black';

//     section.style.marginBottom = '10px';

//     section.style.padding = '20px';
// }


// introduction : 5 [nodeList] , [parentNode] , [createElement] , [nextSibling] , [previousSilbling] ----------------------------------------------------------------->

// const child = document.getElementById('child');

// // console.log(child.childNodes);

// // console.log(child.firstChild);

// // console.log(child.childNodes[0]);

// // console.log(child.childNodes[3].childNodes[3]);

// // console.log(child.childNodes[3].childNodes[2].nextSibling);

// // console.log(child.childNodes[3].childNodes[2].previousSibling);

// const li = document.querySelectorAll('#child li');


// // li.forEach(element => {

// //     console.log(element.innerText);
// // });

// const ul = document.querySelector('#child ul');

// const list = document.createElement('li');

// list.innerText= 'i am new';

// console.log(list);

// ul.appendChild(list);

// console.log(ul.parentNode.parentNode.parentNode.parentNode)

