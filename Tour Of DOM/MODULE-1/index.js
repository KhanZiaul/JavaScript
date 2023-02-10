
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

// add full new section-------------------->

// const child = document.getElementById('child');

// const section = document.createElement('section');

// const header = document.createElement('h2');

// const text = document.createElement('p');

// const ul = document.createElement('ul');

// const li1 = document.createElement('li');

// const li2 = document.createElement('li');

// const li3 = document.createElement('li');

// header.innerText = 'This is title JS';

// li1.innerText = 'Me - 1';

// li2.innerText = 'Me - 2';

// li3.innerText = 'Me - 3';

// text.innerText = 'this is text made by javaScript';



// child.appendChild(section);

// section.appendChild(header);

// section.appendChild(text);

// section.appendChild(ul);

// ul.appendChild(li1);

// ul.appendChild(li2);

// ul.appendChild(li3);

// anothe way

const child = document.getElementById('child');

const section = document.createElement('section');

section.innerHTML = `

<h2> THIS IS TITLE </h2>

<p>this is title </p>

<ul>
    <li> one </li>
    <li> two </li>
    <li> three </li>
</ul>
`;

child.appendChild(section);