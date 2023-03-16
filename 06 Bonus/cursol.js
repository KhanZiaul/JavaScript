const images = document.getElementById('images');

const imagesIndex = [
    './images/pic-1.jpg' ,
    './images/pic-2.jpg' ,
    './images/pic-3.jpg' ,
    './images/pic-4.jpg' ,
    './images/pic-5.jpg' ,
    './images/pic-6.jpg' ,
    './images/pic-7.jpg' ,
    './images/pic-8.jpg' ,
    './images/pic-9.jpg' ,
];


let index = 0;

setInterval(()=>{

    console.log(index);

    console.log(imagesIndex.length);


    if(index === imagesIndex.length){

        index = 0 ;
    }

    images.setAttribute('src',imagesIndex[index]);

    index++;

},3000);