const paragraph = document.getElementById('paragraph');

function addValue(){

    paragraph.innerText = parseInt(paragraph.innerText) + 1;

    localStorage.setItem('number',paragraph.innerText )

}

window.onload = () =>{ 

    paragraph.innerText = localStorage.getItem('number');
}