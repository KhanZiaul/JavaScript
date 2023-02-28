const linkShorter=(link) =>{

    const url = `https://api.shrtco.de/v2/shorten?url=${link}`
    fetch(url)
    .then(res => res.json())
    .then(data => shortCode(data.result.short_link))
}

function myFunction() {

    let copyText = document.getElementById("linkHere");
  
    navigator.clipboard.writeText(copyText.innerText);
    
    alert("Copied the text: " + copyText.innerText);
    
  }

function shortCode(code){

   const attribute = document.getElementById('shortLink');

   let link = `${code}`;

   const inputLink = document.getElementById('input-link').value;

   console.log(inputLink);

   attribute.setAttribute('href', `${inputLink}`);

   document.getElementById('linkHere').innerText = `${code}`;

   document.getElementById('input-link').value = "";
}

document.getElementById('button').addEventListener('click',function(){

    const inputLink = document.getElementById('input-link').value;

    linkShorter(inputLink);
    
})

