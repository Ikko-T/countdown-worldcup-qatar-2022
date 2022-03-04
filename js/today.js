function setTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const date = now.getDate().toString().padStart(2, '0');
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = days[now.getDay()];
  const currentTime =
    'It is ' + hour + ':' + minute + ', ' + today + ', ' + month + '-' + date + '-' + year + ' in Japan';

  document.getElementById('current-time').textContent = currentTime;
}

setInterval(function () {
  setTime();
}, 1000);
