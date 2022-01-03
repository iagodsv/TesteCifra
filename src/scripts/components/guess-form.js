import newGameButton from './new-game-button';
import sevenSegments from './seven-segments';

const guessForm = (() => {
  const guessFormElement = document.querySelector('.js-guess-form');
  const contentElement = document.querySelector('.js-content');

  function disableSubmitButton() {
    guessFormElement.querySelector('input').setAttribute('disabled', true);
    guessFormElement.querySelector('button').setAttribute('disabled', true);
  }

  /* função para validar se o número é maior, menor e se acertou  */
  function validate(guess) {
    if (Number(guess) > window.randNumber) {
      sevenSegments.render(guess, 'É menor', '', contentElement);
    } else if (Number(guess) < window.randNumber) {
      sevenSegments.render(guess, 'É maior', '', contentElement);
    } else {
      sevenSegments.render(guess, 'Você acertou!!!!', 'success', contentElement);
      disableSubmitButton();
      newGameButton.show();
    }
  }

  /* */
  guessFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { guess } = Object.fromEntries(formData);
    validate(guess);
  });
})();

export default guessForm;
