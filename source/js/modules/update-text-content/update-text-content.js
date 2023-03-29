// Function to update text content based on viewport width

const updateTextContent = () => {
  const updateText = (width, selector, newText) => {
    const breakpoint = window.matchMedia(`(max-width:${width}px)`);
    const TextEl = document.querySelector(`[${selector}]`);
    const originalText = TextEl.textContent;
    const breakpointChecker = () => {
      if (breakpoint.matches) {
        TextEl.textContent = newText;
        return;
      }
      TextEl.textContent = originalText;
    };
    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  };

  updateText(767, 'data-text="hero-btn"', 'БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ');
  updateText(767, 'data-text="catalog-title"', 'Товары и\u00A0услуги Smart\u00A0Device');
};

export {updateTextContent};
