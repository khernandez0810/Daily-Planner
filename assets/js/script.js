// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
var todayDate = $('#currentDay');
var saveBtn = $('.saveBtn');
var hour9 = $('hour-9');
var hour10 = $('hour-10');
var hour11 = $('hour-11');
var hour12 = $('hour-12');
var hour13 = $('hour-13');
var hour14 = $('hour-14');
var hour15 = $('hour-15');
var hour16 = $('hour-16');
var hour17 = $('hour-17');
var hour18 = $('hour-18');
var now = dayjs().hour();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtn.on('click', function(){
    console.log(this);
    var task = $(this).siblings(".description").val();
    var time = $(this).parent().attr('id');
   

    localStorage.setItem(task, time)
  });


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
 $('.time-block').each(function(){
var taskTime = $(this).attr('id').split("-")[1]

if (now == taskTime){
  $(this).addClass("present")
  $(this).removeClass("future")
  $(this).removeClass("past");
} else if (now > taskTime){
  $(this).addClass("past")
  $(this).removeClass("present")
  $(this).removeClass("future");
} else if (now < taskTime){
  $(this).addClass("future")
  $(this).removeClass("past")
  $(this).removeClass("present");

}



 });
  
  


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
$("#hour-09 .time-block").val(localStorage.getItem("09"));

  // Add code to display the current date in the header of the page.
  function displayTime(){
    var currentDate = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a')
  todayDate.text(currentDate);
  };
  
  setInterval(displayTime, 1000);
});
