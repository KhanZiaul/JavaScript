// add name

function addName(){

    const inputName = document.getElementById('inputName').value;

    localStorage.setItem('name', inputName);

    document.getElementById('inputName').value = '';
}

function deleteName(){

    localStorage.removeItem('name');
}

// add email

function addEmail(){

    const inputEmail = document.getElementById('inputEmail').value;

    localStorage.setItem('email', inputEmail);

    document.getElementById('inputEmail').value = '';
}

function deleteEmail(){

    localStorage.removeItem('email');
}

// add message

function addMessage(){

    const inputMessage = document.getElementById('inputMessage').value;

    localStorage.setItem('message', inputMessage);

    document.getElementById('inputMessage').value = '' ;
}

function deleteMessage(){

    localStorage.removeItem('message');
}

// reset

function reset(){

    localStorage.clear();
}