const userInput = document.querySelector('#user-input');
const resultsDiv = document.querySelector('#results-div');
const checkBtn = document.querySelector('#check-btn');
const clearBtn = document.querySelector('#clear-btn');

const checkNum = number => {
  if (!number) {
    alert('Please provide a phone number');
  }

  const regEx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  resultsDiv.innerHTML += regEx.test(number) ?
  `<p class="correct-number">Valid US number: ${number}</p>` :
  `<p class="wrong-number">Invalid US number: ${number}</p>`
}

checkBtn.addEventListener('click', (event) => {
  event.preventDefault();
  checkNum(userInput.value);
  userInput.value = '';
});

clearBtn.addEventListener('click', (event) => {
  event.preventDefault();
  resultsDiv.textContent = '';
});

userInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    checkNum(userInput.value);
    userInput.value = '';
  }
})
