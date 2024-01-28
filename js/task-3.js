const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

function greeting(event) {
  if (event.currentTarget.value.trim() !== '') {
    output.textContent = event.currentTarget.value.trim();
  } else {
    output.textContent = 'Anonymous';
  }
}
textInput.addEventListener('input', greeting);
textInput.addEventListener('blur', () => (textInput.value = ''));
