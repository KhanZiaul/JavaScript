// JavaScript alert , confirm and prompt

// alert

function showAlert(){

    alert('it is alert');
}

// confirm

function showConfirm(){
    const feedback = confirm('Give me 500 taka');

    if(feedback === true){

        alert('Thanks');
    }

    else{

        alert('Mor jaiya');
    }
}

// prompt

function showPrompt(){

    const feedback = prompt('Enter name');

    if(feedback === null){

        alert('Not allowed here without input')
    }

    else{

        console.log(feedback)
        alert(`Welcome ${feedback}`);
    }
}