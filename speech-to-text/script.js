const startBtn = document.getElementById('start-btn');
const transcript = document.getElementById('transcript');

let recognition = new window.webkitSpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'en-US';
recognition.continuous = false; // Automatically stop when the user stops talking

let listening = false; // Flag to indicate if currently listening

recognition.onstart = () => {
    listening = true;
    startBtn.textContent = 'Listening...'; // Change button text to indicate listening
    startBtn.disabled = true; // Optional: disable the button to prevent multiple clicks
    transcript.textContent = 'Say something...'; // Placeholder text while listening
};

recognition.onend = () => {
    listening = false;
    startBtn.textContent = 'Start Listening'; // Reset button text
    startBtn.disabled = false; // Re-enable the button
    if (transcript.textContent === 'Say something...') {
        transcript.textContent = 'Nothing was heard. Please try again.'; // No speech was detected
    }
};

recognition.onresult = (event) => {
    const results = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    transcript.textContent = results ? results : 'Nothing was heard. Please try again.';
    if (event.results[0].isFinal) {
        transcript.textContent += '.';
    }
};

recognition.onerror = (event) => {
    console.error("Speech recognition error", event.error);
    transcript.textContent = 'Error in recognition: ' + event.error;
    listening = false;
    startBtn.textContent = 'Start Listening';
    startBtn.disabled = false;
};

startBtn.addEventListener('click', () => {
    if (!listening) { // Start recognition if not already listening
        recognition.start();
    }
});
