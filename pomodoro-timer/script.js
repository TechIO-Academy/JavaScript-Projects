let isRunning = false;
let isWorkTime = true;
let workDuration = 25 * 60; // 25 minutes by default
let breakDuration = 5 * 60; // 5 minutes by default
let timerInterval;
let timeLeft;

const timerDisplay = document.getElementById('timer-display');
const workTimeInput = document.getElementById('work-time');
const breakTimeInput = document.getElementById('break-time');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

workTimeInput.addEventListener('change', function() {
    if (!isRunning) {
        workDuration = this.value * 60;
        updateTimerDisplay(workDuration);
    }
});

breakTimeInput.addEventListener('change', function() {
    if (!isRunning) {
        breakDuration = this.value * 60;
    }
});

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timeLeft = isWorkTime ? workDuration : breakDuration;
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay(timeLeft);
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                alert(isWorkTime ? 'Time for a break!' : 'Break over, back to work!');
                isWorkTime = !isWorkTime;
                resetTimer();
                startTimer();
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    timeLeft = isWorkTime ? workDuration : breakDuration;
    updateTimerDisplay(timeLeft);
}

function updateTimerDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timerDisplay.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Initialize with default values
updateTimerDisplay(workDuration);

