// promise in JS

const getdata = new Promise ((resolve , reject) => {

    const number = Math.random()*10;

    console.log(number);

    if(number<5){
        resolve('Number is less than FIVE');
    }
    else{
        reject('Number is greater than FIVE');
    }
})

getdata
.then(data => console.log(data))
.catch(error => console.log('ERR : ',error))