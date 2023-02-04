// radian to degree

function radianToDegree(radian){

    let PI = 3.1416;

    let radianToDegree = (radian * (180/PI));

    return radianToDegree ;
}

let radianToDegreeIs = radianToDegree(10).toFixed(2);

console.log(radianToDegreeIs , 'degree');