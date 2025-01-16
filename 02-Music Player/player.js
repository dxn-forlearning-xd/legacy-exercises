const playBtn = document.querySelector('.play-btn');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const songName = document.querySelector('.song-name');
const singerName = document.querySelector('.singer-name');
const songList = document.querySelectorAll('.list .song-list');

const songs = [
  {
    name: 'Song name A',
    singer: 'Singer A',
    src: 'A.mp3',
  },
  {
    name: 'Song name B',
    singer: 'Singer B',
    src: 'B.mp3',
  },
  {
    name: 'Song name C',
    singer: 'Singer C',
    src: 'C.mp3',
  },
  {
    name: 'Song name D',
    singer: 'Singer D',
    src: 'D.mp3',
  },
];

let currentIndex = null;
let audio = null;
let isPlaying = false;

function init() {
  songList.forEach((item, index) => {
    item.addEventListener('click', () => playSong(index));
  });

  playBtn.addEventListener('click', () => {
    if (!audio) {
      playSong(2);
    } else {
      togglePlayPause();
    }
  });
  progressBar.addEventListener('click', (event) => {
    const progressBarWidth = progressBar.clientWidth;
    const clickPosition = event.offsetX;
    const newTime = (clickPosition / progressBarWidth) * audio.duration;
    audio.currentTime = newTime;
  });
}

function togglePlayPause() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.play();
    isPlaying = true;
  }
}

function playSong(index) {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }

  currentIndex = index;

  songName.textContent = songs[currentIndex].name;

  audio = new Audio(songs[currentIndex].src);
  audio.play();
  isPlaying = true;
  audio.addEventListener('timeupdate', updateProgress);
}
function updateProgress() {
  const progressPercent = (audio.currentTime / audio.duration) * 100;
  progress.style.width = progressPercent + '%';
}
init();
