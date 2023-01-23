// how can I change elements colours?

$('#timeBlocks').append(`
<div class="row 9" id="9AM">
<div class="col hour">
    9AM
</div>
<div class="col" id="todo" data-value="9">
    TODO
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
</div>`)

// define/locate the element
let $timeBlocks = $('.row')
console.log('these are timeblock rows:', $timeBlocks)

// access the data- ? only accesses element 1 - we need this for EACH ?
let $dataIndex = document.getElementById("todo").dataset["value"]
console.log('dataindex:', $dataIndex)

// can access them individually, if change the id to a separate ID - this doesn't help

// let $dataIndex1 = document.getElementById("todo1").dataset["value"];
// console.log('dataindex1:', $dataIndex1)

// let $dataIndex2 = document.getElementById("todo2").dataset["value"];
// console.log('dataindex2:', $dataIndex2)

// let $dataIndex3 = document.getElementById("todo3").dataset["value"];
// console.log('dataindex3:', $dataIndex3)


// change its colour 

// $($timeBlocks).addClass('past')
// $($timeBlocks).addClass('present')
// $($timeBlocks).addClass('future')

// OK,  so now we need a loop?

// define the hour 
// let $currentHour = moment().hour();
// let $currentHour = 8
// console.log('currentHour:', $currentHour)

// if  $timeBlocks < $currentHour then make it grey
// timeBlocks does not mean an index - its just the object that needs styling 

// if ($dataIndex < $currentHour) {
//     $($timeBlocks).removeClass('present')
//     $($timeBlocks).removeClass('future')
//     $($timeBlocks).addClass('past')
// }

// else if ($dataIndex > $currentHour) {
//     $($timeBlocks).removeClass('past')
//     $($timeBlocks).removeClass('present')
//     $($timeBlocks).addClass('future')
// }

// else {
//     $($timeBlocks).removeClass('past')
//     $($timeBlocks).removeClass('future')
//     $($timeBlocks).addClass('present')
// }

// this is working - now just need to say for EACH time slot...


let $currentHour = 10
console.log('currentHour:', $currentHour)

// let array = []

// for (let i = 9; i < 12; i++) {
//     array.push(i);

//     // console.log(array)
//     // console.log($dataIndex) // always going to be 9 - the first value only 

//     $('.row').each(function ($dataIndex, $timeBlocks) {

//         if ($dataIndex < $currentHour) {
//             $($timeBlocks).removeClass('present')
//             $($timeBlocks).removeClass('future')
//             $($timeBlocks).addClass('past')
//         }

//         else if ($dataIndex > $currentHour) {
//             $($timeBlocks).removeClass('past')
//             $($timeBlocks).removeClass('present')
//             $($timeBlocks).addClass('future')
//         }

//         else {
//             $($timeBlocks).removeClass('past')
//             $($timeBlocks).removeClass('future')
//             $($timeBlocks).addClass('present')
//         }
//     });


// }

// JQUERY VERSION? BINGO!

// const dataValues = $('div#todo')

$('div#todo').each(function () {

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


// JQUERY ACCESS
// accesses all data-values? NO.  Only the first
console.log($('#todo').data().value) 

// access the first div#todo.col - this is supposed to access ALL?
console.log($('#todo'))

console.log($('div#todo')) // accesses all 3 cols 


// use querySelectorAll ? We are now grabbing each of the index values from each todo col

// this should show 9AM as gray, 10AM as red and 11AM as green??

// const dataValues = document.querySelectorAll("#todo"); 

// must be JQUERY VERSION
const dataValues = $('div#todo')

// how to access the data-values ONLY?
// const dataValues = $('div#todo').data().value;

for (let i = 0; i < dataValues.length; i++) {
    // this returns divs that CONTAIN data-values only (div#todo)
    console.log('dataValues: ', dataValues[i]);

    // conditionals to check if the index < > === currentHour
    if (dataValues < $currentHour) {
        // $($timeBlocks).removeClass('present')
        // $($timeBlocks).removeClass('future')
        $($timeBlocks).addClass('past')
    }

    else if (dataValues > $currentHour) {
        $($timeBlocks).removeClass('past')
        $($timeBlocks).removeClass('present')
        $($timeBlocks).addClass('future')
    }

    else {
        $($timeBlocks).removeClass('past')
        // $($timeBlocks).removeClass('future')
        $($timeBlocks).addClass('present')
    }
}


