// display today's date from jquery/moment.js tools
var todayDate = moment().format('dddd, MMM Do YYYY - hh:mm:ss a');
$("#currentDay").html(todayDate);

// saveBtn click event listener
// $( document ).ready(function() {
//     console.log( "ready!" );
// });
// backround color depending on current time
$(".time-block").each(function() {
    // get current number of hours
    var currentTime = moment().hours();
  
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

// saveBtn save tasks when clicked
$(".saveBtn").on("click", function() {
    var tasks = $(this).siblings(".description").val();

    var time = $(this).parent().attr("id")
    
    localStorage.setItem(time, tasks);
});


// saving data into local storage

