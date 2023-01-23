// pseudo code

// colour coding

// how do we colour code each period, based on current hour?
// currentHour = 12
// if todoSlot < currentHour (addClass '.past')
// so 9, 10, and 11 should be past
// else if todoSlot > currentHour (addClass '.future')
// so 13,14,15,16 and 17 should be future
// else (its === currentHour) addClass '.present'
// so 12 only, is present 

// but how??

// tap into the data-index of each div ?
// if we can discover how to do that, 
// we can then compare the data-index for each div with the currentHour!

document.getElementById("todo").dataset["value"]

// daily planner js

// globals

let darkButtonEl = $('#light-dark-btn');

// set the day and display it at the top of the page

let $day = $('#currentDay');
// $day.text('Today is ' + moment().format('dddd, Do MMMM'))
$day.text(moment().format('[Today is] dddd, Do MMMM'))

// present time blocks for 9am - 5pm

$('#timeBlocks').append(`
<div class="row 9" id="9AM">
<div class="col hour">
    9AM
</div>
<div class="col" id="todo" data-value="9">
<textarea id="todoEntry" name="todo9" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn" id="save">
    <button class="done"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 10" id="10AM">
<div class="col hour">
    10AM
</div>
<div class="col" id="todo" data-value="10">
<textarea id="todoEntry" name="todo9" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn" id="save">
    <button class="done"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 11" id="11AM">
<div class="col hour">
    11AM
</div>
<div class="col" id="todo" data-value="11">
<textarea id="todoEntry" name="todo9" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="done"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 12" id="12PM">
<div class="col hour">
    12PM
</div>
<div class="col" id="todo" data-value="12">
<textarea id="todoEntry" name="todo9" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="done"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 13" id="1PM">
<div class="col hour">
    1PM
</div>
<div class="col" id="todo" data-value="13">
<textarea id="todoEntry" name="todo9" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="done"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 14" id="2PM">
<div class="col hour">
    2PM
</div>
<div class="col" id="todo" data-value="14">
<textarea id="todoEntry" name="todo9" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="done"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 15" id="3PM">
<div class="col hour">
    3PM
</div>
<div class="col" id="todo" data-value="15">
<textarea id="todoEntry" name="todo9" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="done"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 16" id="4PM">
<div class="col hour">
    4PM
</div>
<div class="col" id="todo" data-value="16">
<textarea id="todoEntry" name="todo9" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="done"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 17" id="5PM">
<div class="col hour">
    5PM
</div>
<div class="col" id="todo" data-value="17">
<textarea id="todoEntry" name="todo9" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="done"><i class="fas fa-save"></i></button>
</div>
</div>`)


// set time block colours based on past, present, future 

let hoursArray = []
// let hoursArray = [9,10,11,12,13,14,15,16,17]
let $timeBlocks = $('.row')
console.log($timeBlocks)

// let $currentHour;
// $currentHour = $currentHour.moment().format('kk')

let $currentHour = moment().hour();

// let $dataIndex = $('data-value')
// this only accesses a single value (9AM)
let $dataIndex = document.getElementById("todo").dataset["value"]
// jquery version required
console.log($('#todo').data().value)

// let $dataIndex = document.querySelectorAll("todo").dataset["value"]

let allTodos = document.getElementsByClassName('todo');
console.log('all todos', allTodos)

console.log(document.body.children[1].children[0]); // access timeblock

// debug
$currentHour = 12;
console.log('current hour:', $currentHour)

// create an array for all the todo cols?
let todoArr = []
console.log($('div#todo.col'));


// for (let i = 0; i < todoArr.length; i++) {

//     todoArr.push(i)
//     console.log(todoArr)
//     $($timeBlocks).addClass('future')


// }

// how can we find the divs data-index? for each, in a loop?
// console.log('data-index(value):', $dataIndex)

let getIndex = document.getElementById('todo').getElementsByTagName('div')
console.log('getIndex:', getIndex.length)


// for (let i = 9; i < 18; i++) {
//     hoursArray.push(i);
//     console.log(hoursArray)
//     // let $dataIndex = document.getElementById("todo").dataset["value"]++
//     console.log($('#todo').data().value)
//     console.log($dataIndex)
//     // conditional to switch 9AM slots colour
//     if ($dataIndex < $currentHour) {
//         $($timeBlocks).addClass('past')
//     }
//     // else if id < time.now (PAST/red)
//     else if ($dataIndex > $currentHour) {
//         // remove prior classes
//         $($timeBlocks).removeClass('past')
//         $($timeBlocks).removeClass('present')
//         // set the rows colour to green
//         $($timeBlocks).addClass('future')
//     }
//     // else === time.now (PRESENT/white)
//     else {
//         $($timeBlocks).removeClass('past')
//         $($timeBlocks).removeClass('future')
//         $($timeBlocks).addClass('present')
//     }

