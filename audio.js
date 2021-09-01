window.addEventListener("DOMContentLoaded", event => {
  let audio = document.querySelector("audio");
  let ja = document.getElementById("janj");
  audio.volume = 1.0;
  ja.addEventListener("click", () => {
    ((Math.floor(Math.random() * 4)) == 3) ? audio.setAttribute("src", "https://cdn.discordapp.com/attachments/810799100940255260/879617801185280020/janja_on_a_ship_HD_720p_1.mp3") : audio.setAttribute("src", "https://cdn.discordapp.com/attachments/810799100940255260/879598735011770439/yt1s.com_-_Fly_me_to_the_moonEvangelion.mp3");
    audio.paused ? audio.play() : audio.pause();
  });
  audio.play();
});
