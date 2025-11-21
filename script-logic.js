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

// Custom timer input elements
const hoursInput = document.getElementById('hoursInput');
const minutesInput = document.getElementById('minutesInput');
const setCustomBtn = document.getElementById('setCustomBtn');

// --- State Variables ---
let timerInterval = null;
let totalSeconds = 15 * 60; // Default time
let originalSeconds = 15 * 60;
let isRunning = false;

// Add 10-minute button event listener (only if the button exists in HTML)
const btn10min = document.getElementById('btn10min');
if (btn10min) {
    btn10min.addEventListener('click', () => setTime(10 * 60));
}

// --- Event Listeners to connect buttons to functions ---
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

btn15min.addEventListener('click', () => setTime(15 * 60));
btn1hour.addEventListener('click', () => setTime(60 * 60));
btn1min.addEventListener('click', () => setTime(60));
btn10sec.addEventListener('click', () => setTime(10));

// Custom timer event listener
setCustomBtn.addEventListener('click', setCustomTime);

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
   * Sets a custom time from input fields.
   */
  function setCustomTime() {
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    
    // Validate inputs
    if (hours < 0 || minutes < 0 || minutes > 59) {
      alert("Please enter valid time values (hours ≥ 0, minutes 0-59)");
      return;
    }
    
    const newTotalSeconds = (hours * 3600) + (minutes * 60);
    
    if (newTotalSeconds === 0) {
      alert("Please enter a time greater than 0");
      return;
    }
    
    pauseTimer(); // Stop any running timer
      totalSeconds = newTotalSeconds;
      originalSeconds = newTotalSeconds;
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

// Theme menu functionality
const themeMenuBtn = document.getElementById('themeMenuBtn');
const themeDropdown = document.getElementById('themeDropdown');
const themeOptions = document.querySelectorAll('.theme-option');

// Toggle theme dropdown
themeMenuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  themeDropdown.classList.toggle('show');
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (!themeMenuBtn.contains(e.target) && !themeDropdown.contains(e.target)) {
    themeDropdown.classList.remove('show');
  }
});

// Apply theme when option is clicked
themeOptions.forEach((option) => {
  option.addEventListener('click', () => {
    const theme = option.getAttribute('data-theme');

    // Apply theme to root element
    document.documentElement.setAttribute('data-theme', theme);

    // Close dropdown after selection
    themeDropdown.classList.remove('show');

    // Save selected theme to localStorage
    localStorage.setItem('timer-theme', theme);

    // Update current theme indicators
    updateCurrentThemeIndicators(theme);
  });
});

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('timer-theme') || 'ocean-deep';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Initialize random title on page load
  updateRandomTitle();

  // Update current theme indicators after page loads
  updateCurrentThemeIndicators(savedTheme);
});

// Function to update current theme indicators
function updateCurrentThemeIndicators(currentTheme) {
  // Remove "(Current)" from all options
  themeOptions.forEach(option => {
    const originalText = option.textContent.replace(' (Current)', '');
    option.textContent = originalText;
  });

  // Add "(Current)" to the selected theme
  const currentThemeOption = document.querySelector(`.theme-option[data-theme="${currentTheme}"]`);
  if (currentThemeOption) {
    const originalText = currentThemeOption.textContent;
    currentThemeOption.textContent = `${originalText} (Current)`;
  }
}

// Use the external config if available, otherwise default to the array
const possibleTitles = (typeof randomTitleConfig !== 'undefined' && randomTitleConfig.possibleTitles)
  ? randomTitleConfig.possibleTitles
  : [
      'PENGENBUAT',
      'RASA-YANGPERNAHADA',
      'SEMENJAK-DULUKALA',
      'PENGENTAPI-BELUMKESAMPAIAN',
      'INILAH',
      'MUNGKIN',
      'ISENGISENG',
      'HASRATYANG-TERWUJUD',
      'ADALAH',
      'HANYALAH-SEBUAH',
      'INI',
      'BENARKAH?',
      'YUKS',
      'KALAU-INI',
      'TIMERNYA',
      'BEGITULAH',
    ];

// Function to get a random title
function getRandomTitle() {
  const randomIndex = Math.floor(Math.random() * possibleTitles.length);
  return possibleTitles[randomIndex];
}

// Function to update the title
function updateRandomTitle() {
  const dynamicTitleElement = document.getElementById('dynamic-title');
  if (dynamicTitleElement) {
    const currentTitleText = dynamicTitleElement.textContent;
    // Extract the second part of the title (e.g., "TIMER") to keep it
    const titleParts = currentTitleText.split(' ');
    const newFirstPart = getRandomTitle();
    dynamicTitleElement.textContent = `${newFirstPart} ${titleParts[1]}`;
  }
}

// Set interval to change title based on external config (default to 1 minute if not available)
const updateInterval = (typeof randomTitleConfig !== 'undefined' && randomTitleConfig.updateInterval)
  ? randomTitleConfig.updateInterval
  : 60000; // 1 minute in milliseconds
setInterval(updateRandomTitle, updateInterval);