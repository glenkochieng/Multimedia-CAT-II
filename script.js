const video = document.getElementById('wildlifeVideo');
const videoContainer = document.getElementById('videoContainer');
const toggleBtn = document.getElementById('toggleBtn');

video.addEventListener('play', () => {
    toggleBtn.textContent = "Hide Video Layer";
});

video.addEventListener('pause', () => {
    toggleBtn.textContent = "Play Video";
});

toggleBtn.addEventListener('click', () => {
    if (video.paused) {
        videoContainer.style.display = "block";
        video.play();
    } else {
        video.pause();
        videoContainer.style.display = "none";
        toggleBtn.textContent = "Play Video";
    }
});
