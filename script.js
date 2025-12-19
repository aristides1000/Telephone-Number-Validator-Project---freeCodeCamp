const userInput = document.querySelector('#user-input');
const resultsDiv = document.querySelector('#results-div');
const checkBtn = document.querySelector('#check-btn');
const clearBtn = document.querySelector('#clear-btn');

const checkNum = number => {
  if (!number) {
    alert('Please provide a phone number');
  }

  const regEx = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  resultsDiv.textContent = regEx.test(number) ?
  `Valid US number: ${number}` :
  `Invalid US number: ${number}`
}

checkBtn.addEventListener('click', function () {
  event.preventDefault();
  checkNum(userInput.value);
});

clearBtn.addEventListener('click', function() {
  event.preventDefault();
  resultsDiv.textContent = '';
});
