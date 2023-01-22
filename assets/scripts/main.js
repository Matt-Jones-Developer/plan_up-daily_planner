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
<input type="text" class="form-input w-100" id="todo-input" 
name="todo-input" placeholder="Enter todo">
</div>
<div class="col saveBtn">
    <button class="done"><i>icon</i></button>
</div>
</div>
<div class="row 10" id="10AM">
<div class="col hour">
    10AM
</div>
<div class="col" id="todo" data-value="10">
    TODO
</div>
<div class="col saveBtn">
    <button class="done"><i>icon</i></button>
</div>
</div>
<div class="row 11" id="11AM">
<div class="col hour">
    11AM
</div>
<div class="col" id="todo" data-value="11">
    TODO
</div>
<div class="col saveBtn">
    <button class="done"><i>icon</i></button>
</div>
</div>
<div class="row 12" id="12PM">
<div class="col hour">
    12PM
</div>
<div class="col" id="todo" data-value="12">
    TODO
</div>
<div class="col saveBtn">
    <button class="done"><i>icon</i></button>
</div>
</div>
<div class="row 13" id="1PM">
<div class="col hour">
    1PM
</div>
<div class="col" id="todo" data-value="13">
    TODO
</div>
<div class="col saveBtn">
    <button class="done"><i>icon</i></button>
</div>
</div>
<div class="row 14" id="2PM">
<div class="col hour">
    2PM
</div>
<div class="col" id="todo" data-value="14">
    TODO
</div>
<div class="col saveBtn">
    <button class="done"><i>icon</i></button>
</div>
</div>
<div class="row 15" id="3PM">
<div class="col hour">
    3PM
</div>
<div class="col" id="todo" data-value="15">
    TODO
</div>
<div class="col saveBtn">
    <button class="done"><i>icon</i></button>
</div>
</div>
<div class="row 16" id="4PM">
<div class="col hour">
    4PM
</div>
<div class="col" id="todo" data-value="16">
    TODO
</div>
<div class="col saveBtn">
    <button class="done"><i>icon</i></button>
</div>
</div>
<div class="row 17" id="5PM">
<div class="col hour">
    5PM
</div>
<div class="col" id="todo" data-value="17">
    TODO
</div>
<div class="col saveBtn">
    <button class="done"><i>icon</i></button>
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

// jquery colour switch

$('div#todo.col').each(function () {
    let val = parseInt($(this).prop('id'));
    if (val > $currentHour && val < $currentHour + 6) {
        $(this).css('background-color', 'Blue');
    } else if (val < $currentHour && val > $currentHour - 6) {
        $(this).css('background-color', 'Red');
    } else if (val === $currentHour) {
        $(this).css('background-color', 'Green');
    } else {
        $(this).css('background-color', 'White');
    }
});

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

function colourCoding() {
    // for each row 
    for (let i = 9; i < 18; i++) {
        hoursArray.push(i);
        console.log(hoursArray)
        // if id is < time.now (PAST)
        if (i < $currentHour) {
            $($timeBlocks).addClass('past')

        }
        // else if id < time.now (PAST/red)
        else if (i > $currentHour) {
            // remove prior classes
            $($timeBlocks).removeClass('past')
            $($timeBlocks).removeClass('present')
            // set the rows colour to green
            $($timeBlocks).addClass('future')
        }
        // else === time.now (PRESENT/white)
        else {
            $($timeBlocks).removeClass('past')
            $($timeBlocks).removeClass('future')
            $($timeBlocks).addClass('present')
        }

    }
}


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