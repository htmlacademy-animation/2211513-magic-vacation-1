export default () => {
  window.addEventListener(`load`, () =>  {
    let body = document.querySelector(`body`);
    body.classList.add(`body-load`);
  });
};
