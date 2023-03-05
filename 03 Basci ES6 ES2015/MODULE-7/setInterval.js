// setInterval JS

let count=1;

let stopCount = setInterval(() => {

    if(count === 59){
        clearInterval(stopCount);
    }
    
    console.log(count++);
}, 1000);