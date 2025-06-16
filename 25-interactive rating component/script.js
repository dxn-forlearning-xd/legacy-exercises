let ratingBtns = document.querySelectorAll('.rating-btn');
let subBtn = document.querySelector('.submit-btn');
let ratingCard = document.querySelector('.rating-card');
let outcomeCard = document.querySelector('.outcome-card');
let outcome = document.querySelector('.outcome');
let selectedRating = null;

ratingBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    ratingBtns.forEach((b) => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedRating = btn.textContent;
  });
});

subBtn.addEventListener('click', () => {
  ratingCard.classList.add('hide');
  outcomeCard.classList.remove('hide');
  outcome.innerHTML = `You selected ${selectedRating} out of 5`;
});
