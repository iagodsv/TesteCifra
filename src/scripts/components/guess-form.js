import newGameButton from './new-game-button';
import sevenSegments from './seven-segments';

const guessForm = (() => {
  const guessFormElement = document.querySelector('.js-guess-form');
  const responseElement = document.querySelector('.js-response');

  function disableSubmitButton() {
    guessFormElement.querySelector('input').setAttribute('disabled', true);
    guessFormElement.querySelector('button').setAttribute('disabled', true);
  }

  function validate(guess) {
    if (Number(guess) > window.randNumber) {
      responseElement.innerHTML = 'É menor';
    } else if (Number(guess) < window.randNumber) {
      responseElement.innerHTML = 'É maior';
    } else {
      responseElement.innerHTML = 'Você acertou!!!!';
      responseElement.classList.add('response--success');
      disableSubmitButton();
      newGameButton.show();
      sevenSegments.setStatus('success');
    }
  }

  function showError() {
    responseElement.innerHTML = 'Erro';
    responseElement.classList.add('response--error');
  }

  guessFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { guess } = Object.fromEntries(formData);
    validate(guess);
    sevenSegments.change(guess);
    console.log(Number(guess));
    console.log(window.randNumber);
  });
  return { showError };
})();

export default guessForm;
