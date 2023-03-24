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

// const spoiler = document.querySelector('[data-spoiler="parent"]');
//
// let spoilerButton;
// if (spoiler) {
//   spoilerButton = spoiler.querySelector('[data-accordion="button"]');
// }
//
// let initSpoiler = () => {};
//
// if (spoilerButton) {
//   const spoilerBtnToggler = () => {
//     if (spoiler && spoilerButton && !spoiler.classList.contains('is-active')) {
//       spoilerButton.textContent = 'СВЕРНУТЬ';
//       return;
//     }
//     spoilerButton.textContent = 'ПОДРОБНЕЕ';
//   };
//   initSpoiler = () => {
//     if (spoiler && spoilerButton) {
//       spoilerButton.addEventListener('click', spoilerBtnToggler);
//     }
//   };
//
//   initSpoiler();
// }
//
// export {initSpoiler};

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
