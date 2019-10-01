/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
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
    quote: "Andre Dawson has a bruised knee and is listed as day-to-day (pause). Arent we all",
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
    quote: "If Casey Stangel were alive today, he would be spinning in his grave",
    source: "Ralph Kiner",
    citation: "www.quotes.net",
    year: 1976
  }
];

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/




/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.