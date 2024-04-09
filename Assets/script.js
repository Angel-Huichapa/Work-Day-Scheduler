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
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
