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
var html = '';
var red;
var green;
var blue;
var rgbColor;

let quotes = [
  {
    quote : "If a man hasn’t discovered something that he will die for, he isn’t fit to live.",
    source : "Martin Luther King, Jr.",
    citation : "History",
    year : "1963"
  },
  {
    quote : "Who dares, wins. Who sweats, wins. Who plans, wins.",
    source : "British Special Air Service (SAS)",
    citation : "Twitter",
    year : " "
  },
  {
    quote : "It is fatal to enter a war without the will to win it.",
    source : "General Douglas MacArthur",
    citation : "Military",
    year : " "
  },
  {
    quote : "Fortune favors the brave.",
    source : "Terence",
    citation : "",
    year : " "
  },
  {
    quote : "Only our individual faith in freedom can keep us free.",
    source : "Dwight D. Eisenhower",
    citation : "Wiki",
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
let randomNumber = getRandomQuote();
  if ( quotes[randomNumber].quote === " " || null ) {
   quotes[randomNumber].quote = '  Quote is Unknown';
  }
  if ( quotes[randomNumber].source === " " || null ) {
     quotes[randomNumber].source = '  Source is Unknown';
  }
  if (  quotes[randomNumber].citation === " " || null ) {
      quotes[randomNumber].citation = '  Citation is Unknown';
  }
  if ( quotes[randomNumber].year === " " || null ) {
     quotes[randomNumber].year = '  Year is Unknown';
  }

document.getElementById('quote').innerHTML = quotes[randomNumber].quote;
document.getElementById('source').innerHTML = quotes[randomNumber].source;
document.getElementById('citation').innerHTML = quotes[randomNumber].citation;
document.getElementById('year').innerHTML = quotes[randomNumber].year;

}


// function randomColor() {
//   red = Math.floor(Math.random() * 256 );
//   green = Math.floor(Math.random() * 256 );
//   blue = Math.floor(Math.random() * 256 );
//   rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//   html += '<div container="background-color: ' + rgbColor + '"></div>';
//   return rgbColor;
// }

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/
// document.getElementById('loadQuote').addEventListener("click", rgbColor, false);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
