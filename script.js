// Select the HTML elements we need to interact with
const video = document.getElementById('wildlifeVideo');
const videoContainer = document.getElementById('videoContainer');
const toggleBtn = document.getElementById('toggleBtn');

// Keep button text in sync if the user uses the native video controls
video.addEventListener('play', () => {
    toggleBtn.textContent = "Hide Video Layer";
});

video.addEventListener('pause', () => {
    toggleBtn.textContent = "Play Video";
});

// Click interaction logic for the custom button
toggleBtn.addEventListener('click', () => {
    if (video.paused) {
        // If it's not playing already, bring the layout back and play it
        videoContainer.style.display = "block";
        video.play();
    } else {
        // If it is playing, pause the instance and hide the visual wrapper
        video.pause();
        videoContainer.style.display = "none";
        toggleBtn.textContent = "Play Video";
    }
});