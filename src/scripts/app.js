import { fetchRand } from '../services/rand';
import guessForm from './components/guess-form';

import newGameButton from './components/new-game-button';
import sevenSegments from './components/seven-segments';

/* Tratamento do erro 502 */
(async function () {
  const contentElement = document.querySelector('.js-content');
  sevenSegments.render(0, '', '', contentElement);
  const { value, StatusCode } = await fetchRand();
  if (StatusCode) {
    sevenSegments.render(StatusCode, 'Erro', 'error', contentElement);
    newGameButton.show();
  } else {
    window.randNumber = value;
  }
}());
