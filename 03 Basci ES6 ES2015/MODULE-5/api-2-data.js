const region = (regionValue) =>{

    const url= `https://restcountries.com/v3.1/region/${regionValue}`

    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}

function getSelectValue(){

    const regionValue = document.getElementById('region').value;

    region(regionValue);
}