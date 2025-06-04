let optionsButtons = document.querySelectorAll('.option-button');
let advancedOptionButton = document.querySelectorAll('.adv-option-button');
let fontName = document.getElementById('fontName');
let fontSizeRef = document.getElementById('fontSize');
let writingArea = document.getElementById('text-input');
let linkButton = document.getElementById('createLink');
let alignButtons = document.querySelectorAll('.align');
let spacingButtons = document.querySelectorAll('.spacing');
let formatButtons = document.querySelectorAll('.format');
let scriptButtons = document.querySelectorAll('.script');

let fontList = ['Arial', 'Verdana', 'Times New Roman'];

//Highlight Clicked Button
const Highlighter = (className, needsRemoval) => {
  className.forEach((button) => {
    button.addEventListener('click', () => {
      //needsRemoval = true means only one button should be highlight and other would be normal
      if (needsRemoval) {
        let alreadyActive = false;
        if (button.classList.contains('active')) {
          alreadyActive = true;
        }
        //Remove highlight from other buttons
        HighlighterRemover(className);
        if (!alreadyActive) {
          //highlight clicked button
          button.classList.add('active');
        }
      } else {
        //if other buttons can be highlighted
        button.classList.toggle('active');
      }
    });
  });
};

//Initial Settings
const initializer = () => {
  Highlighter(alignButtons, true);
  Highlighter(spacingButtons, true);
  Highlighter(formatButtons, false);
  Highlighter(scriptButtons, true);

  fontList.map((value) => {
    let option = document.createElement('option');
    option.value = value;
    option.innerHTML = value;
    fontName.appendChild(option);
  });
  for (let i = 1; i <= 7; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    fontSizeRef.appendChild(option);
  }
  fontSizeRef.value = 3;
};

const modifyText = (command, defaultUi, value) => {
  document.execCommand(command, defaultUi, value);
};

optionsButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modifyText(button.id, false, null);
  });
});

advancedOptionButton.forEach((button) => {
  button.addEventListener('change', () => {
    modifyText(button.id, false, button.value);
  });
});

linkButton.addEventListener('click', () => {
  let userLink = promot('Enter a URL');
  if (/http/i.test(userLink)) {
    modifyText(linkButton.id, false, userLink);
  } else {
    userLink = 'http://' + userLink;
    modifyText(linkButton.id, false, userLink);
  }
});

const HighlighterRemover = (className) => {
  className.forEach((button) => {
    button.classList.remove('active');
  });
};

window.onload = initializer;
