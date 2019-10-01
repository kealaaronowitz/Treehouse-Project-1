/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Added array of quote objects with `quote`and `source` properties. `Citation` and `year` properties added where applicable.
***/

let quotes = [
  {
    quote: "It's hard to beat a person who never gives up.",
    source: "Babe Ruth",
    citation: "www.brightdrops.com"
  },
  {
    quote: "The Mets have shown me more ways to lose than I even knew existed.",
    source: "Casey Stengel",
    citation: "www.brainyquote.com",
    year: 1968
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
    year: 1976
  },
  {
    quote: "People say you can't go out and eat with your players. I say why not.",
    source: "Tommy Lasorda"
  },
  {
    quote: "If Casey Stengel were alive today, he would be spinning in his grave.",
    source: "Ralph Kiner",
    citation: "www.quotes.net",
    year: 1976
  }
];

/***
  Added function `getRandomQuote` to store a random number and return a random quote object.
***/

function getRandomQuote(){
let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
  Added function `printQuote` to build HTML string including `quote` and `source` properties. If statement check for `citation` and `year` properties before adding them to the HTML string.
***/

function printQuote(){
  let randomQuotes; 
  randomQuotes = getRandomQuote();
  let htmlString;
  htmlString = " ";
  htmlString += '<p class="quote">' + randomQuotes.quote + '</p>';
  htmlString += '<p class="source">' + randomQuotes.source;
  if (randomQuotes.citation) {
    htmlString += '<span class="citation">' + randomQuotes.citation + '</span>';
    }
  if (randomQuotes.year) {
    htmlString += '<span class="year">' + randomQuotes.year + '</span>';
  }
  htmlString += '</p>';
  document.getElementById('quote-box').innerHTML = htmlString;
}

/***
  Event Listener is triggered when "Show another quote" button is clicked to call `printQuote` function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);