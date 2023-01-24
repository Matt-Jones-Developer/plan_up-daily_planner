// daily planner js

// issues:
// 1. DONE
// 2. the button event is only for the 1st button (.each again?)
// 3. I'm saving to localStorage -> but how can I get the 'key' to put the note back in the right slot?
// this is only working for slot 1, button 1 - I cannot get any of the other buttons to copy this 
// 4. I cannot retrieve from local, nor will it know where to put the note (slots)
// 5. A whole bunch of style issues that I literally don't have time to fix :/  
// 6. light/dark theme and fontawesome icon fixes - even something I did well before has now been forgotten

// help: @lines:
// 436; why wont getItem alert the newly entered text?
// 119: why doesn't this on-load function work?
// 329: cannot access ID or data-value for each of these too here
// 93: I am trying to clear the divs before re-rendering them (not even sure if that's necessary)
// 97: why when I try to re-append them to '' do they still double up?
// 79 & 443: when to use EVENT?? 
// 432: why are the save buttons (after the first one) ignoring the event call? .each required?
// why am I failing to grasp so much of this??

/*

// the missing logic:

// when user types into ANY timeslot - and presses the save button

    -> the key (9-17) and value (input)
    -> must be saved to the localStorage 

    // currently only the FIRST slot is saving to storage (need ALL)
    // it is saving a key/value pair as required

// when the user refreshes browser - the todos must be retrieved 
    // AND placed into the correct timeslots 

    // no method to retrieve data - getItem - then what? re-render won't work
    // no method that puts them into the correct time slot

// 

*/

// globals

let darkButtonEl = $('#light-dark-btn');

// set the day and display it at the top of the page

let $day = $('#currentDay');
$day.text(moment().format('[Today is] dddd, Do MMMM'))

// more useless letiables - trying to learn from the todo lesson

let $todoEntry = $('#todoEntry')
console.log($todoEntry)

let $todoList = $('#todoList')
console.log($todoList)

let blocksArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]
console.log(blocksArray)

// make slotId global
let slotId = 0;

// cannot use JSON with Jquery - correct?
// pointless remove null and fill with empty []
// let todosArray = JSON.parse(localStorage.getItem('todosArray'));

// console.log(todosArray) // null

// // avoid NULL and replace with an empty array
// if (todosArray === null) {
//     todosArray = [];
// }

// console.log('emptied array:', todosArray) // []

// on load function - when I do the Jquery version it will not work at all
// each time the page is refreshed, call the 'get from localStorage'

window.onload = function (event) {

    // retrieve localStorage
    // prevent default behaviour
    event.preventDefault();
    // get the item from localStorage ??
    localStorage.getItem($($timeBlocks).attr('id'), todoEntry)

    // why is this returning the text entry??
    console.log((`value found!: ${localStorage.getItem($($timeBlocks).attr('id'), todoEntry)}`))

    // this needs a position (time slot, as well as the text entry)
    // JSON.parse(localStorage.getItem("todoEntry"));


    // use .find to take out of local storage and add it to the page ?

    // trying to re-call the saved text back to the textentry column - fails

    // clear the prior render 
    // $timeBlocks.append = '';
    // $('#timeBlocks').append(``)
    // // add it to the slot (todoColumns) ? re-render??
    // renderTimeBlocks()

    // trying to get the item to render it back to the div 
    // $($todoColumns).append(`
    // <textarea id="todoEntry" name="todo9" rows="2" cols="50"
    //     maxlength="58" placeholder="Todo here">${todoEntry}
    // </textarea>`)

    // grab the id (hour) of each slot
    // let slot = $(this);
    // console.log(slot)
    // let hour = slot.data('id')
    // console.log(hour)
    // retrieve from LS
    // localStorage.getItem($($timeBlocks).attr('id'), JSON.stringify(todoEntry));
    // JSON.parse(localStorage.getItem($($timeBlocks).attr('id'), todoEntry));


}

// if this is the correct 'jquery way' to do on-load function - why isn't the alert working?

// create an on-load function that grabs the current localStorage (if present)
// $(document).ready(function (event) {

//     event.preventDefault();

//     // on load or refresh, retrieve from localStorage (if present)
//     // let grabTodoColumns = $('#todoEntry')
//     localStorage.getItem($($timeBlocks).attr('id'))
//     // why is this not returning the text entry??
//     alert(`value found!: ${localStorage.getItem($($timeBlocks).attr('id'))}`)

