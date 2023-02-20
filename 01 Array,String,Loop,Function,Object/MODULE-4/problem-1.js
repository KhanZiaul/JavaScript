function foo(){

    console.log('foo');
}

// foo();

function poo(){

    console.log('poo');

    foo();
}


poo();