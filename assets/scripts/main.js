// daily planner js

// set the day and display it at the top of the page

let $day = $('#currentDay');
$day.text(moment().format('[Today is] dddd, Do MMMM'));


// define time blocks ie - 'rows'
let $timeBlocks = $('.row')
console.log($timeBlocks)

// using moment to get the current hour
let $currentHour = moment().hour();

// debug hour testing (to check colors work) 
// $currentHour = 12;

// define the text areas
let $todoAreas = $('textarea');

// make blockId global
let blockId = 0;

// each time the page is refreshed, call the 'get from localStorage'

$(document).ready(function () {

    // pull it out of storage and place it within the correct textarea
    // document.querySelectorAll("textarea")[0].value = localStorage.getItem("9")
    $('#9 #todoEntry').val(localStorage.getItem('9'));
    $('#10 #todoEntry').val(localStorage.getItem('10'));
    $('#11 #todoEntry').val(localStorage.getItem('11'));
    $('#12 #todoEntry').val(localStorage.getItem('12'));
    $('#13 #todoEntry').val(localStorage.getItem('13'));
    $('#14 #todoEntry').val(localStorage.getItem('14'));
    $('#15 #todoEntry').val(localStorage.getItem('15'));
    $('#16 #todoEntry').val(localStorage.getItem('16'));
    $('#17 #todoEntry').val(localStorage.getItem('17'));
    // update log - $timeblocks not even created yet its required to fetch saved entries?
    // console.log((`value found!: ${localStorage.getItem($($timeBlocks).attr('id'), todoEntry)}`))

})

// present time blocks for 9am - 5pm

// may need to set the id for the 9Am to just 9 - within the .each area below
// let slot = $(this); let hour = slot.data('id')

// put in a function to be able to reuse it - re-render them each refresh?

renderTimeBlocks()

// function that renders the timeblocks 
function renderTimeBlocks() {

    $('#timeBlocks').append(`
<div class="row 9" id="9">
<div class="col hour">
    09:00
</div>
<div class="col" id="todo" data-value="9">
<textarea id="todoEntry" data-value="9" name="todo9" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save" data-value="9"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 10" id="10">
<div class="col hour">
    10:00
</div>
<div class="col" id="todo" data-value="10">
<textarea id="todoEntry" data-value="10" name="todo10" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save" data-value="10"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 11" id="11">
<div class="col hour">
    11:00
</div>
<div class="col" id="todo" data-value="11">
<textarea id="todoEntry" data-value="11" name="todo11" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save" data-value="11"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 12" id="12">
<div class="col hour">
    12:00
</div>
<div class="col" id="todo" data-value="12">
<textarea id="todoEntry" data-value="12" name="todo12" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save" data-value="12"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 13" id="13">
<div class="col hour">
    13:00
</div>
<div class="col" id="todo" data-value="13">
<textarea id="todoEntry" data-value="13" name="todo13" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save" data-value="13"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 14" id="14">
<div class="col hour">
    14:00
</div>
<div class="col" id="todo" data-value="14">
<textarea id="todoEntry" data-value="14" name="todo14" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save" data-value="14"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 15" id="15">
<div class="col hour">
    15:00
</div>
<div class="col" id="todo" data-value="15">
<textarea id="todoEntry" data-value="15" name="todo15" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save" data-value="15"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 16" id="16">
<div class="col hour">
    16:00
</div>
<div class="col" id="todo" data-value="16">
<textarea id="todoEntry" data-value="16" name="todo16" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save" data-value="16"><i class="fas fa-save"></i></button>
</div>
</div>
<div class="row 17" id="17">
<div class="col hour">
    17:00
</div>
<div class="col" id="todo" data-value="17">
<textarea id="todoEntry" data-value="17" name="todo17" rows="2" cols="50" 
maxlength="58" placeholder="Todo here">
</textarea>
</div>
<div class="col saveBtn">
    <button class="save" data-value="17"><i class="fas fa-save"></i></button>
</div>
</div>`)
}


// set time block colours based on past, present, future 

// jquery colour switch - where 'this' relates to the todo row (not the numbered id list)

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

});

// save to localStorage on button click
// JQUERY style please!
$('.save').on('click', function (event) {

    // define each block ID

    let $blockId = $(this).parent().parent().attr('id');

    // grab key/val and save it
    let $todoInput = $('textarea[data-value~="' + event.target.parentElement.dataset.value + '"]').val();
    // console.log(event.target.dataset.value); // undefined 
    console.log($('textarea[data-value~="' + event.target.parentElement.dataset.value + '"]'))
    console.log($todoInput)
    console.log('the value saved was: ' + $todoInput)

    localStorage.setItem($blockId, $todoInput);

    // console.log('key stored:' + $($timeBlocks).attr('id') + ' & value stored: ' + todoEntry)
    console.log('key stored:' + $blockId + ' value stored:' + $todoInput)

    // alert: logs the key and value entered
    // alert(`todo was stored:  ${localStorage.getItem($blockId, $todoInput)}`)

})

// light dark - unfinished,
let $darkButtonEl = $('#light-dark-btn')

// light theme state
let isDark = false;

// Click event for light theme toggle
$darkButtonEl.on('click', function () {
    if (isDark) {
        $(this).find('i').toggleClass('fa-solid fa-toggle-off fa-solid fa-toggle-on');
        $('body').css({ 'background-color': '#fff', color: '#1a1a1a' });
        $('.jumbotron').css({ 'border-bottom': '10px solid black' });
        isDark = !isDark;
    } else {
        $(this).find('i').toggleClass('fa-solid fa-toggle-on fa-solid fa-toggle-off ');
        $('body').css({ 'background-color': '#1a1a1a', color: '#fff' });
        $('.jumbotron').css({ 'border-bottom': '9px solid white' });
        // presumably a child element 
        // $('col hour').css({ 'background-color': '#1a1a1a', color: '#fff'})
        isDark = !isDark;
    }
});