//     // actually add it to the slot! ??


// })




// present time blocks for 9am - 5pm

// may need to set the id for the 9Am to just 9 - within the .each area below
// let slot = $(this); let hour = slot.data('id')

// put in a function to be able to reuse it - re-render them each refresh? Probably wrong

renderTimeBlocks()

// function that renders the timeblocks 
function renderTimeBlocks() {

    $('#timeBlocks').append(`
<div class="row 9" id="9">
<div class="col hour">
    09:00
</div>
<div class="col" id="todo" data-value="9">
<textarea id="todoEntry" name="todo9" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save" id="save"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 10" id="10">
<div class="col hour">
    10:00
</div>
<div class="col" id="todo" data-value="10">
<textarea id="todoEntry" name="todo10" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save" id="save"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 11" id="11">
<div class="col hour">
    11:00
</div>
<div class="col" id="todo" data-value="11">
<textarea id="todoEntry" name="todo11" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 12" id="12">
<div class="col hour">
    12:00
</div>
<div class="col" id="todo" data-value="12">
<textarea id="todoEntry" name="todo12" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 13" id="13">
<div class="col hour">
    13:00
</div>
<div class="col" id="todo" data-value="13">
<textarea id="todoEntry" name="todo13" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 14" id="14">
<div class="col hour">
    14:00
</div>
<div class="col" id="todo" data-value="14">
<textarea id="todoEntry" name="todo14" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 15" id="15">
<div class="col hour">
    15:00
</div>
<div class="col" id="todo" data-value="15">
<textarea id="todoEntry" name="todo15" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 16" id="16">
<div class="col hour">
    16:00
</div>
<div class="col" id="todo" data-value="16">
<textarea id="todoEntry" name="todo16" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 17" id="17">
<div class="col hour">
    17:00
</div>
<div class="col" id="todo" data-value="17">
<textarea id="todoEntry" name="todo17" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save"><i class="fas fa-save"></i></button>
</div>
</div>`)
}


// set time block colours based on past, present, future 

// define timeblocks ie - 'rows'
let $timeBlocks = $('.row')
console.log($timeBlocks)

// console.log($timeBlocks.attr('#id')) // undefined 
// console.log($('#9').attr('id')) // get a specific ID

// using moment to get the current hour

let $currentHour = moment().hour();

// debug hour testing (to check colors work) 
// comment out for actual colour flow based on 9am-5pm
// $currentHour = 12;

// let $dataIndex = $('data-value')
// this only accesses a single value (9AM)
let $dataIndex = document.getElementById("todo").dataset["value"]
// jquery version required
// console.log($('#todo').data().value)

console.log(document.body.children[1].children[0]); // access timeblocks- incorrectly


// jquery colour switch - where 'this' relates to the todo row (not the numbered id list)
// 'todoColumns' - may encompass more than just changing the colors here but I dunno
// define todo cols (the text area sections) 'todoValues' ?

const todoColumns = $('div#todo')
// what is 'this' element? It is the text areas - the 'todoColumns'
console.log('todoColumns let:', todoColumns)

todoColumns.each(function () {

    // debug
    // console.log($(this).data().value)

    if ($(this).data().value < $currentHour) {
        $(this).removeClass('present')
        $(this).removeClass('future')
        $(this).addClass('past')
    }
    else if ($(this).data().value > $currentHour) {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
    }

    else {
        $(this).removeClass('past')
        $(this).removeClass('future')
        $(this).addClass('present')
    }

    // attempting to access the data-value for each in the same loop?
    // put these id's into a new $let?

    $slotId = $(this).data().value
    console.log($slotId) // these are the correct values I need


    // grab each id ?
    $(this).attr('id')
    console.log($(this)) // grabs the cols id (div#todo.col.future)


});

// proper saveBtn event listener

// this needs to be .each also - currently only works on 9AM
// const buttons = $('.save')
// console.log('buttons (save class):', buttons)

// buttons.each(function (currentBtn) {
//     // add the button click event here?\
//     // putting what I have below n here doesn't work
//     $('.save').on('click', function (event) {
//         // define each button
//         let button = $(this);
//         console.log(button) // logs ALL buttons
//         // get the closest button
//         let todo = button.closest($timeBlocks);
//         console.log(todo)
//     })

