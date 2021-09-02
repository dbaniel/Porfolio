const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');


let apiQuotes = [];


// show loading or loader
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// hide loader 
function complete() {  
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//  show new quote
function newQuote() {
    loading();
// pick a random quote
    const quote =apiQuotes[Math.floor(Math.random()* apiQuotes.length)];
    // check if field is blank & replace it
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
      authorText.textContent = quote.author;    
    }
    // check quote lenght
    if (quote.text.length > 120) {
      quoteText.classList.add('long-quote');
    } else {
      quoteText.classList.remove('long-quote');
    }
    // authorText.textContent = quote.author;
    // set quote, hide loader
    quoteText.textContent = quote.text;
    complete();
}
// get quotes from api - local array
async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes';
    try {    
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
        // complete();
    }   catch (error) {
        // catch error here 
    }
}

// tweet quote
function tweetQuote() {
    // const quote = quoteText.innerText;
    // const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// event list
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

// on load
getQuotes();
// newQuote();