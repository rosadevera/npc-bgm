document.addEventListener('DOMContentLoaded', function() {
  // Get the audio element
  const audioElement = document.getElementById('audio');

  audioElement.volume = 0.4;

  // Function to define the folder based on the current hour
  function getCurrentHourFolder() {
    let hour = new Date().getHours();
    return hour.toString().padStart(2, '0');
  }

  // Function to play random audio files within the hour folder
  function playRandomAudio(folder) {
    // Generate a random number to select the audio file
    let randomIndex = Math.floor(Math.random() * 6); // Assuming there are 6 audio files per folder

    // Construct the path to the randomly selected audio file
    let audioPath = `./audio/${folder}/${randomIndex}.mp3`;

    // Log the filename
    console.log(`Playing: ${audioPath}`);

    // Set the source of the audio element
    audioElement.src = audioPath;

    // Play the audio
    audioElement.play();
  }

  // Listen for the 'ended' event on the audio element
  audioElement.addEventListener('ended', function() {
    // Play the next audio file after the current one ends
    let folder = getCurrentHourFolder();
    playRandomAudio(folder);
  });

  // Function to update date and time
  function updateDateTime() {
    let now = new Date();
    let monthDiv = document.querySelector('.month');
    let dateDiv = document.querySelector('.date');
    let hourDiv = document.querySelector('.hour');
    let minuteDiv = document.querySelector('.minute');
    let ampmDiv = document.querySelector('.ampm');

    // Update month
    let monthString = (now.getMonth() + 1).toString().padStart(2, '0');
    monthDiv.textContent = monthString;

    // Update date
    let dateString = now.getDate().toString().padStart(2, '0');
    dateDiv.textContent = dateString;

    // Update hour
    let hours = now.getHours();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // Handle midnight (0) as 12 AM
    let hourString = hours.toString().padStart(2, '0');
    hourDiv.textContent = hourString;

    // Update minute
    let minuteString = now.getMinutes().toString().padStart(2, '0');
    minuteDiv.textContent = minuteString;

    // Update AM/PM
    ampmDiv.textContent = ampm;

    // Update background gradient based on current hour
    setBackgroundGradient();
  }

  updateDateTime();

  // Call updateDateTime() every minute to update the time and background gradient
  setInterval(updateDateTime, 1000); // Every second 1000 milliseconds)

  // Function to set background gradient
function setBackgroundGradient() {
  let now = new Date();
  let hour = now.getHours();
  let gradientColors;
  let skyElement = document.querySelector('.sky');
  let currentGradient = skyElement.style.backgroundImage;

  if (hour >= 5 && hour < 6) {
    // Sunrise gradient
    gradientColors = "#4e6799 0%, #6096b3 50%, #e0c4af 100%";
    skyElement.style.filter = 'blur(2px) opacity(50%)';
  } else if (hour >= 7 && hour < 17) {
    // Morning/afternoon gradient
    gradientColors = "#4f9dff 0%, #a3ccff 50%, #5391dc 100%";
    document.querySelector('.rainbow').style.visibility = 'visible'; // Show rainbow
  } else if (hour >= 17 && hour < 19) {
    // Sunset gradient
    gradientColors = "#6096b3 0%, #4e6799 50%, #766fa1 100%";
    skyElement.style.filter = 'blur(2px) opacity(50%)';
  } else {
    // Night gradient
    gradientColors = "#131421 0%, #111724 50%, #070708 100%";
    skyElement.style.filter = 'blur(5px) opacity(10%)';
  }

  // Apply gradient colors with transition effect
  skyElement.style.transition = 'background-image 1s ease-in-out';
  let newGradient = `radial-gradient(${gradientColors})`;
  
  // Update the background gradient gradually
  let steps = 100; // Adjust the number of steps for smoother transition
  let currentStep = 0;
  let interval = setInterval(function() {
    currentStep++;
    let percentage = (currentStep / steps) * 100;
    let interpolatedGradient = `radial-gradient(${gradientColors}) ${percentage}% ${percentage}%`;
    document.body.style.backgroundImage = `${currentGradient}, ${interpolatedGradient}`;
    if (currentStep >= steps) {
      clearInterval(interval);
      document.body.style.backgroundImage = newGradient;
    }
  }, 50); // Adjust the interval for smoother transition
}

  setBackgroundGradient();

  // Get the input field
  const taskInput = document.querySelector('.task-input');
  const todosList = document.getElementById('todos');

  // Event listener for the input field
  taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText); // Add the task to the list
        taskInput.value = ''; // Clear the input field
      }
    }
  });

  // Function to add a new task
  function addTask(taskText) {
    // Create a new <li> element
    const li = document.createElement('li');

    // Create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create label for the task
    const label = document.createElement('label');
    label.textContent = taskText;

    // Append checkbox and label to the <li> element
    li.appendChild(checkbox);
    li.appendChild(label);

    // Add the new <li> element to the <ul>
    todosList.appendChild(li);

    // Add event listener to checkbox
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        // If checkbox is checked, add styles for completed task
        label.style.textDecoration = 'line-through';
        label.style.color = 'gray';
      } else {
        // If checkbox is unchecked, remove styles for completed task
        label.style.textDecoration = 'none';
        label.style.color = '#3a331f'; // Reset to default color
      }
    });
  }

  let expandBtn = document.getElementById("expand");
  let sidebar = document.getElementById("sidebar");

  expandBtn.addEventListener("click", function(event) {
    sidebar.classList.toggle("expanded");
  });

  // Fade out the landing section and start playing music when playButton is clicked
  const playButton = document.getElementById('playButton');
  playButton.addEventListener('click', function() {
    const landingSection = document.querySelector('.landing');
    // Fade out the landing section
    landingSection.style.transition = 'opacity 1s ease-in-out';
    landingSection.style.opacity = '0';

    // Once the fading animation is complete
    setTimeout(function() {
      // Hide the landing section
      landingSection.style.display = 'none';

      // Start playing the music
      let folder = getCurrentHourFolder();
      playRandomAudio(folder);
    }, 1000); // Adjust the timeout to match the duration of the fading animation
  });

  // Continue with your other event listeners and functions as before
});