// })


// will save to localStorage on button click [OK]
// JQUERY style please!
$('.save').on('click', function (event) {


    // understanding set n get - why wont this get??

    // get the text
    // let text = $('#todoEntry').text();

    // // set the item in localStorage
    // localStorage.setItem('todoEntry', text);

    // // alert the value to check if we got it
    // alert(localStorage.getItem('todoEntry')); // why doesn't this getItem alert something??


    // define each button
    let button = $(this);
    console.log(button)
    // get the closest button
    let todo = button.closest($timeBlocks);
    console.log(todo) // logs the correct button
    // let id = todo.data('id');
    // console.log(id) // undefined
    // use slot id to grab that cols time slot
    // console.log($slotId) // undefined??
    // grab key/val and save it
    let todoEntry = $('#todoEntry').val();
    console.log('the value was:' + todoEntry)

    // // set the item in localStorage
    // the KEY!                // the text entered 
    localStorage.setItem($($timeBlocks).attr('id'), todoEntry);
    // localStorage.setItem($slotId, todoEntry);

    console.log('key stored:' + $($timeBlocks).attr('id') + ' value stored:' + todoEntry)
    // console.log('key stored:' + $slotId + ' value stored:' + todoEntry)

    // this returns the #textEntry object
    // console.log($($timeBlocks).attr('id'))
    console.log($slotId) // why is this always 17?  -because it's last in the .each loop 
   // console.log($('#todoEntry').html(window.localStorage.getItem($($timeBlocks).attr('id'))));

    // yet this returns the text entered as a getter !? Why not the iD? 
    alert(`value stored!: ${localStorage.getItem($($timeBlocks).attr('id'), todoEntry)}`)
    // alert(`value stored!: ${localStorage.getItem($slotId, todoEntry)}`)

    // });


})

// document.getElementById("save").addEventListener("click", function () {
//     let todoEntry = document.getElementById("todoEntry").value;
//     // add it to localStorage - do I need to stringify?
//     // localStorage.setItem("todoEntry", todoEntry);
//     localStorage.setItem($($timeBlocks).attr('id'), JSON.stringify(todoEntry));
//     // debug
//     console.log("todo entry was saved")
// });

// MUST BE JQUERY VERSION !!

// $('button.save').on("click", function (event) { // event??
//     let button = $(this);
//     let slot = button.closest($timeBlocks);
//     let id = slot.data('id');
//     // add it to localStorage - do I need to stringify?
//     // localStorage.setItem("todoEntry", todoEntry);
//     localStorage.setItem($($timeBlocks).attr('id'), JSON.stringify(todoEntry));
//     // debug
//     console.log("todo entry was saved")
// });

// light dark - unfinished, started just to restore my sanity, even that's broken lol
let $darkButtonEl = $('#light-dark-btn')

// light theme state
let isDark = false;

// Click event for light theme toggle
$darkButtonEl.on('click', function () {
    if (isDark) {
        // $(this).find('i').toggleClass('fa-solid fa-toggle-off fa-solid fa-toggle-on');
        $('body').css({ 'background-color': '#fff', color: '#1a1a1a' });
        $('.jumbotron').css({ 'border-bottom': '10px solid black' });
        isDark = !isDark;
    } else {
        $('body').css({ 'background-color': '#1a1a1a', color: '#fff' });
        $('.jumbotron').css({ 'border-bottom': '9px solid white' });
        isDark = !isDark;
    }
});



// how to retrieve a localStorage item and render it into the textarea it was saved from in Jquery?
$(document).ready(function () {
    let savesnotesbtn = document.getElementById("save");

    //FILL TEXT AREAS WITH NOTES
    for (let i = 1; i < 9; i++) {
      $($slotId + i + "input").val(localStorage.getItem("todoEntry" + i));
    }

    function saveNotes() {
      //Change styles of button
      $("#save").removeClass("notSaved").addClass("Saved");
      // Save data to localstorage
      for (let i = 1; i < 9; i++) {
        localStorage.setItem("todoEntry" + i, $("#todoEntry" + i + "input").val());
      }
    };
    savesnotesbtn.addEventListener("click", saveNotes);
});


//Source: https://stackoverflow.com/questions/42963091



