let playButton = document.getElementsByClassName("play");
let blues = document.getElementById("blues");
let timeoutId;
let playstartTime = [10, 24, 30, 40, 62];
let playstartButtons = document.getElementById("playstartButtons");

for (let i = 0; i < playstartTime.length; i++) {
  let startTime = playstartTime[i];

  let playButton = document.createElement("button");
  playButton.innerHTML = `play at ${startTime}`;
  playButton.dataset.start = startTime;

  playButton.addEventListener("click", playButtonClicked);

  playstartButtons.appendChild(playButton);
  //   playButton[i].addEventListener("click", playButtonClicked);
}

function playButtonClicked(event) {
  let startTime = Number(event.target.dataset.start);
  console.log(startTime);
  blues.currentTime = startTime;
  blues.play();

  clearTimeout(timeoutId);

  timeoutId = setTimeout(function () {
    console.log("timeout call");
  }, 2000);
}

function stopAudio() {
  blues.pause();
}
