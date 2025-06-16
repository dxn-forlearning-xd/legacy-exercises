let shareBtn = document.querySelector('.share-btn');
let sharePopup = document.querySelector('.share-popup');

shareBtn.addEventListener('click', () => {
  sharePopup.classList.toggle('hidden');
});
