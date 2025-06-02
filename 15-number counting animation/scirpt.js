let valueDisplays = document.querySelectorAll('.num');
let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
  let startvalue = 0;
  let endValue = parseInt(valueDisplay.getAttribute('data-val'));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startvalue += 1;
    valueDisplay.textContent = startvalue;
    if (startvalue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
