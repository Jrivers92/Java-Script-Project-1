/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/
//VARIABLES LOCATION
var red;
var green;
var blue;
var rgbColor;

let quotes = [
  {
    quote : "If a man hasn’t discovered something that he will die for, he isn’t fit to live.",
    source : "Martin Luther King, Jr",
    citation : "History",
    year : "1963"
  },
  {
    quote : "Imagination is more important than knowledge.",
    source : "Albert Einstein",
    citation : "German Theoretical Physicist",
    year : "1879-1955"
  },
  {
    quote : "All our dreams can come true, if we have the courage to pursue them.",
    source : "Walt Disney",
    citation : "American Filmaker",
    year : "1901-1966"
  },
  {
    quote : "It does not matter how slowly you go as long as you do not stop.",
    source : "Confucius",
    citation : "Chinese philosopher, politician and statesman ",
    year : "551 BC I-479 BC"
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
    citation : " ",
    year : " "
  },
  {
    quote : "Only our individual faith in freedom can keep us free.",
    source : "Dwight D. Eisenhower",
    citation : "Wiki",
    year : " "
  }
]



// Random Quote Generator Function
function getRandomQuote() {
 let randomNumber = Math.floor(Math.random() * quotes.length );
  return randomNumber;
}

function printQuote() {
let randomNumber = getRandomQuote();
//IF STATEMENTS FOR WHEN NO QUOTE OR SOURCE OR CITATION OR YEAR IS FOUND
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
//TARGETING THE IDS TO ADD THE QUOTE GENERATOR AND ALL THE OBJECTS I LISTED
//AND DISPLAY IT ON THE SCREEN
document.getElementById('quote').innerHTML = quotes[randomNumber].quote;
document.getElementById('source').innerHTML = quotes[randomNumber].source;
document.getElementById('citation').innerHTML = quotes[randomNumber].citation;
document.getElementById('year').innerHTML = quotes[randomNumber].year;

}
//SET A TIMER TO 6,5 SECONDS TO AUTOMATIOCALLY SWITCH TO NEXT QUOTE
  setInterval(printQuote, 6500);

// Random Color Function
function randomColor() {
  red = Math.floor(Math.random() * 256 );
  green = Math.floor(Math.random() * 256 );
  blue = Math.floor(Math.random() * 256 );
  let rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//ADDING THE RANDOM COLOR TO THE BODY BACKGROUND
  document.body.style.background = rgbColor;

}

//SETTING INTERVAL TO MATCH THE QUOTE INTERVAL BUT WITH THE RANDOM COLOR Generator
//SO BOTH COLOR AND QUOTE CHANGES TOGETHER
  setInterval(randomColor, 6500);
//WHEN YOU CLICK THE BUTTON BOTH A QUOTE AND A BACKGROUND COLOR WILL CHANGE
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
document.getElementById('container').addEventListener("click", randomColor, false);
