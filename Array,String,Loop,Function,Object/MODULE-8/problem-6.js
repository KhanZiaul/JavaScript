// 


function javaScriptFile(fileName){

    let fileNames = ['app.js' , 'js.png' , 'image.js.png' , 'image.jpg.js'];

    let trueOrFalse = fileNames.includes(fileName);

    return trueOrFalse;
}

let isJavaScriptFile = javaScriptFile('app.js');

console.log(isJavaScriptFile);