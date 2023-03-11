let i = 0;

function addValue(){

    const paragraph = document.getElementById('paragraph');

    i++;

    paragraph.innerText = i ;

    localStorage.setItem(`paragraph-${i}`, i)

}

