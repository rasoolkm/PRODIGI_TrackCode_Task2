// Get the display element
var display = document.querySelector(".display");

// Get the buttons elements
var start = document.querySelector(".start");
var stop = document.querySelector(".stop");
var reset = document.querySelector(".reset");

// Declare variables for the stopwatch
var hours = 0;
var minutes = 0;
var seconds = 0;
var timer = null;

// Define a function to format the time
function formatTime() {
  // Add leading zeros if needed
  var hoursText = hours < 10 ? "0" + hours : hours;
  var minutesText = minutes < 10 ? "0" + minutes : minutes;
  var secondsText = seconds < 10 ? "0" + seconds : seconds;

  // Return the formatted time
  return hoursText + ":" + minutesText + ":" + secondsText;
}

// Define a function to update the display
function updateDisplay() {
  // Set the display text to the formatted time
  display.textContent = formatTime();
}

// Define a function to increment the time
function incrementTime() {
  // Increment the seconds
  seconds++;

  // If the seconds reach 60, reset them and increment the minutes
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  // If the minutes reach 60, reset them and increment the hours
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  // Update the display
  updateDisplay();
}

// Define a function to start the stopwatch
function startStopwatch() {
  // If the timer is not running, start it
  if (timer === null) {
    timer = setInterval(incrementTime, 1000);
  }
}

// Define a function to stop the stopwatch
function stopStopwatch() {
  // If the timer is running, stop it
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
}

// Define a function to reset the stopwatch
function resetStopwatch() {
  // Stop the stopwatch
  stopStopwatch();

  // Reset the time variables
  hours = 0;
  minutes = 0;
  seconds = 0;

  // Update the display
  updateDisplay();
}

// Add event listeners to the buttons
start.addEventListener("click", startStopwatch);
stop.addEventListener("click", stopStopwatch);
reset.addEventListener("click", resetStopwatch);
