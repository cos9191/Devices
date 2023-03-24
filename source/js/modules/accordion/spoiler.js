const spoiler = document.querySelector('[data-spoiler="parent"]');

let spoilerButton;
if (spoiler) {
  spoilerButton = spoiler.querySelector('[data-accordion="button"]');
}

let initSpoiler = () => {};

if (spoilerButton) {
  const spoilerBtnToggler = () => {
    if (spoiler && spoilerButton && !spoiler.classList.contains('is-active')) {
      spoilerButton.textContent = 'СВЕРНУТЬ';
      return;
    }
    spoilerButton.textContent = 'ПОДРОБНЕЕ';
  };
  initSpoiler = () => {
    if (spoiler && spoilerButton) {
      spoilerButton.addEventListener('click', spoilerBtnToggler);
    }
  };

  initSpoiler();
}

export {initSpoiler};

// const spoilerBtnToggler = () => {
//   if (spoiler && spoilerButton && !spoiler.classList.contains('is-active')) {
//     spoilerButton.textContent = 'СВЕРНУТЬ';
//     return;
//   }
//   spoilerButton.textContent = 'ПОДРОБНЕЕ';
// };
// const initSpoiler = () => {
//   if (spoiler && spoilerButton) {
//     spoilerButton.addEventListener('click', spoilerBtnToggler);
//   }
// };
//
// export {initSpoiler};
