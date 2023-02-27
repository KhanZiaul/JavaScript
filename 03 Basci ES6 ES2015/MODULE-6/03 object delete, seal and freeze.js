// object delete , freeze and seal

const student= {

    name:'khan zia',

    age:25,

    isStudent : true
}

// delete---

// console.log(student);

// delete student.name;

// console.log(student);

// seal ---

// console.log(student);

// Object.seal(student);

// delete student.name;

// student.age = 30;

// student.bankAccount = true;

// console.log(student);

// freeze ---

console.log(student);

Object.freeze(student);

delete student.name;

student.age = 30;

student.bankAccount = true;

console.log(student);