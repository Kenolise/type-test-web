window.addEventListener('load', init);

// Globals

// Available Levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};

// To change level
var myFunction;


const currentLevel = levels.medium;

let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'language',
    'programmer',
    'software',
    'computer program',
    'machine code',
    'computer',
    'programming',
    'computing',
    'techie',
    'perl',
    'hardware',
    'fortran',
    'pc',
    'processor',
    'cpu',
    'algorithm',
    'program',
    'engineering',
    'source code',
    'development',
    'software',
    'compiler',
    'logic',
    'object',
    'text editor',
    'programing',
    'executable',
    'minicomputer',
    'microcomputer',
    'motherboard',
    'microprocessor',
    'logic',
    'computer memory',
    'debugging',
    'bios',
    'environment',
    'processor',
    'supercomputer',
    'compute',
    'pda',
    'link',
    'library',
    'laptop',
    'cybernetic',
    'mainframe',
    'telnet',
    'vm',
    'computable',
    'art',
    'computational',
    'computerology',
    'language',
    'computerologist',
    'computerist',
    'computernik',
    'noncomputer',
    'nanocomputer',
    'teletype',
    'craft',
    'computerdom',
    'puter',
    'computeritis',
    'precomputer',
    'compy',
    'anticomputer',
    'neurocomputer',
    'login',
    'hostmaster',
    'ibook',
    'peripheral',
    'machinima',
    'computerlike',
    'antivirus',
    'monitor',
    'mac',
    'computerism',
    'gnome',
    'digital',
    'intranet',
    'computerbased',
    'computercide',
    'predictor',
    'softmodem',
    'telecomputer',
    'telecommuter',
    'cybersavvy',
    'cybersystem',
    'multinetworked',
    'multinetwork',
    'cyberjunkie',
    'screensaver',
    'cyber',
    'cybersociology',
    'computerize',
    'cyberterrorism',
    'cyberintrusion',
    'automation',
    'cybernetwork',
    'cyberinteraction',
    'kludge',
    'tekki',
    'computation',
    'interactive',
    'imac',
    'macintosh',
    'cyberjargon',
    'appender',
    'computers',
    'linguistics',
    'cybertechnology',
    'calculator',
    'internet',
    'misclick',
    'networks',
    'network',
    'programmable',
    'netzine',
    'electronic',
    'cyberpsychology',
    'technology',
    'computer',
    'web',
    'online',
    'multimedia',
    'downloader',
    'thought',
    'compunications',
    'audio',
    'clickless',
    'wardialer',
    'applications',
    'systems',
    'uploader',
    'pseudocode',
    'arithmetic',
    'cobol',
    'cyberphilosophy',
    'pessimize',
    'cybersuicide',
    'algebra',
    'user',
    'mouseclick',
    'uses',
    'fileserver',
    'geometry',
    'cyberfuture',
    'wireless',
    'video'
];

// Initialize Game
function init() {
  // Show number of seconds in UI
  seconds.innerHTML = currentLevel;
  // Load word from array
  showWord(words);
  // Start matching on word input
  wordInput.addEventListener('input', startMatch);
  // Call countdown every second
  setInterval(countdown, 1000);
  // Check game status
  setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
  if (matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  // If score is -1, display 0
  if (score === -1) {
    scoreDisplay.innerHTML = 0;
  } else {
    scoreDisplay.innerHTML = score;
  }
}

// Match currentWord to wordInput
function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct🤗!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

// Pick & show random word
function showWord(words) {
  // Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  // Output random word
  currentWord.innerHTML = words[randIndex];
}

// Countdown timer
function countdown() {
  // Make sure time is not run out
  if (time > 0) {
    // Decrement
    time--;
  } else if (time === 0) {
    // Game is over
    isPlaying = false;
  }
  // Show time
  timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
  if (!isPlaying && time === 0) {
    message.innerHTML = 'Game Over😮!!!';
    score = -1;
  }
}