// }

// called every refresh
// colourCoding()

// function colourCoding() {
//     // for each row 
//     for (let i = 9; i < 18; i++) {
//         hoursArray.push(i);
//         console.log(hoursArray)
//         // if id is < time.now (PAST)
//         if (i < $currentHour) {
//             $($timeBlocks).addClass('past')

//         }
//         // else if id < time.now (PAST/red)
//         else if (i > $currentHour) {
//             // remove prior classes
//             $($timeBlocks).removeClass('past')
//             $($timeBlocks).removeClass('present')
//             // set the rows colour to green
//             $($timeBlocks).addClass('future')
//         }
//         // else === time.now (PRESENT/white)
//         else {
//             $($timeBlocks).removeClass('past')
//             $($timeBlocks).removeClass('future')
//             $($timeBlocks).addClass('present')
//         }

//     }
// }


// var to access entire form
let $todoFormEl = $('#timeBlocks')
// var to save todo ID
let $todoInput = $('#todo');

//handle saving to localStorage
function handleSaveBtn(event) {
    // Prevent the default behavior
    event.preventDefault();

    let $newTodo = $("#todo");
    $newTodo.text($todoInput.val());

    $todoFormEl.append($newTodo)

    // store if saved 

}

// Submit event on the form
$todoFormEl.on('submit', handleSaveBtn);


// light theme state
let isDark = false;

// Click event for light theme toggle
darkButtonEl.on('click', function () {
    if (isDark) {
        $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
        isDark = !isDark;
    } else {
        $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
        isDark = !isDark;
    }
});


// proper saveBtn event listener

// will save to localStorage on button click [OK]

document.getElementById("save").addEventListener("click", function () {
    let todoEntry = document.getElementById("todoEntry").value;
    // add it to localStorage - do I need to stringify?
    localStorage.setItem("todoEntry", todoEntry);
    // debug
    console.log("todo entry was saved")
});


// each time the page os refreshed, call the 'get from localStorage'

window.onload = function () {
    // retrieve localStorage
    JSON.parse(localStorage.getItem("todoEntry"));
}

// clear old values ? When do we want this?
todoEntry.value = "";


// daily planner js

// issues:
// 1. the key/value will overwrite the last? That's ok! IF it's 1 note PER SLOT
// 2. the button event is only for the 1st button (.each again)
// 3. I'm saving to localStorage -> but how can I get the 'key' to put the note back in the right slot?
// 4. I cannot retrieve from local, nor will it know where to put the note (slots)
// 5. A whole bunch of style issues that I literally don't have time to fix :/  
// 6. light/dark theme and fontawesome icon fixes
// 7. Add a loop that updates moments HHmmss - not just day and date?

// BCS help: 427; why wont getItem alert the newly entered text?
// 366: why doesn't his on-load function work?
// 525: why when I try to append them to '' do they still double up?
// when to use EVENT?? 
// why are the buttons after the first one ignoring the event call??


// globals

let darkButtonEl = $('#light-dark-btn');

// set the day and display it at the top of the page

let $day = $('#currentDay');
// $day.text('Today is ' + moment().format('dddd, Do MMMM'))
$day.text(moment().format('[Today is] dddd, Do MMMM'))

// other variables 

let $todoEntry = $('#todoEntry')
console.log($todoEntry)

let $todoList = $('#todoList')
console.log($todoList)

let blocksArray = [9, 10, 11, 12, 13, 14, 15, 16, 17]
console.log(blocksArray)

// let todosArray = JSON.parse(localStorage.getItem('todosArray'));

// console.log(todosArray) // null

// // avoid NULL and replace with an empty array
// if (todosArray === null) {
//     todosArray = [];
// }

// console.log('emptied array:', todosArray) // []


// present time blocks for 9am - 5pm

// may need to set the id for the 9Am to just 9 - within the .each area below
// let slot = $(this); let hour = slot.data('id')

// each time the page os refreshed, call the 'get from localStorage'

