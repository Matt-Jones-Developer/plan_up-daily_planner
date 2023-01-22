// Week 6 Api Recap
// Day 1
// What is an API?
// API (Application Programming Interface) is a set of methods, properties, events, and URLs that developers use to interact with components of a user's web browser.
// What is a Web API?
// Web APIs are built into the web browser and contain methods that allow us to manipulate a webpage using JavaScript.
// We use Web APIs to create elements and add them to the browser or to add and remove styles and attributes—all via JavaScript.
// What is the DOM?
// When we open a webpage, the browser creates a tree of objects that represent the opened page. That tree of objects is the DOM, or Document Object Model.
// Using the DOM, we can manipulate the HTML elements on the page via JavaScript.
// Window Object
// The window object represents an open window in a browser. We can think of this as the global scope with all the global properties and methods attached.
// https://developer.mozilla.org/en-US/docs/Web/API/Window
// We can view the window object with
console.log(window);
// Window Document
// The Document serves as the entry point to the web pages content. It is the top of the DOM tree
// https://developer.mozilla.org/en-US/docs/Web/API/Document
console.log(window.document);
// We can access the HTMl as object elements using dot notation
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
// DOM Traversal
// We can traverse the dom by accessing nested elements with the children property. They return array-like collections so indexes are needed.
console.log(document.body.children[0]);
// We can also access an element directly by targeting the id of the element using the method getElementbyId()
let variable1 = document.getElementById('id-name-here');
console.log(variable1);
//developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
// We can set and change a selected element's style by accessing an element's style object and its properties and assigning a value, like in the following example:
https: variable1.style.color = 'green';
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
// You can find a full list of properties and methods here
// https://www.w3schools.com/jsref/dom_obj_all.asp
// Selecting Elements
// Single Element (could be any css selector)
let variable2 = document.querySelector('#id-name-here');
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// Multiple Elements
let variable3 = document.querySelectorAll('div');
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll
// Setting Attributes
// We style those elements using the element method setAttribute(). We can set any attribute such as src for image or style for divs etc.
variable2.setAttribute('style', 'width:500px; height:200px;');
// https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
// Create Element (in 3 steps)
// Step 1: We use the method createElement() to create new elements, as follows:
let tag = document.createElement(tagName);
// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// Step 2: We use the textContent property to add content to the element, as follows:
tag.textContent = "This was made via prompts. It's a " + tagName + '.';
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
// Step 3: When we create an element, it will not appear unless it is appended to another element in the HTML. We use appendChild() to attach the new element as a child of the <body>, as shown in the following example:
document.body.appendChild(tag);
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// Timers and Intervals
// We can use JavaScript to create a countdown timer
// It uses setInterval which executes after every interval and clearInterval which stops it
// https://developer.mozilla.org/en-US/docs/Web/API/setInterval
// https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
// e.g: 
let secondsLeft = 10;
let timerInterval = setInterval(function () {
  // after every interval do something
  secondsLeft--;
  if (secondsLeft === 0) {
    // clearInterval stops the execution of the interval
    clearInterval(timerInterval);
  }
  // Interval below in milliseconds
}, 1000);
// Day 2
// HTML DOM Events
// There are lots of events such as keyup, keydown, click,  etc
// https://www.w3schools.com/jsref/dom_obj_event.asp
// Event Listeners
// We can listen out for events on elements by adding event listeners. These listen for events like click, submit etc.
// variable2.addEventListener("click", function() {...})
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// Prevent Default
// Sometimes when an event is triggered it has a default behaviour. For example click on a link, takes you to that page, we could prevent that with preventDefault()
event.preventDefault();
// https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
// Keyboard events
//  When a keyboard event takes place we can use the key property to access the value of the pressed key and store it in a variable, as shown in the following example:
let keyPress = event.key;
// We use the code property to access the key's code, as shown in the following example:
let keyCode = event.code;
// Event Bubbling
// Event bubbling happens by default in JavaScript—meaning that when an event like a click occurs, the event will traverse up the DOM tree and create a chain reaction of events.
// If and event is triggered in the child, it is also triggered in the parent, and its parent etc
// <div>
//   <h2>But not here</h2>
//   <div class="outer-div">Which also triggers here too
//      <div class="inner-div">Which also triggers here
//        <div>
//         <button class="button">Clicking here triggers</button>
//        </div>
//      </div>
//   </div>
// </div>
// This is only useful / an issue if we are listening for events on any of the parent divs
// Stop Propagation
// We can stop an event from traversing up the DOM tree by using stopPropagation()
event.stopPropagation()
// https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
// Data Attributes
// We can store information in HTML elements by using data attributes.
// We use data- to start the name of any element that is a data attribute, as follows:
// <article
//    id="some-id"
//    data-this-can-be-anything="anything"
//    data-whatever="12314"
//    data-imagine="john lennon">
//  </article>
// https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
// Get Attribute
// We can access the information in a data attribute and store it in a variable using getAttribute(), as shown in the following example:
let state = element.getAttribute("data-imagine");
//We can also access the value of the data attribute through the dataset object, as shown in the following example:
console.log(element.dataset.imagine)
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute
// Set Attribute
// We can set a data attribute using setAttribute(), as follows:
element.setAttribute("data-new", "new data here");
// https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
// Day 3
// Local Storage
// localStorage can be used to store data in string format on a users computer. It can hold around 5mb of data and will stay there until a user clears it.
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// You can find all of the methods here:
// https://developer.mozilla.org/en-US/docs/Web/API/Storage
// setItem
let value = "some string"
localStorage.setItem("key", value);
// getITem
localStorage.getItem("key");
// JSON
// JSON stands for JavaScript Object Notation. For our purposes it is essentially an object turned into a string.
// We can turn javascript objects into JSON using:
let someObjectHere = {key: "value"}
JSON.stringify(someObjectHere)
// We can then turn JSON back into JavaScript Objects using:
JSON.parse(someObjectHere)
// Trim
// the .trim() method removes white space from before and after the input.
let todoText = todoInput.value.trim();