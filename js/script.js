//An array that holds all the quotes as objects which can be displayed on the website 
var quotes = [
  { quote: "The revolution is not an apple that falls when it is ripe. You have to make it fall.", 
    source: "Pawan Kalyan." },
  { quote: "Great spirits have always encountered violent opposition from mediocre minds.",
    source: "Albert Einstein."},
  { quote: "When something is important enough, you do it even if the odds are not in your favor.",
    source: "Elon Musk."},
  { quote: "The ones who are carzy enough to think that they can change the world are the ones who do.",
    source: "Steve Jobs."},
  { quote: "Intelligence is the ability to adapt to change.",
    source: "Stephen Hawking."},
  { quote: "Happiness is the when what you think, what you say and what you do are in harmony.",
    source: "Mahatma Gandhi."},
  { quote: "If you wanna make the world a better place, take a look at yourself, then make that change.",
    source: "Michael Jackson."},
  { quote: "You cant gain something, without giving something in return.",
    source: "Hiromu Arakawa."},
  { quote: "Power comes in response to a need, not a desire. You have to create that need.",
    source: "Goku."},
  { quote: "When you see only problems, you’re not seeing clearly.",
    source: "Phil Knight."}
];

//This function selects a random quote from the quotes array.
function getRandomQuote() {
  var randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}

/* 
This function uses the random quote returned by the getRandomQuote function and
concatenates the objects properties into html format and assigns innerhTML of
the quote-box id to this concatenated string. This makes the HTML to display a random quote.
 */
function printQuote() {
  var myQuote = getRandomQuote();
  var string = '';
  string = '<p class="quote">' + myQuote.quote + '</p>';
  string += '<p class="source">' + myQuote.source + '</p>';
  document.getElementById("quote-box").innerHTML = string;
}

/*
This event listener triggers the printQuote() function upon clicking on the
show another quote button 
*/
document.getElementById('load-quote').addEventListener("click", printQuote, false);