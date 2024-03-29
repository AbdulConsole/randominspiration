// Grab DOMs
let btn = document.querySelector('.container button');
let quoteText = document.querySelector('.container .quote p');
let counter = document.querySelector('.inspire');
let quotes = [];
let count = 0;

fetchQuote();

// Event Listener
btn.addEventListener('click', getQuote);


//Get Next Quote
function getQuote() {
  console.log(quotes);
  if (count !== 3){
    btn.innerHTML = "Get another";
    quoteText.innerHTML = quotes[getRandom()];
    //quoteText.style.color = "var(--clr-primary)";
    count++;
    counter.textContent = 3 - count;
    return
  }
  quoteText.innerHTML = "Subscribe to get more quotes.<br> contact: abdulconsole@gmail.com</b>";
  btn.innerHTML = "Subscribe Now"
  btn.type = "text"
  btn.style.backgroundColor = "#ddd";
  btn.style.border = "2px solid #ee6352";
  counter.style.backgroundColor = 'red';
}
// Fetch Quotes
function fetchQuote() {
  const jsonFilePath = 'quote.json';
  // Fetch the JSON file
  fetch(jsonFilePath)
  .then(response => response.json())
  .then(data => {
    quotes = data;
  })
  .catch(error => console.error('Error fetching JSON:', error));
}
//Get random index no
function getRandom(){
    var random = Math.floor(Math.random() * 7) + 1;
    return random;
}
