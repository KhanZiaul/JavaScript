const loadData = () =>{

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showdata(data))
}


function showdata(data){

    const countries = document.getElementById('countries');

   data.forEach(country => {

    console.log(country);

    const countryDiv = document.createElement('div');

    countryDiv.innerHTML =
    `
    <h2> Country Name : ${country.name.common} </h2>

    <h4> Region : ${country.region}</h4>

    <h4> Populations : ${country.population} </h4>
    `;

    countries.appendChild(countryDiv);
    
   });
}

loadData();