document.addEventListener('DOMContentLoaded', function() {
  const questionButton = document.getElementById('questionButton');
  const aboutSection = document.getElementById('aboutSection');

  questionButton.addEventListener('click', function() {
      aboutSection.style.display = 'block';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  // Typewriter sound effect
  const typewriterSound = new Audio('./audio/dialogue.mp3');
  typewriterSound.preload = 'auto'; // Preload the audio file
  typewriterSound.load(); // Load the audio file

  typewriterSound.oncanplaythrough = function() {
    // The audio is loaded and ready to play
    console.log("Typewriter sound loaded and ready to play.");
  };

  const aboutSection = document.getElementById('aboutSection');
  const textElement = aboutSection.querySelector('p');
  const initialTextContent = 'This site is a live clock created by Rosa de Vera that syncs up to hourly tunes from various Animal Crossing games.';
  const newTextContent = "With a to-do list feature, I hope this site provides cozy bgm and ambience to study, work, or simply relax to!";
  let typingSpeed = 18; // Adjust typing speed here
  let typingTimeout; // Variable to hold the typing setTimeout
  let isInitialText = true;

  function typeWriter(textContent) {
    let i = 0;
  
    // Play typewriter sound at the beginning of typing
    typewriterSound.currentTime = 0; // Reset audio to start position
    typewriterSound.play();
  
    clearText(); // Ensure text is cleared before typing

  let index = 0;

  function type() {
    if (index < textContent.length) {
      textElement.innerHTML += textContent[index];
      index++;
      setTimeout(type, typingSpeed); // Call type() recursively after a delay
    }
  }

  type(); // Start the recursive typing process
}
  

  function clearText() {
    textElement.innerHTML = '';
  }

  const questionButton = document.getElementById('questionButton');
  questionButton.addEventListener('click', function() {
    aboutSection.style.display = 'block';
    isInitialText = true;
    clearTimeout(typingTimeout); // Clear any existing typing timeouts
    typeWriter(initialTextContent);
  });

  aboutSection.addEventListener('click', function() {
    if (isInitialText) {
      clearTimeout(typingTimeout); // Stop the typing animation
      typeWriter(newTextContent);
      isInitialText = false;
    } else {
      aboutSection.style.display = 'none';
      clearText();
      isInitialText = true;
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Function to type out text content
  function typeWriter(element, textContent, typingSpeed) {
    let i = 0;
    const typingInterval = setInterval(function() {
      if (i < textContent.length) {
        element.textContent += textContent.charAt(i);
        i++;
      } else {
        clearInterval(typingInterval); // Stop typing when all characters are typed out
      }
    }, typingSpeed);
  }

  // Get the title section and the <h1> element
  const titleSection = document.querySelector('.title');
  const headingElement = titleSection.querySelector('h1');
  const initialTextContent = headingElement.textContent; // Get the initial text content of the heading
  const typingSpeed = 100; // Adjust typing speed here

  // Set the initial height of the landing section
  titleSection.style.height = titleSection.offsetHeight + 'px';

  // Clear the existing text content of the heading
  headingElement.textContent = '';

  // Call the typeWriter function with the <h1> element, the initial text content, and the desired typing speed
  typeWriter(headingElement, initialTextContent, typingSpeed);
});
