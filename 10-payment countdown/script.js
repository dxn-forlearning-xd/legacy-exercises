const pay = document.querySelector('button');

pay.addEventListener('click', function () {
  let isConfirm = window.confirm('Are you sure to pay?');
  if (isConfirm) {
    location.href = 'payment.html';
  }
});
