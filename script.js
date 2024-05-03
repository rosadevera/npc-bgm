function updateDateTime() {
    let now = new Date();
    let dateDiv = document.querySelector('.date');
    let timeDiv = document.querySelector('.time');

    // Update date
    let dateString = (now.getMonth() + 1).toString().padStart(2, '0') + now.getDate().toString().padStart(2, '0');
    dateDiv.textContent = dateString;

    // Update time
    let timeString = now.getHours().toString().padStart(2, '0') + now.getMinutes().toString().padStart(2, '0') ;
    timeDiv.textContent = timeString;
}

updateDateTime();

setInterval(updateDateTime, 1000);



// Get the current hour
let hour = new Date().getHours();

// Determine which audio file to play based on the time
let audioElement = document.getElementById('audio');
if (hour >= 6 && hour < 12) {
    // Play morning audio
    audioElement.src = './audio/00/0.mp3';
} else if (hour >= 12 && hour < 18) {
    // Play afternoon audio
    audioElement.src = './audio/00/0.mp3';
} else if (hour >= 18 && hour < 24) {
    // Play evening audio
    audioElement.src = './audio/00/0.mp3';
} else {
    // Play night audio
    audioElement.src = './audio/00/0.mp3';
}

// Play the audio
audioElement.play();