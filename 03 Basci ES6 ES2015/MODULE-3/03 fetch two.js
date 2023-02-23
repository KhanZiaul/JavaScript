// post into index.html by fetch

document.getElementById('showpost').addEventListener('click',function(){

  fetch('https://jsonplaceholder.typicode.com/posts')

.then(res => res.json())

.then(post => showPost(post))

});

function showPost(user){

    const userPosts = document.getElementById('post');

    for(const post of user){

        const userPost = document.createElement('p');

        userPost.classList.add('background')

        userPost.innerText =`ID : ${post.id}
      
        POST : 
        
        ${post.body}`;

        userPosts.appendChild(userPost);
    }
}