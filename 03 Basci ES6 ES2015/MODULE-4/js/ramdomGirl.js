const loadUser = () =>{

    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => loadUser(data))
}

const userData = data => {
    console.log(data);
}

loadUser();