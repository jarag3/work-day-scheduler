// display today's date from jquery/moment.js tools
var todayDate = moment().format('dddd, MMM Do YYYY - hh:mm:ss a');
$("#currentDay").html(todayDate);

// saveBtn click event listener
// $( document ).ready(function() {
//     console.log( "ready!" );
// });
// backround color depending on current time
$(".time-block").each(function() {
    var currentTime = moment().hours();
    console.log($(this)
        .children()[0].textContent
        .split(" ")[0]
    );

    var timeSlot = $(this)
    .children()[0].textContent
    .split(" ")[0];

    console.log(currentTime)

    if(currentTime > timeSlot) {
        $(this).addClass("past");

    } else if (currentTime == timeSlot) {
        $(this).addClass("present");
    } else {
        $(this).addClass("future");
    }
});


