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

// send

function send(){

    let allData = {};

     const nameIs = document.getElementById('inputName').value;

     allData.name = nameIs;

     const eamilIs = document.getElementById('inputEmail').value;

     allData.email = eamilIs;

     const messageIs = document.getElementById('inputMessage').value;

     allData.message = messageIs;

     const allDataInJson = JSON.stringify(allData);

     localStorage.setItem('person', allDataInJson);

     document.getElementById('inputName').value = '' ;

     document.getElementById('inputEmail').value = '' ;

     document.getElementById('inputMessage').value = '' ;
}

function onloadData(){

    if(localStorage.getItem('person')){

        const fullData = JSON.parse(localStorage.getItem('person'))

        document.getElementById('inputName').value = fullData.name;

        document.getElementById('inputEmail').value = fullData.email;

        document.getElementById('inputMessage').value = fullData.message;
    }
}


// reset

function reset(){

    localStorage.clear();
}