const sevenSegments = (() => {
  const segmentContainerElement = document.createElement('div');
  segmentContainerElement.classList.add('seven-segments__container');

  function render(value, description, status, ref = document.body, position = 'afterbegin') {
    segmentContainerElement.innerHTML = '';
    const arrayValues = String(value).split('');
    const segmentContentElement = document.createElement('div');
    segmentContentElement.classList.add('seven-segments__content');

    if (description) {
      const templateDescription = `<span class="seven-segments__response ${status && `seven-segments__response--${status}`} ">${description}</span>`;
      segmentContainerElement.insertAdjacentHTML('beforeend', templateDescription);
    }

    arrayValues.forEach((itemValue) => {
      const templateSegment = `<div class="seven-segments" data-value=${itemValue}>
        <div class="segment segment__A segment__A--${status}"></div>
        <div class="segment segment__B segment__B--${status}"></div>
        <div class="segment segment__C segment__C--${status}"></div>
        <div class="segment segment__D segment__D--${status}"></div>
        <div class="segment segment__E segment__E--${status}"></div>
        <div class="segment segment__F segment__F--${status}"></div>
        <div class="segment segment__G segment__G--${status}"></div>
      </div>`;

      segmentContentElement.insertAdjacentHTML('beforeend', templateSegment);
    });
    segmentContainerElement.insertAdjacentElement('beforeend', segmentContentElement);
    ref.insertAdjacentElement(position, segmentContainerElement);
  }

  function setStatus(status) {
    sevenSegmentsElement.classList.add(`seven-segments--${status}`);
  }

  return {
    render,
    setStatus,
  };
})();

export default sevenSegments;
