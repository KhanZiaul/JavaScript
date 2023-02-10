
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

const colors = document.getElementById('style-me');

colors.style.color = 'red';

const co = document.getElementById('inner-html');

// console.log(co.classList);

// console.log(co.getAttribute('class'));

co.setAttribute('class','class-3');

console.log(co.getAttribute('class'));

co.classList.add('new-class');

console.log(co.classList);

co.classList.remove('new-class');

console.log(co.classList);