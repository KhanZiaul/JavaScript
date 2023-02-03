//multi stage condition

var taka = 100;

var breadTaka = 200;

var riceTaka = 90;

var potatoTaka = 50;

if(breadTaka < taka){
    console.log('buy bread ...!!!');
}
else if(riceTaka < taka){
    console.log('buy rice ...!!!');
}
else if(potatoTaka < taka){
    console.log('buy potato ...!!!');
}
else{
    console.log('do not buy yet ...!!!');
}
