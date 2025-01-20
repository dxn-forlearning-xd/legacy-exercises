document.getElementById('startBtn').addEventListener('click', function () {
  const eventName = document.getElementById('eventName').value;
  const eventDate = document.getElementById('eventDate').value;
  const eventTime = document.getElementById('eventTime').value;

  document.getElementById('nameError').style.display = 'none';
  document.getElementById('dateError').style.display = 'none';

  if (!eventName) {
    document.getElementById('nameError').style.display = 'block';
    return;
  }
  if (!eventDate) {
    document.getElementById('dateError').style.display = 'block';
    return;
  }

  const eventDateTimeString = eventDate + 'T' + (eventTime || '00:00');
  const eventDateTime = new Date(eventDateTimeString);

  if (isNaN(eventDateTime.getTime())) {
    document.getElementById('dateError').style.display = 'block';
    return;
  }

  document.querySelector('h1').style.display = 'none';
  document
    .querySelectorAll('div')
    .forEach((div) => (div.style.display = 'none'));
  document.getElementById('startBtn').style.display = 'none';
  document.getElementById('countdownDisplay').style.display = 'block';

  startCountdown(eventDateTime);
});

function startCountdown(eventDateTime) {
  const countdownElement = document.getElementById('countdown');

  const interval = setInterval(function () {
    const now = new Date();
    const timeLeft = eventDateTime - now;

    if (timeLeft <= 0) {
      clearInterval(interval);
      countdownElement.textContent = 'Remind';
    } else {
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      countdownElement.textContent = `${days} Days ${hours} hrs ${minutes} mins ${seconds} seconds`;
    }
  }, 1000);
}
