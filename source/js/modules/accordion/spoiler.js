const initSpoiler = () => {
  const parentElement = document.querySelector('[data-spoiler="parent"]');
  if (parentElement) {
    const btnElement = parentElement.querySelector('[data-accordion="button"]');
    if (btnElement) {
      const spoilerBtnToggler = () => {
        if (!parentElement.classList.contains('is-active')) {
          btnElement.textContent = 'СВЕРНУТЬ';
          return;
        }
        btnElement.textContent = 'ПОДРОБНЕЕ';
      };
      btnElement.addEventListener('click', spoilerBtnToggler);
    }
  }
};
export {initSpoiler};
