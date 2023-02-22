// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


// fetch example

document.getElementById('showData').addEventListener('click',function(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => showData(data))
});

function showData(data){

    console.log(data);
}