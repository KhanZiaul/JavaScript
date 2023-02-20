// spread operator

// fing max from array Math.max() method by spraed operator

const ages = [1,40,60,70];

const maxage = Math.max(...ages);

console.log(maxage);

// another example

const scores = [10,20,30,40];

// const scoresTwo = scores;

// console.log(scoresTwo);

//-------------

// scores.push(90);

// console.log(scores);

// console.log(scoresTwo);

//------------

// scoresTwo.push(90);

// console.log(scores);

// console.log(scoresTwo);

//--------------

// const scoresTwo = [scores];

// scoresTwo.push(90);

// console.log(scores);

// console.log(scoresTwo);

// ---------------------

// const scoresTwo = [...scores];

// scoresTwo.push(90);

// console.log(scores);

// console.log(scoresTwo);

// -----------------------

const scoresTwo = [10,20,...scores,60,80];

scoresTwo.push(90);

console.log(scores);

console.log(scoresTwo);
