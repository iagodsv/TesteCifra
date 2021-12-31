import { fetchRand } from '../services/rand';
import guessForm from './components/guess-form';

import './components/new-game-button';
import sevenSegments from './components/seven-segments';

(async function () {
    const { value, StatusCode } = await fetchRand();
    if (StatusCode) {
        sevenSegments.change(StatusCode);
        guessForm.showError();
        sevenSegments.setStatus('error');
    } else {
        window.randNumber = value;
    }
}());
