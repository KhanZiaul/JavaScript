var isGraduated = true;

var salary = 15000;

var cars =1;

//-------------------->

if(isGraduated === true && salary>50000 && cars>=2) {
 
    console.log('You Are In')
}
else{
    console.log('You Are Out');
}
//---------------------------->

if(isGraduated === true || salary>50000 || cars>=2) {
 
    console.log('You Are In')
}
else{
    console.log('You Are Out');
}

//------------------------------------------->

if(isGraduated === true && salary>50000 || cars>=2) {
 
    console.log('You Are In')
}
else{
    console.log('You Are Out');
}