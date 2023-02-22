// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// fetch example

document.getElementById('showData').addEventListener('click',function(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => showData(data))
});

// function showData(data){

//     console.log(data);
// }

// show data into html ----------- 

function showData(data){

    const userName = document.getElementById('userinfo');

    for (const user of data){

        const li = document.createElement('li');

        li.innerText = `${user.email}`;

        userName.appendChild(li);
    }
}