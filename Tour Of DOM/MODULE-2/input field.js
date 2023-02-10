const button = document.getElementById('button');

button.addEventListener('click', function(){
    const inputField= document.getElementById('input');

    const text = document.getElementById('default');

    text.innerText = inputField.value ;

    inputField.value = "";
});