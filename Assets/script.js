// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
    // Add a listener for click events on the save button
    $('.saveBtn').on('click', function() {
      // Use 'this' to reference the clicked button
      var saveButton = $(this);
      // Traverse the DOM to get the ID of the containing time-block
      var timeBlockId = saveButton.closest('.time-block').attr('id');
      // Use the time-block ID as a key to save the user input in local storage
      var userInput = saveButton.prev().val(); // Assuming user input is in the input field preceding the save button
      localStorage.setItem(timeBlockId, userInput);
  });
    // Add code to apply the past, present, or future class to each time block
    $('.time-block').each(function() {
      var timeBlock = $(this);
      var currentHour = parseInt(dayjs().format('H')); // Get current hour in 24-hour time
      var timeBlockHour = parseInt(timeBlock.attr('id').replace('hour-', ''));
      if (timeBlockHour < currentHour) {
          timeBlock.addClass('past');
      } else if (timeBlockHour === currentHour) {
          timeBlock.addClass('present');
      } else {
          timeBlock.addClass('future');
      }
  });
    // Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements
    $('.time-block textarea').each(function() {
      var timeBlockTextarea = $(this);
      var timeBlockId = timeBlockTextarea.closest('.time-block').attr('id');
      var savedUserInput = localStorage.getItem(timeBlockId);
      if (savedUserInput) {
          timeBlockTextarea.val(savedUserInput);
      }
  });
    // Add code to display the current date in the header of the page
    $('#currentDay').text(dayjs().format('dddd, MMMM D'));
});