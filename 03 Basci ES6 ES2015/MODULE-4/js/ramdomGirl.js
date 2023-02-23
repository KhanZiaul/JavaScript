const loadUser = () =>{

    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => userData(data))
}

const userData = data => {

    const name = document.getElementById('name');

    name.innerText = data.results[0].name.first;

    const gender = document.getElementById('gender');

    gender.innerText = data.results[0].gender;

    const contact = document.getElementById('phone');

    contact.innerText = data.results[0].phone;

}

loadUser();