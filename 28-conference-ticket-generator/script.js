const btn = document.querySelector('button');
const inputName = document.querySelector('input[name="fullname"]');
const inputEmail = document.querySelector('input[name="email"]');
const inputGithub = document.querySelector('input[name="github"]');
const errorName = document.querySelector('.error-name');
const errorEmail = document.querySelector('.error-email');
const errorGithub = document.querySelector('.error-github');

btn.addEventListener('click', () => {
  errorName.classList.add('hidden');
  errorEmail.classList.add('hidden');
  errorGithub.classList.add('hidden');
  if (inputName.value === '') {
    errorName.classList.remove('hidden');
  }
  if (inputEmail.value === '') {
    errorEmail.classList.remove('hidden');
  }
  if (inputGithub.value === '') {
    errorGithub.classList.remove('hidden');
  }
  if (
    inputName.value.trim() !== '' &&
    inputEmail.value.trim() !== '' &&
    inputGithub.value.trim() !== ''
  ) {
    const userData = {
      fullname: inputName.value.trim(),
      email: inputEmail.value.trim(),
      github: inputGithub.value.trim(),
    };

    const nameDisplay = document.querySelector('.form-result h1 span');
    const userNameDisplay = document.querySelector('.user-name');
    const userEmailDisplay = document.querySelector('.form-result h2 span');
    const userGithubDisplay = document.querySelector('.user-github');

    nameDisplay.textContent = userData.fullname;
    userNameDisplay.textContent = userData.fullname;
    userEmailDisplay.textContent = userData.email;
    userGithubDisplay.textContent = `@${userData.github}`;
    document.querySelector('.form-page').classList.add('hidden');
    document.querySelector('.form-result').classList.remove('hidden');
  }
});
