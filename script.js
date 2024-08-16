const api_url = "https://dummyjson.com/quotes/random";
const quote = document.getElementById("quote")
const author = document.getElementById("author")
const newQuoteBtn = document.getElementById("btn");
const tweeter = document.getElementById("tweet");
async function getQuote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
}


newQuoteBtn.addEventListener('click',()=>{getQuote(api_url)});

function tweet(){
    window.open("https://twitter.com/intent/tweet?text="+quote.innerHTML + "----by" + author.innerHTML,"tweet window","width=1240, height=600")
}

tweeter.addEventListener("click",tweet)