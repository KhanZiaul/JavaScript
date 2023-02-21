// reduce in object

const people = [

    {name:'menna', age:20},

    {name:'Rina', age:15},

    {name:'Megha', age:22}
];

const reduceing = people.reduce((previousPerosn,currentperson) => {

    return previousPerosn + currentperson.age;

},0);

console.log(reduceing);