function addCart(){

    const itemName = document.getElementById('itemName').value;

    const itemNumber = document.getElementById('itemNumber').value;

    elements(itemName,itemNumber);

    setLocalValue(itemName,itemNumber);

    document.getElementById('itemName').value = '' ;

    document.getElementById('itemNumber').value = '' ;
}

function elements(itemName,itemNumber){

    const parentUl = document.getElementById('parentUl');

    const list = document.createElement('li');

    list.innerText = `${itemName} ${itemNumber}`;

    parentUl.appendChild(list);
}

function setLocalValue(itemName,itemNumber){

   let cart={} 

   if(localStorage.getItem('cart')){

    const itemIs= localStorage.getItem('cart');
    
    const itemInObj = JSON.parse(itemIs);

    itemInObj[itemName] = itemNumber;

    const itemInJson = JSON.stringify(itemInObj);

    localStorage.setItem('cart',itemInJson)

   }

   else{

    cart[itemName] = itemNumber;

    const cartInJson = JSON.stringify(cart);

    localStorage.setItem('cart',cartInJson);
   }
}