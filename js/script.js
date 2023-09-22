/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/



/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote:"Don't Aspire To Make A Living, Aspire To Make A Difference",
    source: "Denzel Washington",
    Citation: "Speech At Dillard University",
    year: 2016
  },
  {
    quote:"Stay Hungry, Stay Foolish",
    source: "Steve Jobs",
    Citation: "speech at Stanford University ",
    year: 2005
  },
  {
    quote:"You Cannot Change The Past, But You Can Change Your Perspective About It ",
    source: "Marcus Taylor",
    Citation: "Motivational Video - Perspective",
    year: 2021
  },
  {
    quote:"if an egg broken by an inside force life begins, great things always begin on the inside.",
    source: "Jim Kwik",
    tags:["Grind","Mentality"],
    year: 2018
  },
  {
    quote:"As is a tale, so is life: not how long it is, but how good it is, is what matters.",
    source: "J.K Rowling",
    Citation: "Harward Speech",
    year: 2011
  },
  {
    quote:"Have More Than You Show, Speak Less Than You Know",
    source: "William Shakespear",
    Citation: "King Lear",
    tags:["Grind","Mentality"],
    year: 1606
  },
  {
    quote:"The Tree That Would Grow To Heaven, Must Send Its Roots To Hell",
    source: "Carl Jung",
    // Citation: "chapter 5 of a book by Jung",
    year: 1951
  }
];


/***
 * `getRandomQuote` function
***/
function getRandomQuote(){
  // let random = Math.floor(Math.random() * (quotes.length - 1)) + quotes[0];
  let random = Math.floor(Math.random() * quotes.length);
  return quotes[random];
}

/***
 * `printQuote` function
***/


function printQuote(){
   let myQuote = getRandomQuote();
   

   let content = `<p class="quote">"${myQuote.quote}"</p>
                    <p class="source">${myQuote.source}`

  if (myQuote.Citation){
   
   content += `<span class="citation">${myQuote.Citation}</span>`; 
      // console.log(content);
  } 
  if(myQuote.year) {
     content  +=   `<span class="year">${myQuote.year}</span>`;
      // console.log(content);
  }
  const tagList = document.getElementById('tagList');
  const tagContainer = document.getElementById('tagContainer');

  //check tags
  if (!myQuote.tags){
    tagList.innerHTML = '';
    tagContainer.style.display = 'none';
  } else {
    tagList.innerHTML = '';
    tagContainer.style.display = 'inline-block';
    myQuote.tags.forEach(tag => {
      let li = document.createElement('li');
      li.textContent = `#${tag}`;
      tagList.appendChild(li);
    })
  }

  //creating random bg color
  const changeColor = () =>  {
   document.body.style.backgroundColor = 
   'rgb(' + Math.round(Math.random() * 255) +
   ','+ Math.round(Math.random() * 255) +
   ','+ Math.round(Math.random() * 255) +')';
  }
  document.body.style.backgroundColor = changeColor();
  
  //adding content in html
  document.getElementById('quote-box').innerHTML = content;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
//setting interval
setInterval(printQuote,8000);

document.getElementById('load-quote').addEventListener("click", printQuote, false);