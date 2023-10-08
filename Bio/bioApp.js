const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');

submitBtn.addEventListener('click', function () {
  const q1Answer = document.querySelector('input[name="q1"]:checked').value;
  const q2Answer = document.querySelector('input[name="q2"]:checked').value;
  const q3Answer = document.querySelector('input[name="q3"]:checked').value;
  const q4Answer = document.querySelector('input[name="q4"]:checked').value;
  const q5Answer = document.querySelector('input[name="q5"]:checked').value;
  const q6Answer = document.querySelector('input[name="q6"]:checked').value;
  const q7Answer = document.querySelector('input[name="q7"]:checked').value;
  const q8Answer = document.querySelector('input[name="q8"]:checked').value;
  const q9Answer = document.querySelector('input[name="q9"]:checked').value;
  const q10Answer = document.querySelector('input[name="q10"]:checked').value;
  let score = 0;

  if (q1Answer === 'd') {
    score++;
  }

  if (q2Answer === 'a') {
    score++;
  }

  if (q3Answer === 'd') {
    score++;
  }

  if (q4Answer === 'd') {
    score++;
  }

  if (q5Answer === 'c') {
    score++;
  }

  if (q6Answer === 'a') {
    score++;
  }

  if (q7Answer === 'c') {
    score++;
  }

  if (q8Answer === 'a') {
    score++;
  }

  if (q9Answer === 'b') {
    score++;
  }

  if (q10Answer === 'b') {
    score++;
  }

  resultDiv.textContent = 'Your score: ' + score + '/10';
});