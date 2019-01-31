/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/
let html = '';
let red;
let green;
let blue;
let rgbColor;

const quotes = [
  {
    quote : "If a man hasn’t discovered something that he will die for, he isn’t fit to live.",
    source : "Martin Luther King, Jr.",
    citation : "Twitter",
    year : 1963
  },
  {
    text : "Who dares, wins. Who sweats, wins. Who plans, wins.",
    author : "British Special Air Service (SAS)",
    citation : "Twitter",
    year : " "
  },
  {
    text : "It is fatal to enter a war without the will to win it.",
    author : "General Douglas MacArthur",
    citation : "Twitter",
    year : " "
  },
  {
    text : "Fortune favors the brave.",
    author : "Terence",
    citaiton : "Twitter",
    year : " "
  },
  {
    text : "Only our individual faith in freedom can keep us free.",
    author : "Dwight D. Eisenhower",
    citaiton : "Twitter",
    year : " "
  }
]


/***
  Create the `getRandomQuote` function to:
   - generate a random number
   - use the random number to `return` a random quote object from the
     `quotes` array.
***/

function getRandomQuote() {
 let randomNumber = Math.floor(Math.random() * quotes.length );
  return randomNumber;
}
 console.log(getRandomQuote());

/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/

function printQuote() {
let randomQuote = getRandomQuote();
let listHtml = '<p class="quote">' + quotes.quote;
  if ( quotes.year === " " || null ) {
    quotes.year = 'Unknown';
  } else if ( quotes.citation === " ") {
      quotes.citation = 'Unknown';
  };

listHtml += document.querySelector('quote').innerHTML = listHtml;
listHtml += '</p>';
console.log(printQuote());
}

function randomColor() {
  red = Math.floor(Math.random() * 256 );
  green = Math.floor(Math.random() * 256 );
  blue = Math.floor(Math.random() * 256 );
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div container="background-color: ' + rgbColor + '"></div>';
  return rgbColor;
}
/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
