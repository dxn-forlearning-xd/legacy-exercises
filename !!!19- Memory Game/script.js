const moves = document.getElementById('moves-count');
const timeValue = document.getElementById('time');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const gameContainer = document.querySelector('.game-container');
const result = document.getElementById('result');
const controls = document.querySelector('.controls-container');

let cards;
let interval;
let firstCard = false;
let secondCard = false;

const items = [
  {
    name: 'bee',
    image:
      'https://media.istockphoto.com/id/1414774612/vector/bee-character.jpg?s=612x612&w=0&k=20&c=YBLQKadPoBfsSGGLBvkAt_3LqEytdHH3DVEE7dJUxqw=',
  },
  {
    name: 'crocodile',
    image:
      'https://img.freepik.com/free-vector/cute-crocodile-waving-hand-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated_138676-6015.jpg',
  },
  {
    name: 'macaw',
    image:
      'https://static.vecteezy.com/system/resources/previews/047/595/913/non_2x/illustration-of-cartoon-macaw-bird-flying-vector.jpg',
  },
  {
    name: 'tiger',
    image:
      'https://as1.ftcdn.net/v2/jpg/10/45/83/26/1000_F_1045832604_gXu28chFjsNO22uqfzhRRNBz3KrDk3zG.jpg',
  },
  {
    name: 'mokney',
    image: `https://i.pinimg.com/736x/36/27/a0/3627a0badea846944803300919e45776.jpg`,
  },
  {
    name: 'chameleon',
    image: `https://static.vecteezy.com/system/resources/previews/013/431/425/non_2x/cute-chameleon-cartoon-character-logo-design-flat-design-style-vector.jpg`,
  },
  {
    name: 'piranha',
    image: `https://ih1.redbubble.net/image.5161232182.8316/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg`,
  },
  {
    name: 'anaconda',
    image: `https://ih1.redbubble.net/image.5665499053.3464/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg`,
  },
  {
    name: 'sloth',
    image: `https://static.vecteezy.com/system/resources/previews/007/813/346/non_2x/cute-sloth-waving-hand-cartoon-icon-illustration-animal-icon-concept-isolated-premium-vector.jpg`,
  },
  {
    name: 'cockatoo',
    image: `https://c8.alamy.com/zooms/9/5a935fcb886345e491edce985ac1f77e/2h5gyeb.jpg`,
  },
  {
    name: 'toucan',
    image: `https://media.istockphoto.com/id/1296717150/vector/cartoon-toucan-on-a-white-background-flat-cartoon-illustration-for-kids.jpg?s=612x612&w=0&k=20&c=UtTyILKVT33Z4KGyz9z7J8QD7cDlKm0x0qqFo7lsmxc=`,
  },
];

let seconds = 0,
  minutes = 0;

let movesCount = 0,
  winCount = 0;

const timeGenerator = () => {
  seconds += 1;
  if (seconds >= 60) {
    minutes += 1;
    seconds = 0;
  }
};

let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
timeValue.innerHTML = `<span>Time:</span>${minutesValue}:${secondsValue}`;

const movesCounter = () => {
  movesCount += 1;
  moves.innerHTML = `<span>Moves:</span>${movesCount}`;
};

const generateRandom = (size = 4) => {
  let tempArray = [...items];
  let cardValues = [];
  size = (size * size) / 2;
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * tempArray.length);
    cardValues.push(tempArray[randomIndex]);
    tempArray.splice(randomIndex, 1);
  }
  return cardValues;
};

const matrixGenerator = (cardValue, size = 4) => {
  gameContainer.innerHTML = '';
  cardValues = [...cardValue, ...cardValues];
  cardValues.sort(() => Math.random() - 0.5);
  for (let i = 0; i < size * size; i++) {
    gameContainer.innerHTML += `
    <div class='card-container' data-card-value='${cardValues[i].name}'>
    <div class='card-before'>?</div>
    <div class='card-after'><img src='${cardValues[i].image}'
    class='image'/></div>
    </div>
    `;
  }
};

const initializer = () => {
  result.innerText = '';
  winCount = 0;
  let cardValues = generateRandom();
  matrixGenerator(cardValues);
};
