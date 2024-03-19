# Speech to Text Converter

## Introduction
The Speech to Text Converter is a web-based application that leverages the Web Speech API to transcribe spoken words into text in real-time. It's designed to provide users with a seamless experience of converting speech to editable text, enhancing accessibility and productivity.

## Features
- **Real-Time Transcription**: Converts speech to text as you speak.
- **Microphone Selection**: Utilizes the default system microphone, with the option for users to select their preferred microphone via system settings.
- **Interactive UI**: Features a user-friendly interface that indicates when the application is listening and provides feedback if no speech is detected.

## How to Use
1. **Open the Application**: Launch the application by opening the `index.html` file in a modern web browser that supports the Web Speech API (e.g., Google Chrome).
2. **Grant Microphone Access**: When prompted by your browser, allow the application to use your microphone.
3. **Start Speaking**: Click the "Start Listening" button and begin speaking. Your spoken words will appear as text on the screen.
4. **Stop Listening**: The application will automatically stop listening when you stop speaking. You can also manually stop by clicking the "Start Listening" button again, which will then reset to allow new input.

## Installation
No installation is necessary. To use the application:
1. Download or clone the application source code.
2. Open the `index.html` file in a compatible web browser.

## Customization
- **Microphone Settings**: The application uses the default microphone set in your system's or browser's settings. You can change the default microphone in your operating system's sound settings if you wish to use a different one.
- **Styling**: Modify the `styles.css` file to change the application's appearance to fit your preferences.
- **Functionality Enhancements**: Edit the `script.js` file to add new features or modify existing functionality. For example, you might add support for different languages or implement additional error handling.

## Browser Compatibility
This application uses the Web Speech API, which is supported in modern web browsers like Google Chrome. Please note that browser support may vary, and certain features might not be available in all browsers.

## Future Enhancements
- Add support for continuous listening mode.
- Implement functionality to select the input language and dialect.
- Provide options for exporting the transcribed text to a file.

## Credits
Developed by Tech IO Academy.

### License
This project is free to use.
