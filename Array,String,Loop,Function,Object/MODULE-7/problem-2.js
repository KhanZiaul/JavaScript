// Multi-layer discount price calculation

function discount(tickets){
    let taka = 0;

    if(tickets<=100){

       taka = taka + tickets*100;
    }

    if(tickets >= 101 && tickets <= 200){

        taka = taka + 100*100 + (tickets-100)*90;
    }

    if(tickets >= 200){

        taka = taka + 100*100 + 100*80 + (tickets-200)*70;
    }

    return taka;
}

let totalTaka = discount(120);

console.log(totalTaka);