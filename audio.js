window.addEventListener("DOMContentLoaded", event => {
  let audio = document.querySelector("audio");
  let ja = document.getElementById("janj");
  audio.volume = 1.0;
  ja.addEventListener("click", () => {
    ((Math.floor(Math.random() * 4)) == 3) ? audio.setAttribute("src", "ship.mp3") : audio.setAttribute("src", "moon.mp3");
    audio.paused ? audio.play() : audio.pause();
  });
  audio.play();
});