window.onload = function (event) {

    // retrieve localStorage
    // prevent default behaviour
    event.preventDefault();
    // get the item from localStorage ??
    localStorage.getItem($($timeBlocks).attr('id'), todoEntry)
    // why is this returning the text entry??
    console.log((`value found!: ${localStorage.getItem($($timeBlocks).attr('id'))}`))
    // this needs a position (time slot, as well as the text entry)
    // JSON.parse(localStorage.getItem("todoEntry"));



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
<div class="col saveBtn" id="save">
    <button class="done"><i class="fas fa-save"></i></button>
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
<div class="col saveBtn" id="save">
    <button class="done"><i class="fas fa-save"></i></button>
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
    <button class="done"><i class="fas fa-save"></i></button>
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
    <button class="done"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 13" id="1">
<div class="col hour">
    13:00
</div>
<div class="col" id="todo" data-value="13">
<textarea id="todoEntry" name="todo13" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="done"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 14" id="2">
<div class="col hour">
    14:00
</div>
<div class="col" id="todo" data-value="14">
<textarea id="todoEntry" name="todo14" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="done"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 15" id="3">
<div class="col hour">
    15:00
</div>
<div class="col" id="todo" data-value="15">
<textarea id="todoEntry" name="todo15" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="done"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 16" id="4">
<div class="col hour">
    16:00
</div>
<div class="col" id="todo" data-value="16">
<textarea id="todoEntry" name="todo16" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="done"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 17" id="5">
<div class="col hour">
    17:00
</div>
<div class="col" id="todo" data-value="17">
<textarea id="todoEntry" name="todo17" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="done"><i class="fas fa-save"></i></button>
</div>
</div>`)
}



// set time block colours based on past, present, future 

// define timeblocks ie - 'rows'
let $timeBlocks = $('.row')
console.log($timeBlocks)

// console.log($timeBlocks.attr('#id')) // undefined 
// console.log($('#9').attr('id')) // get a specific ID

// let $currentHour;
// $currentHour = $currentHour.moment().format('kk')

let $currentHour = moment().hour();

// debug hour testing
$currentHour = 12;

// let $dataIndex = $('data-value')
// this only accesses a single value (9AM)
let $dataIndex = document.getElementById("todo").dataset["value"]
// jquery version required
// console.log($('#todo').data().value)

// let $dataIndex = document.querySelectorAll("todo").dataset["value"]

console.log(document.body.children[1].children[0]); // access timeblock

// debug
// $currentHour = 12;
console.log('current hour:', $currentHour)

// create an array for all the todo cols?
let todoArr = []
// console.log($('div#todo.col'));

// jquery colour switch - where 'this' relates to the todo row (not the numbered id list)

// why 'todoColumns' ? better naming convention please - may encompass more than just changing the colors here 

// define todo cols (the text area sections) 'todoValues' ?

const todoColumns = $('div#todo') // do we use todoColumns or access directly here?
// what is this element? It is the text areas - the 'todoColumns'
console.log('todoColumns var:', todoColumns)

todoColumns.each(function () {

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

    // let slot = $(todoColumns).data('id');
    // console.log(slot)
    // console.log($('#9').attr('id'))


    // grab each id 
    // let id = $(this).attr('id');
    // console.log(id)
    // $(this).attr('id')
    // console.log($(this))

});

// for each timeblock, return the rows id (9-5)

$timeBlocks.each(function () {
    // grab each id 
    let id = $(this).attr('id');
    console.log(id)
})

// getId()

// build a callable function we can reuse
function getId() {
    $timeBlocks.each(function () {
        // grab each id 
        let id = $(this).attr('id');
        console.log(id)
    })
}


// for (let i = 0; i < todoArr.length; i++) {

//     todoArr.push(i)
//     console.log(todoArr)
//     $($timeBlocks).addClass('future')


// }

// how can we find the divs data-index? for each, in a loop?
// console.log('data-index(value):', $dataIndex)

// let getIndex = document.getElementById('todo').getElementsByTagName('div')
// console.log('getIndex:', getIndex.length)


// for (let i = 9; i < 18; i++) {
//     hoursArray.push(i);
//     console.log(hoursArray)
//     // let $dataIndex = document.getElementById("todo").dataset["value"]++
//     console.log($('#todo').data().value)
//     console.log($dataIndex)
//     // conditional to switch 9AM slots colour
//     if ($dataIndex < $currentHour) {
//         $($timeBlocks).addClass('past')
//     }
//     // else if id < time.now (PAST/red)
//     else if ($dataIndex > $currentHour) {
//         // remove prior classes
//         $($timeBlocks).removeClass('past')
//         $($timeBlocks).removeClass('present')
//         // set the rows colour to green
//         $($timeBlocks).addClass('future')
//     }
//     // else === time.now (PRESENT/white)
//     else {
//         $($timeBlocks).removeClass('past')
//         $($timeBlocks).removeClass('future')
//         $($timeBlocks).addClass('present')
//     }

// }

// called every refresh
// colourCoding()

// function colourCoding() {
//     // for each row 
//     for (let i = 9; i < 18; i++) {
//         hoursArray.push(i);
//         console.log(hoursArray)
//         // if id is < time.now (PAST)
//         if (i < $currentHour) {
//             $($timeBlocks).addClass('past')

//         }
//         // else if id < time.now (PAST/red)
//         else if (i > $currentHour) {
//             // remove prior classes
//             $($timeBlocks).removeClass('past')
//             $($timeBlocks).removeClass('present')
//             // set the rows colour to green
//             $($timeBlocks).addClass('future')
//         }
//         // else === time.now (PRESENT/white)
//         else {
//             $($timeBlocks).removeClass('past')
//             $($timeBlocks).removeClass('future')
//             $($timeBlocks).addClass('present')
//         }

//     }
// }


/*

// the missing logic:

// when user types into ANY timeslot - and presses the save button

    -> the key (9-17) and value (input)
    -> must be saved to the localStorage 

    // currently only the FIRST slot is saving to storage (need ALL)
    // it is saving a key/value pair as required

// when the user refreshes browser - the todos must be retrieved 
    // AND placed into the correct timeslots 

    // no method to retrieve data
    // no method that puts them into the correct time slot

// 

*/

// if this is the correct jquery way to do on-load function - why isn't the alert working?

// create an on-load function that grabs the current localStorage (if present)
// $(document).ready(function (event) {

//     event.preventDefault();

//     // on load or refresh, retrieve from localStorage (if present)
//     // let grabtodoColumns = $('#')
//     localStorage.getItem($($timeBlocks).attr('id'))
//     // why is this returning the text entry??
//     alert(`value found!: ${localStorage.getItem($($timeBlocks).attr('id'))}`)

//     // actually add it to the slot!


// })

// var to access entire form
let $todoFormEl = $('#timeBlocks')
console.log($('#timeBlocks'))

// var to save current todo ID (currently 9AM)
let $todoInput = $('#todo');
console.log($('#todo'))

//handle saving to localStorage
function handleSaveBtn(event) {
    // Prevent the default behavior
    event.preventDefault();

    let $newTodo = $("#todo");
    $newTodo.text($todoInput.val());

    $todoFormEl.append($newTodo)

    // store if saved 

}

// Submit event on the form
$todoFormEl.on('submit', handleSaveBtn);


// light theme state
let isDark = false;

// Click event for light theme toggle
darkButtonEl.on('click', function () {
    if (isDark) {
        $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
        isDark = !isDark;
    } else {
        $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
        isDark = !isDark;
    }
});


// proper saveBtn event listener

// will save to localStorage on button click [OK]

// this needs to be .each also - currently only works on 9AM

// JQUERY style please!
$('#save').on('click', function (event) {


    // understanding set n get - why wont this get??

    // get the text
    // var text = $('#todoEntry').text();

    // // set the item in localStorage
    // localStorage.setItem('todoEntry', text);

    // // alert the value to check if we got it
    // alert(localStorage.getItem('todoEntry')); // why doesn't this getItem alert something??

    // define each button
    let button = $(this);
    console.log(button)
    // get the closest button
    let todo = button.closest($timeBlocks);
    console.log(todo)
    let id = todo.data('id');
    console.log(id)
    // grab key/val and save it
    let todoEntry = $('#todoEntry').val();
    console.log('the value was:' + todoEntry)

    // // set the item in localStorage
    // the KEY!     // the text entered 
    localStorage.setItem($($timeBlocks).attr('id'), todoEntry);

    console.log('key stored:' + $($timeBlocks).attr('id') + ' value stored:' + todoEntry)

    // // bind text to 'blur' event to overwrite - pointless!
    // $('#todoEntry').on('blur', function () {

    //     // check the new text
    //     var newEntry = $(this).val();

    //     // overwrite the old entry
    //     localStorage.setItem($($timeBlocks).attr('id'), newEntry);

    //     // test if it works
    //     console.log('key stored:' + $($timeBlocks).attr('id') + 'value stored:' + todoEntry)
    // this returns the #textEntry object
    console.log($('#todoEntry').html(window.localStorage.getItem($($timeBlocks).attr('id'))));

    // yet this returns the text entered as a getter !? Why not the iD? - it returns the KEY VALUE?
    alert(`value stored!: ${localStorage.getItem($($timeBlocks).attr('id'))}`)

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





// clear old values 
todoEntry.value = "";

// use .find to take out of local storage and add it to the page 

// 