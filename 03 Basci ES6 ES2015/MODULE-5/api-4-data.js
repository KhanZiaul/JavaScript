const loadData = () => {

     fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => showdata(data))
}

function showdata(data){

    document.getElementById('text').innerText = `${data.slip.advice}`;

    document.getElementById('adviceId').innerText = `${data.slip.id}`
}

loadData();