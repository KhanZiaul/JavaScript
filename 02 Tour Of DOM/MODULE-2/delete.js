document.getElementById('input-text').addEventListener('keyup',function(press){

    const text = press.target.value;

    const button = document.getElementById('button');

    if(text === 'delete'){

      button.removeAttribute('disabled');
    }
    else{

        button.setAttribute('disabled',true);
    }
});

document.getElementById('button').addEventListener('click',function(){

    const text = document.getElementById('input-text');

    text.value = "";
});