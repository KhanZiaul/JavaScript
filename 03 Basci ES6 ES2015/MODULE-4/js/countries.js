const loadData = () =>{

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showdata(data))
}


function showdata(data){

    const countries = document.getElementById('countries');

    data.forEach(country => {

    const countryDiv = document.createElement('div');

    countryDiv.classList.add('styles')

    countryDiv.innerHTML =
    `
    <h2> Country Name : ${country.name.common} </h2>

    <h4> Region : ${country.region}</h4>

    <h4> Populations : ${country.population} </h4>

    <button onclick= "countryDetails('${country.cca2}')"> Deatils </button>
    `;

    countries.appendChild(countryDiv);
    
   });
}

function countryDetails(code){

    const url = `https://restcountries.com/v3.1/alpha/${code}`

    fetch(url)
    .then(res => res.json())
    .then(details => showdetails(details[0]))
}

function showdetails(details){

    const countryDetails = document.getElementById('country-details');

    countryDetails.innerHTML =
    `
    <h2 style="color: rgb(243, 242, 242); font-size: 30px;">${details.name.common} </h2>

    <img src="${details.flags.png}" alt="">
    `;
}

loadData();