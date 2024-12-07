/*
<!--
JS Assignment-3_ DOM Selectors
Instructions: Create an HTML file (index.html) and a JavaScript file (script.js).
 Use JavaScript selectors (getElementById, getElementsByClassName, getElementsByTagName, querySelector, and querySelectorAll)
to select and log elements. No DOM manipulation is required. Only log the selected elements to the console. Upload the code
to GitHub and share the repository link. HTML Setup: In your index.html, create the following structure: An h1 element with
an id of main-title. A div with a class of container. Inside the container div, add: Two section elements, each with the class section.
Each section should contain two p elements with some text. Three button elements with the class btn.
Tasks Using Selectors: Using getElementById: Select the h1 element with the id of main-title and log it to the console.
Using getElementsByClassName: Select all elements with the class container and log them to the console.
Select all elements with the class section and log them to the console. 
Using getElementsByTagName: Select all p elements and log them to the console.
 Using querySelector: Select the first button with the class btn and log it to the console.
  Select the first section element and log it to the console.
   Using querySelectorAll: Select all button elements with the class btn and log them to the console.
Select all p elements within the container div and log them to the console.
 Submission: Push your code to a GitHub repository. Share the repository link.
-->
*/

/*Selecting the h1 element by its ID*/
const mainTitle = document.getElementById('main-title');
console.log('h1 element with ID "main-tile": ', mainTitle);

/* Selecting all elements with the class "container"*/
const containers= document.getElementsByClassName('container');
console.log('Elements with class "container": ',containers);

/* Selecting all elements with the class "section" */
const sections= document.getElementsByClassName('section');
console.log('Elements with class "section": ',sections);

/* Selecting all paragraph elements*/
const paras= document.getElementsByTagName('p');
console.log('All Elements with "<p>": ',paras);

// Selecting the first button with the class "btn"
const firstButton= document.querySelector('.btn');
console.log('First button with class "btn": ',firstButton);

// Selecting the first section element
const firstSection= document.querySelector('.section');
console.log('First section element:',firstSection);

// // Selecting all buttons with the class "btn"
const allButton= document.querySelectorAll('.btn');
console.log('All nuttons with Class btn: ',allButton);

// Selecting all <p> elements inside the div with class "container"
const containerPara=document.querySelectorAll('.container p');
console.log('All <p> ements within the container: ',containerPara);

