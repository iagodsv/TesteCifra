const newGameButton = (() => {
    const newGameButtonElement = document.querySelector('.js-new-game-button');

    function show() {
        newGameButtonElement.classList.add('visible');
    }

    newGameButtonElement.addEventListener('click', () => {
        window.location.reload();
    });
    return { show };
})();

export default newGameButton;
