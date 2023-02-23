const quotes = () => {

    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(quotes => showQuotes(quotes))
}

function showQuotes(quotes){
    
  const quotesBlock = document.getElementById('quotes');

  quotesBlock.innerText = quotes.quote;

}

quotes();
