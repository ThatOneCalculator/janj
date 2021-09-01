window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("audio");
  const ja = document.getElementById("janj");
  audio.volume = 1.0;
  ja.addEventListener("click", () => {
    ((Math.floor(Math.random() * 4)) == 3) ? audio.setAttribute("src", "ship.mp3") : audio.setAttribute("src", "moon.mp3");
    audio.paused ? audio.play() : audio.pause();
  });
  audio.play();
});
