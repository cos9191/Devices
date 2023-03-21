const spoiler = document.querySelector('[data-spoiler="parent"]');
const spoilerButton = spoiler.querySelector('[data-accordion="button"]');

const spoilerBtnToggler = () => {
  if (!spoiler.classList.contains('is-active')) {
    spoilerButton.textContent = 'СВЕРНУТЬ';
    return;
  }
  spoilerButton.textContent = 'ПОДРОБНЕЕ';
};
const initSpoiler = () => {
  if (spoiler && spoilerButton) {
    spoilerButton.addEventListener('click', spoilerBtnToggler);
  }
};

export {initSpoiler};
