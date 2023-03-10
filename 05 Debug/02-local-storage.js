function addCart(){

    const itemName = document.getElementById('itemName').value;

    const itemNumber = document.getElementById('itemNumber').value;

    elements(itemName,itemNumber);
}

function elements(itemName,itemNumber){

    const parentUl = document.getElementById('parentUl');

    const list = document.createElement('li');

    list.innerText = `${itemName} ${itemNumber}`;

    parentUl.appendChild(list);
}