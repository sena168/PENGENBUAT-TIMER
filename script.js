// --- Get Elements from the HTML ---
const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

// Preset buttons
const btn15min = document.getElementById('btn15min');
const btn1hour = document.getElementById('btn1hour');
const btn1min = document.getElementById('btn1min');
const btn10sec = document.getElementById('btn10sec');

// --- State Variables ---
let timerInterval = null;
let totalSeconds = 15 * 60; // Default time
let originalSeconds = 15 * 60;
let isRunning = false;

// --- Event Listeners to connect buttons to functions ---
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

btn15min.addEventListener('click', () => setTime(15 * 60));
btn1hour.addEventListener('click', () => setTime(60 * 60));
btn1min.addEventListener('click', () => setTime(60));
btn10sec.addEventListener('click', () => setTime(10));

// --- Core Functions ---

/**
 * Updates the timer display with the correctly formatted time (MM:SS)
 */
function updateDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;

  timerDisplay.textContent = formattedTime;
  document.title = `${formattedTime} - Timer`;
}

/**
 * Sets a new time for the timer.
 * @param {number} seconds - The total seconds for the new timer.
 */
function setTime(seconds) {
  pauseTimer();
  totalSeconds = seconds;
  originalSeconds = seconds;
  updateDisplay();
}

/**
 * Starts the countdown.
 */
function startTimer() {
  if (isRunning || totalSeconds <= 0) {
    return; // Don't do anything if it's already running or time is up
  }

  isRunning = true;

  timerInterval = setInterval(() => {
    totalSeconds--;
    updateDisplay();

    if (totalSeconds <= 0) {
      pauseTimer();
      alert("Time's up!");
      document.title = "Time's Up!";
    }
  }, 1000);
}

/**
 * Pauses the timer by clearing the interval.
 */
function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

/**
 * Resets the timer to its last set value.
 */
function resetTimer() {
  pauseTimer();
  totalSeconds = originalSeconds;
  updateDisplay();
}

// Initialize display on page load
updateDisplay();
