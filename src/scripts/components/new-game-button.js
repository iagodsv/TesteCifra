const newGameButton = (() => {
    const newGameButtonElement = document.querySelector('.js-new-game-button');
    /* Função para aparecer o botão de nova partida somente quando der erro ou o
            usuário acertar a resposta. Além disso, assim que for apertado, o jogo começa novamente! */
    function show() {
        newGameButtonElement.classList.add('visible');
    }

    newGameButtonElement.addEventListener('click', () => {
        window.location.reload();
    });
    return { show };
})();

export default newGameButton;
