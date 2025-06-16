let items = document.querySelectorAll('.faq-item');
let questionRows = document.querySelectorAll('.question-row');

questionRows.forEach((row) => {
  row.addEventListener('click', () => {
    let item = row.closest('.faq-item');
    let answer = item.querySelector('.answer');

    let isVisible = !answer.classList.contains('hide');
    document.querySelectorAll('.answer').forEach((ans) => {
      ans.classList.add('hide');
    });
    if (!isVisible) {
      answer.classList.remove('hide');
    }
    let iconPlus = row.querySelector('.icon-plus');
    let iconMinus = row.querySelector('.icon-minus');

    iconPlus.classList.remove('hide');
    iconMinus.classList.add('hide');

    if (!isVisible) {
      answer.classList.remove('hide');

      iconPlus.classList.add('hide');
      iconMinus.classList.remove('hide');
    }
  });
});
