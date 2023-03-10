const loaddata = (word) =>{

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

    fetch(url)
    .then(res => res.json())
    .then(data => playAudio(data[0].phonetics[0].audio))
}

function playAudio(link){

    const audio = document.getElementById('audio');

    audio.setAttribute('src',link);

    audio.play()
}

loaddata('hello');