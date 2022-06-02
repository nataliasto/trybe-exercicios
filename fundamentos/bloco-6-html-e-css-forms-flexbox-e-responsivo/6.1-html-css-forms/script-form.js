const submitButton = document.querySelector('#submit');

function preventDefault(event) {
  event.preventDefault();
}

submitButton.addEventListener('click', preventDefault);
