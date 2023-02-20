const scores = (score) =>{

    let sum = 0;
    
    for(let i = 0; i < score.length ; i++ ){

        let square = score[i] * score[i];

        sum = sum +square;
    }

    return sum;
} 

const averageScore = scores([10 , 20 , 30]);

console.log(averageScore);