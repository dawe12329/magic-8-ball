const newAnswer = document.getElementById('answer');
const magicBall = document.querySelector('.ball');
const ballImage = document.getElementById('8ball');

function shakeBall() {
  ballImage.classList.add('shake-animation');
  setTimeout(() => ballImage.classList.remove('shake-animation'), 2000);
}

function generateAnswer() {
  if (Math.random() <= 0.3) {
    newAnswer.textContent = 'Time will tell';
  } else if (Math.random() > 0.31 && Math.random() <= 0.69) {
    newAnswer.textContent = 'Absolutely!';
  } else {
    newAnswer.textContent = 'In your dreams';
  }

  function getUserInput() {
    prompt('Ask a YES/NO Question');
  }
  getUserInput();
  changeImage();
}

function changeImage() {
  ballImage.src =
    'https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png';
}

const questionButton = document.getElementById('questionButton');
questionButton.addEventListener('click', shakeBall);
questionButton.addEventListener('click', generateAnswer);
