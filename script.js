// Get the audio element
let audioElement = document.getElementById('audio');

// Define the folder based on the current hour
let folder = getCurrentHourFolder();
playRandomAudio(folder);

// Function to get the folder corresponding to the current hour
function getCurrentHourFolder() {
    let hour = new Date().getHours();
    return hour.toString().padStart(2, '0');
}

// Function to play a random audio file within the folder
function playRandomAudio(folder) {
    // Generate a random number to select the audio file
    let randomIndex = Math.floor(Math.random() * 2); // Assuming there are 2 audio files per folder

    // Construct the path to the randomly selected audio file
    let audioPath = `./audio/${folder}/${randomIndex}.mp3`;

    // Set the source of the audio element
    audioElement.src = audioPath;

    // Play the audio
    audioElement.play();
}

// Function to update date and time
function updateDateTime() {
    let now = new Date();
    let dateDiv = document.querySelector('.date');
    let timeDiv = document.querySelector('.time');

    // Update date
    let dateString = (now.getMonth() + 1).toString().padStart(2, '0') + now.getDate().toString().padStart(2, '0');
    dateDiv.textContent = dateString;

    // Update time
    let hours = now.getHours();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0) as 12 AM
    let timeString = hours.toString().padStart(2, '0') + now.getMinutes().toString().padStart(2, '0') ;
    timeDiv.textContent = timeString;
}

updateDateTime();

// Call updateDateTime() every second
setInterval(updateDateTime, 1000);

// Continuously play random audio files within the hour folder
setInterval(function() {
    let folder = getCurrentHourFolder();
    playRandomAudio(folder);
}, 60000); // Repeat every minute
