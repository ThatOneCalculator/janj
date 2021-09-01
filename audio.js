function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
window.addEventListener("DOMContentLoaded", event => {
  let audio = document.querySelector("audio");
  let ja = document.getElementById("janj");
  let num = 0;
  ja.addEventListener("click", () => {
    num = getRandomInt(4);
    if (num == 3) {
      audio.setAttribute("src", "https://cdn.discordapp.com/attachments/810799100940255260/879617801185280020/janja_on_a_ship_HD_720p_1.mp3");
    }
    else {
      audio.setAttribute("src", "https://cdn.discordapp.com/attachments/810799100940255260/879598735011770439/yt1s.com_-_Fly_me_to_the_moonEvangelion.mp3");
    }
    if (audio.paused) {
      audio.volume = 1.0;
      audio.play();
    }
    else {
      audio.pause();
    }
  });
  audio.volume = 1.0;
  audio.play();
});
