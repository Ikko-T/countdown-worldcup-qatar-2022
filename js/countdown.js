const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const worldCupStarts = '21 Nov 2022';

function countdown() {
  const currentDate = new Date();
  const worldCupStartDate = new Date(worldCupStarts);

  const totalSeconds = (worldCupStartDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 60 / 60 / 24);
  const hours = Math.floor(totalSeconds / 60 / 60) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.textContent = days;
  hoursEl.textContent = formatTime(hours);
  minutesEl.textContent = formatTime(minutes);
  secondsEl.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
