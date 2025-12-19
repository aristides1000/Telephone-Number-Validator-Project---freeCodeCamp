const userInput = document.querySelector('#user-input');
const resultsDiv = document.querySelector('#results-div');
const checkBtn = document.querySelector('#check-btn');
const clearBtn = document.querySelector('#clear-btn');

const checkNum = number => {
  if (!number) {
    alert('Please provide a phone number');
  }
}

checkBtn.addEventListener('click', function () {
  event.preventDefault();
  checkNum(userInput.value);
});
