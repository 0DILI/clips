document.addEventListener("DOMContentLoaded", () => {
  const allVideos = document.querySelectorAll(".video");
  const allButtons = document.querySelectorAll(".play-btn");

  document.querySelectorAll(".play-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const parent = btn.closest(".group");
      const currentVideo = parent.querySelector(".video");

      // Pause all videos and show their play buttons
      allVideos.forEach((video) => {
        video.pause();
        video.currentTime = 0; // optional: reset to beginning
      });

      allButtons.forEach((button) => button.classList.remove("hidden"));

      // Play current video and hide its button
      currentVideo.play();
      btn.classList.add("hidden");
    });
  });
});
