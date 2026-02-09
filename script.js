let word = "kremówka ";
const repetitions = 4;

word = word.split("").reverse().join("");
const heart = document.getElementById('colin');
const letters = word.repeat(repetitions).split('');
const totalLetters = letters.length;

letters.forEach((letter, index) => {
  const letterDiv = document.createElement('div');
  letterDiv.className = 'letter';
  letterDiv.textContent = letter;

  letterDiv.style.setProperty('--delay', index / totalLetters);
  heart.appendChild(letterDiv);
});
