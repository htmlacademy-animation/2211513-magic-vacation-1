export default () => {
  const textAnimateSymbol = (textElement) => {
    let textContent = textElement.textContent;
    textElement.innerHTML = `<span>${textContent}</span>`;
  };

  return {
    textAnimateSymbol,
  };
};
