const region = (regionValue) =>{

    const url= `https://restcountries.com/v3.1/region/${regionValue}`

    fetch(url)
    .then(res => res.json())
    .then(datas => showCountries(datas))
}

function getSelectValue(){

    const regionValue = document.getElementById('region').value;

    region(regionValue);
}

function showCountries(datas){

    datas.map((data) => {

        const country = document.getElementById('country');

        const createDiv = document.createElement('div');

        createDiv.innerHTML = `

        <p class="mb-4 text-center text-xl font-bold"> ${data.name.common} </p>

        <img src=" ${data.flags.png} " alt="no image" />

        `;

        country.appendChild(createDiv);

        console.log(data);

    })

}