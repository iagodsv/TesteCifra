const sevenSegments = (() => {
  const sevenSegmentsElement = document.querySelector('.js-seven-segments');

  function change(value) {
    sevenSegmentsElement.innerHTML = value;
  }
  function setStatus(status) {
    sevenSegmentsElement.classList.add(`seven-segments--${status}`);
  }

  return {
    change,
    setStatus,
  };
})();

export default sevenSegments;
