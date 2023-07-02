const quot=document.getElementById("quote");
const auth=document.getElementById("author");
   
const getNewQuote=async()=>{
    var url="https://type.fit/api/quotes";
    const response = await fetch(url);
    console.log(typeof response);
    const quotes = await response.json();
    const index = Math.floor(Math.random()*(quotes.length));
    const quote = quotes[index];
    quot.innerHTML=quote.text;
    auth.innerHTML="~"+quote.author; 
}
