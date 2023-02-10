const button = document.getElementById('button');

button.addEventListener('click',function(){
    
    const textArea = document.getElementById('textarea');

    const p = document.createElement('p');

    p.innerText = textArea.value;

    const comments = document.getElementById('comments');

    comments.append(p);

    textArea.value = "";
});