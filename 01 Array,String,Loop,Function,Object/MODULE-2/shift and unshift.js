var names=['megha', 'moni', 'barai'];

console.log(names);



//add new items in first of an array

names.unshift('khan');
console.log(names);

//pop first items from an array

names.shift();
console.log(names);

var valueOfNames= names.shift();
console.log(valueOfNames);
console.log(names);

//-------------------------------------->

var ages= [10, 50, 6, 90, 60];

console.log(ages);

//add new items in first of an array

ages.unshift(55);
console.log(ages);
            
//pop first items from an array

ages.shift();
console.log(ages);

var valueOfAges= ages.shift();
console.log(valueOfAges);
console.log(ages);