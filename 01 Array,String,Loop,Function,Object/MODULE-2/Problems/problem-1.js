
// You are given an array:
// var fruits = ['Apple', 'Banana', 'Orange'];
// a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// b) Remove ‘Orange’ and add ‘Watermelon’.


var fruits = ['Apple', 'Banana', 'Orange'];

var bananaPosition = fruits.indexOf('Banana');

console.log(bananaPosition);

fruits[1]= 'Mango';

console.log(fruits);

var orangePosition = fruits.indexOf('Orange');

console.log(orangePosition);

fruits[2]= 'Watermelon';

console.log(fruits);