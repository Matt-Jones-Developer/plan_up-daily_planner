// daily planner js

// set the day and display it at the top of the page
let $day = $('#currentDay');
$day.text('Today is ' + moment().format('dddd'))