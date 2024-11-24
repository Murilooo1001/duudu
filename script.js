document.addEventListener("DOMContentLoaded", function() {
    const audioElement = document.getElementById("audio-element");
    const playButton = document.querySelector(".play-button");
    const progressFill = document.querySelector(".progress-fill");

    progressFill.style.width = "0%";

    playButton.addEventListener("click", () => {
        if (audioElement.paused || audioElement.ended) {
            audioElement.play();
            playButton.textContent = "⏸";
        } else {
            audioElement.pause();
            playButton.textContent = "▶";
        }
    });

    audioElement.addEventListener("timeupdate", () => {
        const progressPercentage = (audioElement.currentTime / audioElement.duration) * 100;
        progressFill.style.width = progressPercentage + "%";
    });

    audioElement.addEventListener("ended", () => {
        playButton.textContent = "▶";
        progressFill.style.width = "0%";
    });
});