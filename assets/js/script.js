// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// const timeBlocks = document.querySelectorAll(".time-block");
// const saveBtn = $("button");

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
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

const myButtons = document.querySelectorAll("button");

myButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let textInput = $(this).siblings("textarea").val();
    let textDiv = $(this).parent().attr("id");

    const savedCalendarData = localStorage.setItem(textDiv, textInput);

    // console.log(textInput);
    // console.log(this);
  });
});

const timeBlocks = document.querySelectorAll("time-block");

// timeBlocks.forEach((block) => {
//   let blockColor =
//   const hourId = "#hour";

//   if (hourId < currentHour) {
//     blockColor.classList.remove("present", "future");
//     blockColor.classList.add("past");
//   } else if (hourId === currentHour) {
//     blockColor.classList.remove("past", "future");
//     blockColor.classList.add("present");
//   } else {
//     blockColor.classList.remove("past", "present");
//     blockColor.classList.add("future");
//   }
// });

// for (let i = 9; i <= 17; i++) {
//   const timeBlockId = `hour-${i}`;
//   const savedCalendarData = localStorage.getItem(textDiv, textInput);
//   if (savedCalendarData) {
//     const block = document.querySelector(`#${hourId} + .time-block`);
//     d.value = savedUserInput;
//   }
// }
