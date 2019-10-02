/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/***
Project tested in Chrome, Internet Explorer, and Firefox.
***/

let quotes;
let colors; 
let randomNumber;
let randomColor;
let randomQuotes;
let htmlString;
let intervalID;

/*** 
  Array of quote objects with `quote`and `source` properties. `Citation` and `year` properties added where applicable.
***/

quotes = [
  {
    quote: "It's hard to beat a person who never gives up.",
    source: "Babe Ruth",
    citation: "www.brightdrops.com", 
    type: "Inspirational"
  },
  {
    quote: "The Mets have shown me more ways to lose than I even knew existed.",
    source: "Casey Stengel",
    citation: "www.brainyquote.com",
    year: 1968, 
    type: "Humor"
  },
  {
    quote: "I can see how he (Sandy Koufax) won twenty-five games. What I don’t understand is how he lost five.",
    source: "Yogi Berra",
    citation: "www.ftw.usatoday.org"
  },
  {
    quote: "Andre Dawson has a bruised knee and is listed as day-to-day (pause). Aren't we all?",
    source: "Vin Scully",
    citation: "On-Air Radio Broadcast",
    year: 1991
  },
  {
    quote: "Don't measure yourself by what you have accomplished, but by what you should have accomplished with your ability.",
    source: "John Wooden",
    citation: "www.bleacherreport.com", 
    type: "Inspirational"
  },
  {
    quote: "People say you can't go out and eat with your players. I say why not.",
    source: "Tommy Lasorda",
    type: "Humor"
  },
  {
    quote: "If Casey Stengel were alive today, he would be spinning in his grave.",
    source: "Ralph Kiner",
    citation: "www.quotes.net",
    year: 1976, 
    type: "Humor"
  }
];
  
/***
  Array of background colors.
***/

colors = ['#FF3267', '#FFB987', '#FF65FF', '#FFFF76', '#00B6E3', '#E6B223', '#3916E6', '#999326', '#99FF32', '#B65D4D',
];

/***
  Function `getRandomQuote` to store a random number and return a random quote object.
***/

function getRandomQuote(){
randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
  Function `getRandomColor` to store a random number and return a random background color.
***/

function getRandomColor() {
  randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
}

/***
  Function `printQuote` to build HTML string including `quote` and `source` properties. If statement checks for `citation`, `year`, and `type` properties before adding them to the HTML string.
***/

function printQuote(){ 
  randomQuotes = getRandomQuote();
  htmlString = " ";
  htmlString += '<p class="quote">' + randomQuotes.quote + '</p>';
  htmlString += '<p class="source">' + randomQuotes.source;
  if (randomQuotes.citation) {
    htmlString += '<span class="citation">' + randomQuotes.citation + '</span>';
  }
  if (randomQuotes.year) {
    htmlString += '<span class="year">' + randomQuotes.year + '</span>';
  }
  if (randomQuotes.type) {
    htmlString += '<span class="type">' + ', ' + randomQuotes.type + '</span>';
  }
  htmlString += '</p>';
  document.getElementById("quote-box").innerHTML = htmlString;
  document.body.style.background = getRandomColor();
}

/***
  Timing method prints a new quote to the page every 10 seconds. 
 */

intervalID = setInterval(printQuote, 10000);

/***
  Event Listener is triggered when "Show another quote" button is clicked to call `printQuote` function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);